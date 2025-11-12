import { useState, useEffect } from "react";
import type{ TrackSuggestion } from "./types";

interface Props {
  onSelect: (track: TrackSuggestion) => void;
  
}

export default function Autocomplete({ onSelect }: Props) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<TrackSuggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(`localhost:8000/api/spotify/search?q=${query}`);
        const data = await res.json();
        setSuggestions(data);
        setIsOpen(true);
      } catch (err) {
        console.error("Search error:", err);
      }
    }, 300); //debounce 300ms

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="relative w-64">
      <input
        type="text"
        className="bg-white text-black w-full px-4 py-2 rounded"
        placeholder="Guess the song..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsOpen(true)}
      />

      {isOpen && suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white text-white w-full mt-1 rounded shadow-lg max-h-48 overflow-y-auto">
          {suggestions.map((track) => (
            <li
              key={track.id}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                onSelect(track);
                setQuery(track.name);
                setIsOpen(false);
              }}
            >
              {track.image && (
                <img
                  src={track.image}
                  alt={track.name}
                  className="w-8 h-8 rounded"
                />
              )}
              <div>
                <p className="font-medium">{track.name}</p>
                <p className="text-sm text-gray-600">{track.artist}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
