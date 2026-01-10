import React, { useEffect, useState } from 'react';
import {
  LiveKitRoom,
  ParticipantTile,
  useParticipants,
  RoomAudioRenderer,
} from '@livekit/components-react';
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
      >
        <AgentLayout />
        
        {/* Overlay-Button, wenn Audio noch nicht aktiv ist */}
        {!isAudioEnabled && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-20 transition-all group-hover:bg-black/40">
            <button 
              onClick={() => setIsAudioEnabled(true)}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" x2="12" y1="19" y2="22"/>
              </svg>
              Paula antworten
            </button>
          </div>
        )}

        <RoomAudioRenderer />
      </LiveKitRoom>
    </div>
  );
};

/**
 * Custom Layout für den Agenten
 * Sucht gezielt nach dem Teilnehmer mit Video-Track (Avatar).
 */
const AgentLayout: React.FC = () => {
  const participants = useParticipants();
  const [showHelp, setShowHelp] = useState(false);
  
  // Debug-Logging und Timer für Hilfe
  useEffect(() => {
    console.log('Teilnehmer im Raum:', participants.map(p => ({
      identity: p.identity,
      isLocal: p.isLocal,
      trackCount: p.trackPublications.size
    })));

    const timer = setTimeout(() => {
      if (participants.length <= 1) setShowHelp(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [participants]);

  // Wir suchen den ersten anderen Teilnehmer (das ist meistens der Agent)
  const avatarParticipant = participants.find(p => !p.isLocal);
  
  if (!avatarParticipant) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 p-6 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-white text-lg font-medium animate-pulse mb-2">Warte auf Paula...</p>
        {showHelp && (
          <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-700/50 rounded-xl max-w-xs transition-opacity animate-in fade-in">
            <p className="text-yellow-200 text-xs">
              Paula tritt dem Raum nicht bei. Stelle sicher, dass der Python-Agent läuft (`python agent.py dev`) und mit der gleichen LiveKit-URL verbunden ist.
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
      
      {/* Overlay für Status */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-white text-xs font-semibold uppercase tracking-wider">Live</span>
        </div>
      </div>
    </div>
  );
};
