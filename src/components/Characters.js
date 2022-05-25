import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacters(res.data.results));
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <ul className="list-group">
        {characters.map((character) => (
          <li key={character.id} className="list-group-item">
            <Link to={`/characters/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;