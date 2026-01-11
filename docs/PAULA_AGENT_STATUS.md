# Paula Agent - Integrations-Status & Dokumentation

## 1. Projektübersicht

"Paula" ist ein interaktiver KI-Video-Agent für die Webseite **Linkty**, der über das **LiveKit Agents Framework** und **Beyond Presence** (für den Avatar-Stream) realisiert wird.

### Aktueller Status (Pre-Interaction Phase)
Der Agent ist so konfiguriert, dass er beim Laden der Seite bereits **stumm sichtbar** ist (Idling/Winken). Die Sprachinteraktion beginnt erst nach explizitem Klick des Nutzers auf "Gespräch starten". Dies löst das Browser-Autoplay-Problem und erhöht die Nutzerakzeptanz.

### Herausforderungen & Lösungen
*   **Job Dispatching:** LiveKit Cloud sendet ohne explizite Dispatch-Regeln keine Jobs an Worker. Da keine Regeln im Dashboard konfiguriert werden konnten, wurde der Agent auf den **Dev-Modus** umgestellt, der sich proaktiv mit dem Raum verbindet.
*   **Autoplay Policy:** Browser blockieren Audio, das ohne Nutzerinteraktion startet. Lösung: Das Video wird stumm geladen, Audio erst nach Klick aktiviert.
*   **Environment Mismatch:** Frontend und Backend nutzten zeitweise unterschiedliche LiveKit-Server. Dies wurde vereinheitlicht (beide nutzen nun LiveKit Cloud).

---

## 2. Codebasis & Dateiinhalte

### A. Paula Agent (Backend)

Diese Dateien gehören in das Repository `SvenE1988/livekit-paula` (Deploy via Coolify).

**Datei: `paula-agent/agent.py`**
```python
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
    openai
)
from livekit.plugins.turn_detector.multilingual import MultilingualModel

logger = logging.getLogger("agent-Paula")
logger.setLevel(logging.INFO)

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
        pass

server = AgentServer()

def prewarm(proc: JobProcess):
    logger.info("🔥 Prewarming process...")
    proc.userdata["vad"] = silero.VAD.load()
    logger.info("✅ Prewarming complete.")

server.setup_fnc = prewarm

@server.rtc_session(agent_name="LinktyTest")
async def entrypoint(ctx: JobContext):
    logger.info(f"🚀 Connecting to room: {ctx.room.name}")
    await ctx.connect()
    logger.info(f"✅ Connected to room: {ctx.room.name}")

    session = AgentSession(
        stt=inference.STT(model="deepgram/nova-3", language="de"),
        llm=openai.LLM(model="gpt-4o"),
        tts=inference.TTS(
            model="cartesia/sonic-3",
            voice="de-DE-neural2-F",
            language="de"
        ),
        turn_detection=MultilingualModel(),
        vad=ctx.proc.userdata["vad"],
        preemptive_generation=True,
    )

    logger.info("🎥 Initializing Beyond Presence Avatar Session...")
    avatar = bey.AvatarSession(
        avatar_id="694c83e2-8895-4a98-bd16-56332ca3f449"
    )

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

    # Video-Stream im Raum starten
    # WICHTIG: session muss an avatar.start übergeben werden, damit Lippen-Sync funktioniert
    logger.info("▶️ Starting Avatar stream...")
    await avatar.start(session, room=ctx.room)
    logger.info("✅ Avatar stream started.")

if __name__ == "__main__":
    cli.run_app(server)
```

**Datei: `paula-agent/Dockerfile`**
```dockerfile
FROM python:3.11-slim

# System-Abhängigkeiten für Audio/Video-Verarbeitung
RUN apt-get update && apt-get install -y \
    build-essential \
    libasound2-dev \
    portaudio19-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# 1. Abhängigkeiten installieren
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 2. Den gesamten Code kopieren
COPY . .

# 3. KI-Modelle vorab laden (verhindert Download-Fehler zur Laufzeit)
RUN python agent.py download-files

# Startbefehl: 'dev' Modus erzwingt direkte Verbindung ohne Dispatch-Regeln
CMD ["python", "agent.py", "dev", "--room", "paula-demo"]
```

**Datei: `paula-agent/requirements.txt`**
```text
livekit-agents
livekit-plugins-bey
livekit-plugins-google
livekit-plugins-openai
livekit-plugins-deepgram
livekit-plugins-cartesia
livekit-plugins-silero
livekit-plugins-turn-detector
livekit-plugins-noise-cancellation
python-dotenv
```

---

### B. Frontend Integration (React)

Diese Dateien befinden sich im Haupt-Repository `Linkty-Hauptseite`.

**Datei: `src/features/test/BeyondPresenceAgent.tsx`**
```tsx
import React, { useEffect, useState } from 'react';
import {
  LiveKitRoom,
  ParticipantTile,
  useParticipants,
  RoomAudioRenderer,
  useRoomContext,
  useConnectionState,
} from '@livekit/components-react';
import { ConnectionState, RoomEvent, Track } from 'livekit-client';
import '@livekit/components-styles';

export const BeyondPresenceAgent: React.FC = () => {
  const [connectionData, setConnectionData] = useState<{ token: string; url: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('https://livekit-test.erkens.cloud/api/token?room=paula-demo&name=testuser');
        if (!response.ok) {
          throw new Error('Token konnte nicht geladen werden');
        }
        const data = await response.json();
        setConnectionData({
          token: data.token,
          url: data.url
        });
      } catch (err) {
        console.error('Error fetching token:', err);
        setError('Verbindung zum Token-Server fehlgeschlagen.');
      }
    };

    fetchToken();
  }, []);

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-200">
        {error}
      </div>
    );
  }

  if (!connectionData) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-gray-900 rounded-2xl border border-gray-800">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-gray-400 font-medium italic">Verbindung wird hergestellt...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-black group">
      <LiveKitRoom
        video={false} // Wir senden kein eigenes Video
        audio={isAudioEnabled} // Mikrofon erst nach Klick
        token={connectionData.token}
        serverUrl={connectionData.url}
        connect={true}
        data-lk-theme="default"
        style={{ height: '100%' }}
        onConnected={() => console.log('✅ Connected to LiveKit Room')}
        onDisconnected={() => console.log('❌ Disconnected from LiveKit Room')}
        onError={(err) => console.error('⚠️ LiveKit Room Error:', err)}
      >
        <RoomDebugListener />
        <AgentLayout />
        
        {/* Overlay-Button, wenn Audio noch nicht aktiv ist */}
        {!isAudioEnabled && (
          <div className="absolute inset-0 flex items-center justify-center bg-transparent z-20">
            <button
              onClick={() => setIsAudioEnabled(true)}
              className="px-8 py-4 bg-white/90 hover:bg-white text-gray-900 font-bold rounded-full shadow-xl transition-all transform hover:scale-105 flex items-center gap-3 backdrop-blur-md border border-white/50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" x2="12" y1="19" y2="22"/>
              </svg>
              Gespräch starten
            </button>
          </div>
        )}

        {isAudioEnabled && <RoomAudioRenderer />}
      </LiveKitRoom>
    </div>
  );
};

const RoomDebugListener: React.FC = () => {
  const room = useRoomContext();
  const connectionState = useConnectionState();

  useEffect(() => {
    console.log(`🔌 Connection State: ${connectionState}`);
  }, [connectionState]);

  useEffect(() => {
    if (!room) return;

    const onParticipantConnected = (participant: any) => {
      console.log('👤 Participant Connected:', participant.identity);
    };

    const onParticipantDisconnected = (participant: any) => {
      console.log('👋 Participant Disconnected:', participant.identity);
    };

    const onTrackSubscribed = (track: Track, publication: any, participant: any) => {
      console.log(`📺 Track Subscribed: ${track.kind} from ${participant.identity}`);
    };

    const onTrackSubscriptionFailed = (trackSid: string, participant: any) => {
      console.error(`🚫 Track Subscription Failed: ${trackSid} from ${participant.identity}`);
    };

    const onAudioPlaybackFailed = (error: any) => {
        console.warn("🔇 Audio Playback Failed (Autoplay Policy?):", error);
    };
    
    // Video Element Debugging Check Loop
    const videoCheckInterval = setInterval(() => {
      const videos = document.querySelectorAll('video');
      videos.forEach((v, i) => {
        console.log(`🎥 Video Element ${i}:`, {
          paused: v.paused,
          muted: v.muted,
          readyState: v.readyState,
          srcObject: !!v.srcObject,
          videoWidth: v.videoWidth,
          error: v.error
        });
      });
    }, 5000);

    // Event Listener
    const onAudioPlaybackStatusChanged = (playing: boolean) => {
         console.log(`🔊 Audio Playback Status Changed: ${playing ? 'Playing' : 'Stopped'}`);
    };

    room.on(RoomEvent.ParticipantConnected, onParticipantConnected);
    room.on(RoomEvent.ParticipantDisconnected, onParticipantDisconnected);
    room.on(RoomEvent.TrackSubscribed, onTrackSubscribed);
    room.on(RoomEvent.TrackSubscriptionFailed, onTrackSubscriptionFailed);
    // @ts-ignore
    room.on('audioPlaybackStatusChanged', onAudioPlaybackStatusChanged);
    // @ts-ignore
    room.on('audioPlaybackFailed', onAudioPlaybackFailed);

    return () => {
      room.off(RoomEvent.ParticipantConnected, onParticipantConnected);
      room.off(RoomEvent.ParticipantDisconnected, onParticipantDisconnected);
      room.off(RoomEvent.TrackSubscribed, onTrackSubscribed);
      room.off(RoomEvent.TrackSubscriptionFailed, onTrackSubscriptionFailed);
      // @ts-ignore
      room.off('audioPlaybackStatusChanged', onAudioPlaybackStatusChanged);
       // @ts-ignore
      room.off('audioPlaybackFailed', onAudioPlaybackFailed);
      clearInterval(videoCheckInterval);
    };
   }, [room]);

  return null;
};

const AgentLayout: React.FC = () => {
  const participants = useParticipants();
  const [showHelp, setShowHelp] = useState(false);
  
  useEffect(() => {
    console.log('👥 Teilnehmer-Update:', participants.map(p => ({
      identity: p.identity,
      isLocal: p.isLocal,
      tracks: Array.from(p.trackPublications.values() as any).map((tp: any) => ({
        kind: tp.kind,
        isSubscribed: tp.isSubscribed,
        source: tp.source
      }))
    })));

    const timer = setTimeout(() => {
      if (participants.filter(p => !p.isLocal).length === 0) {
        setShowHelp(true);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [participants]);

  const avatarParticipant = participants.find(p => !p.isLocal);
  
  if (!avatarParticipant) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 p-6 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-white text-lg font-medium animate-pulse mb-2">Warte auf Paula...</p>
        {showHelp && (
          <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-700/50 rounded-xl max-w-xs transition-opacity animate-in fade-in">
            <p className="text-yellow-200 text-xs">
              Paula tritt dem Raum nicht bei. Stelle sicher, dass der Python-Agent läuft und mit der gleichen LiveKit-URL verbunden ist.
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative h-full w-full bg-black">
      <ParticipantTile
        participant={avatarParticipant}
        className="agent-tile border-none"
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
      />
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-white text-xs font-semibold uppercase tracking-wider">Live</span>
        </div>
      </div>
    </div>
  );
};
```

**Datei: `src/features/test/TestChatPage.tsx`**
```tsx
import React from 'react';
import { BeyondPresenceAgent } from './BeyondPresenceAgent';

export const TestChatPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Beyond Presence Agent Test
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Direkte LiveKit-Integration mit automatischem Video-Fokus.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-2 overflow-hidden border border-gray-100">
          <BeyondPresenceAgent />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Wie es funktioniert</h3>
            <p className="text-blue-700 text-sm">
              Diese Seite verbindet sich direkt mit der LiveKit Cloud. Der Agent ist ein Teilnehmer im Raum, dessen Video-Stream von Beyond Presence gerendert wird.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
            <h3 className="text-lg font-semibold text-green-900 mb-2">Interaktion</h3>
            <p className="text-green-700 text-sm">
              Sobald die Verbindung steht, kannst du mit dem Agenten sprechen. Stelle sicher, dass Mikrofon und Kamera freigegeben sind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

### C. Konfiguration & API-Schlüssel

**Token-Service (Hetzner)**
Dieser Node.js Server generiert die Zugangs-Tokens für das Frontend.
*   **Endpoint:** `https://livekit-test.erkens.cloud/api/token`
*   **LiveKit URL:** `wss://linkty-webseite-lb5l5qct.livekit.cloud`
*   **API Key:** `APIjAnWDdqRvYGi`
*   **API Secret:** `AY3FyNkFKFp8PzxZDxZFZ127FQfy2lTbaqWnRDFqo5I`
*   **Raum:** `paula-demo`
*   **Metadaten:** `{ "agent": true, "language": "de" }` (Wird dem Token hinzugefügt, um Dispatch zu triggern)

**Coolify Environment Variables (für Agent Container)**
*   `LIVEKIT_URL`: `wss://linkty-webseite-lb5l5qct.livekit.cloud`
*   `LIVEKIT_API_KEY`: `APIjAnWDdqRvYGi`
*   `LIVEKIT_API_SECRET`: `AY3FyNkFKFp8PzxZDxZFZ127FQfy2lTbaqWnRDFqo5I`
*   `BEY_API_KEY`: (In Coolify hinterlegt)
*   `DEEPGRAM_API_KEY`: (In Coolify hinterlegt)
*   `OPENAI_API_KEY`: (In Coolify hinterlegt)
*   `CARTESIA_API_KEY`: (In Coolify hinterlegt)

---

**Hinweis:** Die API-Secrets wurden hier im Klartext wiedergegeben, da sie vom Nutzer bereitgestellt wurden. In einer öffentlichen Dokumentation sollten diese **niemals** committed werden.