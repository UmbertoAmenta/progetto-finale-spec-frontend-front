import { useContext, useState } from "react";
import { Link } from "react-router-dom";

// context
import { GlobalContext } from "../contexts/GlobalContext";

export default function RacketsList() {
  const { rackets } = useContext(GlobalContext);

  const [searchInput, setSearchInput] = useState("");
  const searchedRackets = rackets.filter((r) =>
    r.title.toLowerCase().includes(searchInput.trim().toLowerCase())
  );

  // Inizializzazione categorie e loro filtro
  const [categories, setCategories] = useState({
    expert: true,
    intermediate: true,
    beginner: true,
  });
  const handlerCategory = (cat) => {
    setCategories((selectedCat) => {
      const updatedCat = { ...selectedCat };
      updatedCat[cat] = !selectedCat[cat];
      return updatedCat;
    });
  };

  const [sortBy, setSortBy] = useState();
  const [sortOrder, setSortOrder] = useState("desc");
  let sortedRackets = [...searchedRackets];
  if (sortBy === "new") {
    sortedRackets.sort((a, b) =>
      sortOrder === "desc"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt)
    );
  }
  if (sortBy === "title") {
    sortedRackets.sort((a, b) =>
      sortOrder === "desc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
  }

  const racketsExp = sortedRackets.filter((r) => r.category === "expert");
  const racketsInt = sortedRackets.filter((r) => r.category === "intermediate");
  const racketsBeg = sortedRackets.filter((r) => r.category === "beginner");

  let atLeastACategory;
  if (
    categories.expert === false &&
    categories.intermediate === false &&
    categories.beginner === false
  ) {
    atLeastACategory = false;
  } else {
    atLeastACategory = true;
  }

  return (
    <main>
      <div className="navigator">
        <span className="search">
          <input
            type="text"
            placeholder="Cerca per brand / modello"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </span>

        <span className="filter">
          <span>Livello di gioco:</span>

          <div>
            <label>
              <input
                type="checkbox"
                checked={categories.expert}
                onChange={() => handlerCategory("expert")}
              />
              Esperto
            </label>

            <label>
              <input
                type="checkbox"
                checked={categories.intermediate}
                onChange={() => handlerCategory("intermediate")}
              />
              Intermedio
            </label>

            <label>
              <input
                type="checkbox"
                checked={categories.beginner}
                onChange={() => handlerCategory("beginner")}
              />
              Principiante
            </label>
          </div>
        </span>

        <span className="sort">
          Ordina per:
          <div>
            <button
              type="button"
              onClick={() => {
                if (sortBy === "new") {
                  setSortOrder(sortOrder === "desc" ? "asc" : "desc");
                } else {
                  setSortBy("new");
                  setSortOrder("desc");
                }
              }}
            >
              <span className="sort-arrow">
                {sortBy === "new" ? (sortOrder === "desc" ? "⬇️" : "⬆️") : ""}
              </span>
              Nuovi arrivi
            </button>

            <button
              type="button"
              onClick={() => {
                if (sortBy === "title") {
                  setSortOrder(sortOrder === "desc" ? "asc" : "desc");
                } else {
                  setSortBy("title");
                  setSortOrder("desc");
                }
              }}
            >
              <span className="sort-arrow">
                {sortBy === "title" ? (sortOrder === "desc" ? "⬇️" : "⬆️") : ""}
              </span>
              Brand - Modello
            </button>
          </div>
        </span>
      </div>

      {!atLeastACategory && (
        <div className="no-category">
          <h1>
            ⚠️ Devi scegliere almeno un <strong>Livello di gioco</strong>
          </h1>
        </div>
      )}

      {searchedRackets.length !== 0 ? (
        <div className="catalogo">
          {categories.expert && racketsExp.length > 0 && (
            <div>
              <h3>
                Livello di gioco
                <br />
                "Esperto"
              </h3>
              {racketsExp.map((r) => (
                <Link key={r.id} to={`/rackets/${r.id}`}>
                  <div>{r.title}</div>
                </Link>
              ))}
            </div>
          )}

          {categories.intermediate && racketsInt.length > 0 && (
            <div>
              <h3>
                Livello di gioco
                <br />
                "Intermedio"
              </h3>
              {racketsInt.map((r) => (
                <Link key={r.id} to={`/rackets/${r.id}`}>
                  <div>{r.title}</div>
                </Link>
              ))}
            </div>
          )}

          {categories.beginner && racketsBeg.length > 0 && (
            <div>
              <h3>
                Livello di gioco
                <br />
                "Principiante"
              </h3>
              {racketsBeg.map((r) => (
                <Link key={r.id} to={`/rackets/${r.id}`}>
                  <div>{r.title}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="empty-list">
          <h1>La ricerca non ha ottenuto nessun risultato</h1>
        </div>
      )}
    </main>
  );
}
