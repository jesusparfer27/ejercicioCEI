import { useState, useEffect } from 'react';
import Dnd from './components/dnd/Dnd';
import FakeStore from './components/fake-store/FakeStore'
import PokeApi from './components/poke-api/PokeApi';
import RandomUser from './components/random-user/RandomUser';
import Rawg from './components/rawg/Rawg';
import './App.css';

function App() {
  const [selectedLink, setSelectedLink] = useState(null);
  const [actualPage, setActualPage] = useState("Dnd");

  const handleLinkClick = (page) => {
    setActualPage(page);
    setSelectedLink(null);

    useEffect (() => {
      
    }, [])
  };

  return (
    <>
      <nav>
        <span
          className={`NavLink ${actualPage === "Dnd" ? "active" : ""}`}
          onClick={() => handleLinkClick("Dnd")}
        >
          Dnd
        </span>
        <span
          className={`NavLink ${actualPage === "FakeStore" ? "active" : ""}`}
          onClick={() => handleLinkClick("FakeStore")}
        >
          FakeStore
        </span>
        <span
          className={`NavLink ${actualPage === "PokeApi" ? "active" : ""}`}
          onClick={() => handleLinkClick("PokeApi")}
        >
          PokeApi
        </span>
        <span
          className={`NavLink ${actualPage === "RandomUser" ? "active" : ""}`}
          onClick={() => handleLinkClick("RandomUser")}
        >
          RandomUser
        </span>
        <span
          className={`NavLink ${actualPage === "Rawg" ? "active" : ""}`}
          onClick={() => handleLinkClick("Rawg")}
        >
          Rawg
        </span>
      </nav>
      <div>
        {actualPage === "Dnd" && <Dnd />}
        {actualPage === "FakeStore" && <FakeStore />}
        {actualPage === "PokeApi" && <PokeApi />}
        {actualPage === "RandomUser" && <RandomUser />}
        {actualPage === "Rawg" && <Rawg/>}
      </div>
    </>
  );
}

export default App;
