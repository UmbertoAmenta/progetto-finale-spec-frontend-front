import { useContext, useEffect, useState } from "react";

// context
import { GlobalContext } from "../contexts/GlobalContext";

export default function GameMode() {
  const { rackets, loadRacket, racket } = useContext(GlobalContext);

  const [searchInputs, setSearchInputs] = useState(["", ""]);

  const searchedRackets = [
    rackets.filter((r) =>
      r.title.toLowerCase().includes(searchInputs[0].trim().toLowerCase())
    ),
    rackets.filter((r) =>
      r.title.toLowerCase().includes(searchInputs[1].trim().toLowerCase())
    ),
  ];

  const [vsRackets, setVsRackets] = useState(["", ""]);
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
      {/* <h2>Che l'incontro abbia inizio!</h2> */}

      <div className="table">
        <div className="table-header">
          <img src="/vs.jpg" alt="" />

          <span className="search">
            <input
              type="text"
              placeholder="Cerca per brand / modello"
              value={searchInputs[0]}
              onChange={(e) => {
                const newRackets = [...searchInputs];
                newRackets[0] = e.target.value;
                setSearchInputs(newRackets);
              }}
            />
            {searchInputs[0] && searchedRackets[0].length > 0 && (
              <ul className="dropdown">
                {searchedRackets[0].map((r) => (
                  <li
                    key={r.id}
                    onClick={() => {
                      setActualIndex(0);
                      loadRacket(r.id);
                      const newInput = [...searchInputs];
                      newInput[0] = "";
                      setSearchInputs(newInput);
                    }}
                  >
                    {r.title}
                  </li>
                ))}
              </ul>
            )}
          </span>
          {vsRackets[0] !== "" && (
            <span className="search">
              <input
                type="text"
                placeholder="Cerca per brand / modello"
                value={searchInputs[1]}
                onChange={(e) => {
                  const newRackets = [...searchInputs];
                  newRackets[1] = e.target.value;
                  setSearchInputs(newRackets);
                }}
              />
              {searchInputs[1] && searchedRackets[1].length > 0 && (
                <ul className="dropdown">
                  {searchedRackets[1].map((r) => (
                    <li
                      key={r.id}
                      onClick={() => {
                        setActualIndex(1);
                        loadRacket(r.id);
                        const newInput = [...searchInputs];
                        newInput[1] = "";
                        setSearchInputs(newInput);
                      }}
                    >
                      {r.title}
                    </li>
                  ))}
                </ul>
              )}
            </span>
          )}
        </div>

        {vsRackets[0] !== "" && (
          <div className="table-content">
            <div className="col-params">
              <h5>immagine</h5>
              <h5>Brand</h5>
              <h5>Modello</h5>
              <h5>Lunghezza</h5>
              <h5>Peso</h5>
              <h5>Bilanciamento</h5>
              <h5>Profilo</h5>
              <h5>Testa</h5>
              <h5>Schema corde</h5>
              <h5>Tensione raccomandata</h5>
              <h5>Prezzo medio</h5>
              {/* <h5>Descrizione</h5>
              <h5>Tecnologie</h5> */}
            </div>

            {vsRackets.length > 0 &&
              vsRackets.map((r, index) =>
                vsRackets[index] !== "" ? (
                  <div key={index} className="col-racket">
                    <img src={r.image} alt={r.title} />
                    <span>{r.brand}</span>
                    <span>{r.model}</span>
                    <span>{r.length} cm</span>
                    <span>{r.weight_unstrung} g</span>
                    <span>{r.balance} mm</span>
                    <span>{r.frame_profile} mm</span>
                    <span>{r.string_bed_size} in²</span>
                    <span>{r.string_pattern}</span>
                    <span>{r.recommended_tension}</span>
                    <span>{r.price?.toFixed(2)} €</span>
                    {/* <span>{r.description}</span>
                    <span>{r.technologies}</span> */}
                  </div>
                ) : null
              )}
          </div>
        )}
      </div>
    </main>
  );
}
