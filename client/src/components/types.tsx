
export interface SpotifyTrack {
    id: string;
    name: string;
    artists: string[];
    album: { image: string };
    previewUrl: string | null;
}
export interface TrackSuggestion {
    id: string;
    name: string;
    artist: string;
    album: string;
    image?: string;
  }
export interface Player {
    name: string;
    score: number;
    guesses: string[];
    finished: boolean;
}

export type LobbyPayload =
  | { lobbyId: string; name: string; isHost: boolean } 
  | { players: Player[] }                            
  | { lobbyId: string }                                
  | Record<string, unknown>;                               

  
export interface LobbyMessage {
  type: "joinLobby" | "updatePlayers" | "startGame" | string;
  payload?: LobbyPayload;
}