import { useContext, useEffect, useState } from "react";

// context
import { GlobalContext } from "../contexts/GlobalContext";

// components
import SearchBarVs from "../components/SearchBarVs";
import RacketDetailsVs from "../components/RacketDetailsVs";

export default function GameMode() {
  const { rackets, loadRacket, racket, wishRackets } =
    useContext(GlobalContext);

  const [searchInputs, setSearchInputs] = useState(["", "", "", ""]);

  const searchedRackets = searchInputs.map((input) =>
    rackets.filter((r, index) =>
      r.title.toLowerCase().includes(input.trim().toLowerCase())
    )
  );

  const [vsRackets, setVsRackets] = useState(["", "", "", ""]);
  const [actualIndex, setActualIndex] = useState(null);

  useEffect(() => {
    if (racket && racket.success && actualIndex != null) {
      setVsRackets((rs) => {
        const newRacket = [...rs];
        newRacket[actualIndex] = racket.racket;
        return newRacket;
      });
      setActualIndex(null);
    }
  }, [racket, actualIndex]);

  return (
    <main className="gamemode">
      <div className="table">
        <div className="params-col">
          <div className="table-header">
            <img src="/vs.jpg" alt="" />
          </div>

          <div className="table-content">
            <div className="col-params">
              <span></span>
              <span>Brand</span>
              <span>Modello</span>
              <span>Lunghezza</span>
              <span>Peso</span>
              <span>Bilanciamento</span>
              <span>Profilo</span>
              <span>Testa</span>
              <span>Schema corde</span>
              <span>Tensione racc.</span>
              <span>Descrizione</span>
              <span>Tecnologie</span>
              <span>Prezzo medio</span>
            </div>
          </div>
        </div>

        {vsRackets.map((r, index) => (
          <div className="racket-col" key={index}>
            <div className="table-header">
              <SearchBarVs
                value={searchInputs[index]}
                onChange={(e) => {
                  const newRackets = [...searchInputs];
                  newRackets[index] = e.target.value;
                  setSearchInputs(newRackets);
                }}
                results={searchedRackets[index]}
                onSelect={(r) => {
                  setActualIndex(index);
                  loadRacket(r.id);
                  const newInput = [...searchInputs];
                  newInput[index] = "";
                  setSearchInputs(newInput);
                }}
                wishRackets={wishRackets}
              />
            </div>
            <div className="table-content">
              {r ? <RacketDetailsVs racket={r} /> : null}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
