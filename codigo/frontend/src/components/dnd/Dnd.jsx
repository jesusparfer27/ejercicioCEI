import { useState, useEffect } from 'react';
import './Dnd.css'

const Dnd = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const controller = new AbortController();
            const options = {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
                signal: controller.signal
            };

            try {
                const response = await fetch('https://www.dnd5eapi.co/api/classes/', options);
                const data = await response.json();
                setCharacters(data.results);
            } catch (error) {
                console.log(error);
            } finally {
                controller.abort();
            }
        };

        fetchData();

        return () => {
            // Cleanup function to abort the fetch if the component is unmounted
           
        };
    }, []);

    return (
        <>
            <h1>Characters</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.index}>{character.name}
                    <a href={character.url}></a></li>
                ))}
            </ul>
            <h2></h2>
        </>
    );
};

export default Dnd;
