import { useEffect, useState } from "react";
import { fetchTrack } from "../api/spotify";
import type { SpotifyTrack } from "../components/types";
import { handleGuess } from "../components/handleGuess"; 
import { useNavigate } from "react-router-dom";

const TRACK_IDS = [
  "4uLU6hMCjMI75M1A2tKUQC",
  "0VjIjW4GlUZAMYd2vXMi3b",
  "7qiZfU4dY1lWllzX7mPBI3",
];

export default function Daily() {
  const navigate = useNavigate();
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);

  const loadRandomTrack = async () => {
    const randomId = TRACK_IDS[Math.floor(Math.random() * TRACK_IDS.length)];
    const data = await fetchTrack(randomId);
    setTrack(data);
    setGuesses([]);
    setGameOver(false);
    setGuess("");
  };

  useEffect(() => {
    loadRandomTrack();
  }, []);

  function submitGuess() {
    if (!track || gameOver) return;

    handleGuess(guess, track, guesses, setGuesses, setGameOver);
    setGuess("");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🎵 Daily Beatdle</h1>
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 bg-gray-500 px-4 py-2 rounded hover:bg-gray-600">
        Back to Home
        </button>
      {track ? (
        <>
          {track.previewUrl && (
            <audio controls src={track.previewUrl} className="mb-4" />
          )}

          <div className="flex gap-2 mb-4">
            {[...Array(5)].map((_, i) => {
              const status = guesses[i];
              let bgColor = "bg-gray-800";
              if (status === "correct") bgColor = "bg-green-500";
              else if (status === "wrong") bgColor = "bg-red-500";
              return (
                <div
                  key={i}
                  className={`${bgColor} w-12 h-12 rounded flex items-center justify-center text-white font-bold`}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>

          {!gameOver && (
            <div className="flex flex-col items-center">
              <input
                type="text"
                placeholder="Type the song name..."
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                className="bg-white text-black px-4 py-2 rounded mb-4 w-64"
              />
              <button
                onClick={submitGuess}
                className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 mb-2"
              >
                Submit
              </button>
            </div>
          )}

          {gameOver && (
            <div className="mt-4 text-center">
              <div className="text-2xl font-bold">
                {guesses.includes("correct") ? "🎉 You got it!" : "💀 Game Over!"}
              </div>
              <p className="text-lg mt-2">Song was: {track.name}</p>

              {/* Buttons */}
              <div className="flex gap-4 mt-4 justify-center">
                <button
                  onClick={loadRandomTrack}
                  className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
                >
                  Try Again
                </button>
              </div>
              
            </div>
          )}
        </>
      ) : (
        <p>Loading song...</p>
      )}
    </div>
  );
}
