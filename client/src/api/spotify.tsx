
export interface SpotifyTrack {
    id: string;
    name: string;
    artists: string[];
    album: {
      name: string;
      image: string;
    };
    previewUrl: string | null;
    duration: number;
    releaseDate: string;
  }
  
export async function fetchTrack(id: string): Promise<SpotifyTrack> {
    const res = await fetch(`http://localhost:8000/api/spotify/track/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch track: ${res.status}`);
    return await res.json();
}
  
export interface SearchSuggestion {
    id: string;
    name: string;
    artist: string;
}

export async function searchTracks(query: string): Promise<SearchSuggestion[]> {
    const res = await fetch(`http://localhost:8000/api/spotify/search/${encodeURIComponent(query)}`);
    if (!res.ok) return [];
    return await res.json();
}
