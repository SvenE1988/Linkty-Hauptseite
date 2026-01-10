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
    turn_detector
)
from livekit.plugins.turn_detector.multilingual import MultilingualModel

# Logger konfigurieren
logger = logging.getLogger("agent-LinktyTest")
load_dotenv(".env.local")

class DefaultAgent(Agent):
    def __init__(self) -> None:
        super().__init__(
            instructions="""You are Paula, a friendly and professional assistant for Linkty.
            Respond in plain text only. Be brief and natural.""",
        )

    async def on_enter(self):
        # Wir warten kurz, bevor wir grüßen, um sicherzustellen, dass das Video bereit ist
        await self.session.generate_reply(
            instructions="""Greet the user and offer your assistance.""",
            allow_interruptions=True,
        )

server = AgentServer()

def prewarm(proc: JobProcess):
    proc.userdata["vad"] = silero.VAD.load()

server.setup_fnc = prewarm

@server.rtc_session(agent_name="LinktyTest")
async def entrypoint(ctx: JobContext):
    # Initialisierung der Komponenten
    session = AgentSession(
        stt=inference.STT(model="deepgram/nova-3", language="de"),
        llm=inference.LLM(model="google/gemini-2.0-flash"),
        tts=inference.TTS(
            model="cartesia/sonic-3",
            voice="de-DE-neural2-F",
            language="de"
        ),
        turn_detection=None,  # Turn Detector deaktiviert wegen Modell-Fehler
        vad=ctx.proc.userdata["vad"],
        preemptive_generation=True,
    )

    # Beyond Presence Avatar Session
    # Diese Session sendet das Video-Signal basierend auf dem Audio-Output des Agenten
    avatar = bey.AvatarSession(
        avatar_id="694c83e2-8895-4a98-bd16-56332ca3f449"
    )
    
    # Startet das Video SOFORT beim Beitritt des Users
    await avatar.start(ctx.room)

    # Startet die Agenten-Logik
    await session.start(
        agent=DefaultAgent(),
        room=ctx.room,
        room_options=room_io.RoomOptions(
            audio_input=room_io.AudioInputOptions(
                noise_cancellation=lambda params: noise_cancellation.BVCTelephony() if params.participant.kind == rtc.ParticipantKind.PARTICIPANT_KIND_SIP else noise_cancellation.BVC(),
            ),
        ),
    )

if __name__ == "__main__":
    cli.run_app(server)
