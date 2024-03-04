import { useState } from 'react';
import Dnd from './components/dnd/Dnd';
import FakeStore from './components/fake-store/FakeStore';
import PokeApi from './components/poke-api/PokeApi';
import './App.css';

function App() {
  const [selectedLink, setSelectedLink] = useState(null);
  const [actualPage, setActualPage] = useState("Dnd");

  const handleLinkClick = (page) => {
    setActualPage(page);
    setSelectedLink(null);
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
      </nav>
      <div>
        {actualPage === "Dnd" && <Dnd />}
        {actualPage === "FakeStore" && <FakeStore />}
        {actualPage === "PokeApi" && <PokeApi />}
      </div>
    </>
  );
}

export default App;
