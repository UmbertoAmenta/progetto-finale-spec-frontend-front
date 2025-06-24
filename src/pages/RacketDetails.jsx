import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// context
import { GlobalContext } from "../contexts/GlobalContext";

export default function RacketDetails() {
  const { id } = useParams();
  const { racket, loadRacket } = useContext(GlobalContext);

  const imgPlaceholder = "/imgPlaceholder.jpg";

  useEffect(() => {
    if (id) loadRacket(id);
  }, [id]);

  const selected = racket?.racket;

  if (!racket) {
    return (
      <main className="details-load">
        <h2>Caricamento...</h2>
      </main>
    );
  }

  if (racket.success === false) {
    return (
      <main className="details-404">
        <h2>
          Racchetta non trovata, dai uno sguardo al
          <Link to="/rackets"> Catalogo</Link>
        </h2>
      </main>
    );
  }

  return (
    <main className="details">
      <nav className="breadcrumb">
        <Link to="/rackets">Catalogo</Link> &gt; <span>{selected.title}</span>
      </nav>

      <h1>{selected.model}</h1>

      <div>
        <span>
          <h2>{selected.brand}</h2>
        </span>
        <span>
          <h2>{selected.release_year}</h2>
        </span>
      </div>
      <div className="grid">
        <div className="img">
          <img src={selected.image || imgPlaceholder} alt={selected.model} />
        </div>

        <div className="info">
          <h3>Caratteristiche Tecniche</h3>
          <div className="grid-info">
            <span>Lunghezza</span>
            <span>{selected.length} cm</span>

            <span>Peso</span>
            <span>{selected.weight_unstrung} g</span>

            <span>Bilanciamento</span>
            <span>{selected.balance} mm</span>

            <span>Profilo</span>
            <span>{selected.frame_profile} mm</span>

            <span>Testa</span>
            <span>{selected.string_bed_size} in²</span>

            <span>Schema corde</span>
            <span>{selected.string_pattern}</span>

            <span>Tensione raccomandata</span>
            <span>{selected.recommended_tension}</span>

            <span>Prezzo medio</span>
            <span>{selected.price.toFixed(2)} €</span>
          </div>
        </div>

        <div className="description">
          <h3>Descrizione</h3>
          <p>{selected.description}</p>
        </div>

        <div className="tech">
          <h3>Tecnologie</h3>
          <div>
            {selected.technologies.map((t, index) => (
              <p key={index}>{t}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
