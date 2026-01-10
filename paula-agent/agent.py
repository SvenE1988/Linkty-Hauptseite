import os
import logging
from dotenv import load_dotenv
from livekit import rtc
from livekit.agents import (
    Agent,
    AgentServer,
    AgentSession,
    JobContext,
    JobProcess,
    cli,
    inference,
    room_io,
)
from livekit.plugins import (
    bey,
    noise_cancellation,
    silero,
    turn_detector,
    openai  # OpenAI Plugin importiert
)
from livekit.plugins.turn_detector.multilingual import MultilingualModel

# Logger konfigurieren
logger = logging.getLogger("agent-Paula")
logger.setLevel(logging.INFO)
# logging.basicConfig(level=logging.INFO) # Standard-Config kann Konflikte verursachen, lieber gezielt setzen

# Umgebungsvariablen laden (lokal aus Datei, in Coolify aus dem System)
if os.path.exists(".env.local"):
    load_dotenv(".env.local")
else:
    load_dotenv()

class PaulaAgent(Agent):
    def __init__(self) -> None:
        super().__init__(
            instructions="""You are Paula, a friendly and professional assistant for Linkty.
            Respond in plain text only. Be brief, natural and helpful.""",
        )

    async def on_enter(self):
        logger.info("👋 Agent entered conversation context.")
        # Begrüßung generieren, sobald der Agent bereit ist
        await self.session.generate_reply(
            instructions="Begrüße den Nutzer freundlich auf Deutsch und frage, wie du helfen kannst.",
            allow_interruptions=True,
        )

server = AgentServer()

def prewarm(proc: JobProcess):
    logger.info("🔥 Prewarming process...")
    # Silero VAD vorab in den Speicher laden
    proc.userdata["vad"] = silero.VAD.load()
    logger.info("✅ Prewarming complete.")

server.setup_fnc = prewarm

@server.rtc_session(agent_name="LinktyTest")
async def entrypoint(ctx: JobContext):
    logger.info(f"🚀 Connecting to room: {ctx.room.name}")
    await ctx.connect()
    logger.info(f"✅ Connected to room: {ctx.room.name}")

    # Initialisierung der AgentSession
    session = AgentSession(
        # STT: Deepgram für schnelles Verstehen
        stt=inference.STT(model="deepgram/nova-3", language="de"),
        
        # LLM: Wechsel auf OpenAI GPT-4o
        llm=openai.LLM(model="gpt-4o"),
        
        # TTS: Cartesia für natürliche deutsche Stimme
        tts=inference.TTS(
            model="cartesia/sonic-3",
            voice="de-DE-neural2-F",
            language="de"
        ),
        
        # Turn Detection & VAD
        turn_detection=MultilingualModel(),
        vad=ctx.proc.userdata["vad"],
        preemptive_generation=True,
    )

    # Beyond Presence Avatar Integration
    logger.info("🎥 Initializing Beyond Presence Avatar Session...")
    avatar = bey.AvatarSession(
        avatar_id="694c83e2-8895-4a98-bd16-56332ca3f449"
    )
    
    # Video-Stream im Raum starten
    logger.info("▶️ Starting Avatar stream...")
    await avatar.start(ctx.room)
    logger.info("✅ Avatar stream started.")

    # Agenten-Logik starten
    logger.info("🤖 Starting Agent logic...")
    await session.start(
        agent=PaulaAgent(),
        room=ctx.room,
        room_options=room_io.RoomOptions(
            audio_input=room_io.AudioInputOptions(
                noise_cancellation=lambda params: noise_cancellation.BVCTelephony() 
                if params.participant.kind == rtc.ParticipantKind.PARTICIPANT_KIND_SIP 
                else noise_cancellation.BVC(),
            ),
        ),
    )

if __name__ == "__main__":
    # cli.run_app sorgt dafür, dass Befehle wie 'start' und 'download-files' funktionieren
    cli.run_app(server)