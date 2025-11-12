import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JoinLobby() {
  const [name, setName] = useState("");
  const [lobbyCode, setLobbyCode] = useState("");
  const navigate = useNavigate();

  const joinLobby = () => {
    if (!name || !lobbyCode) return;
    navigate(`/multiplayer/${lobbyCode}?&name=${name}`);
  };

  return (
    <div>
      <h1>Join Lobby</h1>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Lobby code"
        value={lobbyCode}
        onChange={(e) => setLobbyCode(e.target.value)}
      />

      <button
        onClick={joinLobby}
      >
        Join Lobby
      </button>
    </div>
  );
}
