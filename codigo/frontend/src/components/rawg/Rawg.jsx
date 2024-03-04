import { useEffect, useState } from 'react'
import './Rawg.css'

function Rawg() {
    const [games, setGames] = useState([]);
  
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
          const response = await fetch('https://api.rawg.io/api/games?key=e732598aa8c94ccf87896c320203c476', options);
          const data = await response.json();
          setGames(data.results); // Corregida esta línea
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
        <h1>Games</h1>
        <ul>
          {games.map((game) => (
            <li key={game} className='gamebloque'>
                <div><img src={game.background_image}  className="gameimage" alt="image_game" /></div>
                {game.name}
            </li>
          ))}
        </ul>
      </>
    );
  }

export default Rawg