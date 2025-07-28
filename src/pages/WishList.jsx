import { useContext } from "react";

// context
import { GlobalContext } from "../contexts/GlobalContext";

export default function WishList() {
  const { wishRackets, setWishRackets } = useContext(GlobalContext);

  // Elimina dai preferiti
  const notWished = (id) => {
    setWishRackets(wishRackets.filter((r) => r.id !== id));
  };

  return (
    <main className="wish-page">
      <div className="wish-page-header">
        <h2>Le tue racchette preferite</h2>
      </div>

      <div className="wish-list">
        {wishRackets.length === 0 ? (
          <div className="empty-list">
            <h1>Nessuna racchetta nei preferiti!</h1>
          </div>
        ) : (
          wishRackets.map((r) => (
            <div className="wish-card" key={r.id}>
              <div className="card-image">
                <img src={r.image} alt={r.brand} />
              </div>
              <div className="card-info">
                <div className="card-info-header">
                  <div>
                    <div>{r.brand}</div>
                    <div>{r.model}</div>
                  </div>
                  <button
                    type="button"
                    className="wish-button"
                    onClick={() => notWished(r.id)}
                  >
                    💔
                  </button>
                </div>
                <div className="card-info-content">
                  <div>
                    <div>Lunghezza</div>
                    <div>Peso </div>
                    <div>Piatto corde</div>
                  </div>
                  <div>
                    <div>{r.length} cm</div>
                    <div>{r.weight_unstrung} g</div>
                    <div>{r.string_bed_size} in²</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
