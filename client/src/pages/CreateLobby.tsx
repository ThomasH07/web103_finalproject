import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateLobby() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const createLobby = () => {
    if (!name) return;
    const code = Math.random().toString(36).substring(2, 7).toUpperCase();
    navigate(`/multiplayer/${code}?host=true&name=${name}`);
  };

  return (
    <div >
      <h1 >Create Lobby</h1>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={createLobby}
      >
        Create Lobby
      </button>
    </div>
  );
}
