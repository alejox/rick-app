import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Characters = () => {

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => setCharacter(res.data.results));
        },[])

        console.log(character);

    return (
        <div>
            <h2>Characters</h2>
            <ul className="list-group">
        {character.map((character
        
        
        
        
        ) => (
            <li key={character.id} className="list-group-item">
            <Link to={`/characters/${character.id}`}>{character.name}</Link>
            </li>
        ))}
        </ul>
        </div>
    );
};

export default Characters;