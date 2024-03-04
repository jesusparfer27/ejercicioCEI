import { useEffect, useState } from 'react';
import './PokeApi.css';

function PokeApi() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController();
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
      };

      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/', options);
        const data = await response.json();
        setPokemons(data.results); // Corregida esta línea
      } catch (error) {
        console.log(error);
      } finally {
        controller.abort();
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>PokeApi</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon} className='pokemonbloque'>{pokemon.name}
          <div><p>{pokemon.url}</p></div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PokeApi;
