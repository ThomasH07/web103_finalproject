import { useEffect, useState, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import type {Player, LobbyMessage} from "../components/types";
export default function MultiplayerLobby() {
    const { lobbyId } = useParams<{ lobbyId: string }>();
    const location = useLocation();
    const navigate = useNavigate();
    const wsRef = useRef<WebSocket | null>(null);
  
    const query = new URLSearchParams(location.search);
    const name = query.get("name") || "Anonymous";
    const isHost = query.get("host") === "true";
  
    const [players, setPlayers] = useState<Player[]>([]);
    const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {
      const ws = new WebSocket("ws://localhost:8080");
      wsRef.current = ws;
  
      ws.onopen = () => {
        ws.send(
          JSON.stringify({
            type: "joinLobby",
            payload: { lobbyId, name, isHost },
          })
        );
      };
  
      ws.onmessage = (event) => {
        const msg: LobbyMessage = JSON.parse(event.data);
  
        switch (msg.type) {
          case "updatePlayers":
            setPlayers((msg.payload as { players: Player[] })?.players || []);
            break;
          case "gameStarted":
            setGameStarted(true);
            break;
          default:
            console.warn("Unknown message type:", msg.type);
            break;
        }
      };
  
      ws.onclose = () => console.log("WebSocket closed");
  
      return () => ws.close();
    }, [lobbyId, name, isHost]);
  
    const startGame = () => {
      if (!isHost) return;
      wsRef.current?.send(JSON.stringify({ type: "startGame", payload: { lobbyId } }));
    };
  
    return (
      <div>
        <div>
          <button
            onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
  
        <h1>🎵 Lobby {lobbyId}</h1>
  
        <div>
          <p>
            You are: <span className="font-semibold">{name}</span>
          </p>
  
          {!gameStarted && isHost && (
            <button
              onClick={startGame}
            >
              Start Game
            </button>
          )}
  
          {!gameStarted && !isHost && <p>Waiting for host to start...</p>}
        </div>
  
        <div>
          <h2>Players</h2>
          <ul>
            {players.map((player, i) => (
              <li key={i}>
                <span>{player.name}</span>
                <span>Score: {player.score}</span>
              </li>
            ))}
          </ul>
        </div>
  
        {gameStarted && (
          <div>
            <h2>Game in Progress</h2>
            <p>Render song previews, guess input, and real-time scores here.</p>
          </div>
        )}
      </div>
    );
  }