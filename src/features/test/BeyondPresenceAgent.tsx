import React, { useEffect, useState } from 'react';
import {
  LiveKitRoom,
  VideoTrack,
  RoomAudioRenderer,
  useConnectionState,
  useVoiceAssistant, // NEU: Der spezielle Hook für Avatar-Agents!
} from '@livekit/components-react';
import { RoomEvent } from 'livekit-client';
import '@livekit/components-styles';

/**
 * BeyondPresenceAgent Component
 * 
 * Diese Komponente stellt die Verbindung zum LiveKit-Raum her.
 * Der Avatar lädt sofort (Video), das Mikrofon wird erst nach User-Interaktion aktiviert.
 */
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

        {/* Audio-Renderer nur wenn aktiviert */}
        {isAudioEnabled && <RoomAudioRenderer />}
      </LiveKitRoom>
    </div>
  );
};

/**
 * Avatar Layout - nutzt useVoiceAssistant Hook
 * Dieser Hook kennt die Avatar-Worker-Logik von Beyond Presence!
 */
const AgentLayout: React.FC = () => {
  const connectionState = useConnectionState();
  const [showHelp, setShowHelp] = useState(false);

  // 🎯 DER GAME-CHANGER: useVoiceAssistant Hook!
  // Dieser Hook holt automatisch die richtigen Tracks vom Avatar-Worker
  const { agent, audioTrack, videoTrack } = useVoiceAssistant();

  // Debug-Logging
  useEffect(() => {
    console.log('🎬 Voice Assistant State:', {
      hasAgent: !!agent,
      hasAudioTrack: !!audioTrack,
      hasVideoTrack: !!videoTrack,
      agentIdentity: agent?.identity,
      connectionState
    });
  }, [agent, audioTrack, videoTrack, connectionState]);

  // Timer für Hilfe-Meldung
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!videoTrack) {
        setShowHelp(true);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [videoTrack]);

  // Warte auf Video-Track vom Avatar-Worker
  if (!videoTrack) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 p-6 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-white text-lg font-medium animate-pulse mb-2">Warte auf Paula...</p>
        {showHelp && (
          <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-700/50 rounded-xl max-w-xs transition-opacity animate-in fade-in">
            <p className="text-yellow-200 text-xs">
              Paula tritt dem Raum nicht bei. Stelle sicher, dass:
              <br/>• Der Python-Agent läuft (`python main.py`)
              <br/>• Beyond Presence API Key korrekt ist
              <br/>• LiveKit-URL öffentlich erreichbar ist
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative h-full w-full bg-black">
      {/* VideoTrack mit dem Track vom Avatar-Worker */}
      <VideoTrack
        trackRef={videoTrack}
        className="h-full w-full"
        style={{ objectFit: 'cover' }}
      />
      
      {/* Overlay für Status */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-white text-xs font-semibold uppercase tracking-wider">Live</span>
        </div>
      </div>

      {/* Optional: Agent Identity anzeigen (Debug) */}
      {agent && (
        <div className="absolute bottom-4 left-4 z-10">
          <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
            <span className="text-white text-xs opacity-75">
              Agent: {agent.identity}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};