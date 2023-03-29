import React, { useState, useEffect } from 'react'; //step 1 read use effect
import axios from 'axios';


const Poke = () => {
    const [pokemon, setPokemon] = useState([]);
    // const [type, setType] = useEffect("");

    const getpokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=805")// can change limit to any number
            .then((response) => {
                setPokemon(response.data.results);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);}
            )};

        return (
            <div>
                <button onClick={getpokemon}><p>gotta catch them all</p></button>
                {pokemon.length > 0 && pokemon.map((pokemon, index) => {
                    return (<div key={index}>{pokemon.name}</div>)
                })}
            </div>
        );
    }

export default Poke;
