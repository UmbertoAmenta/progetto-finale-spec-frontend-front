import { useContext } from "react";
import { Link } from "react-router-dom";

// context
import { GlobalContext } from "../contexts/GlobalContext";

export default function RacketsList() {
  const { rackets } = useContext(GlobalContext);

  const racketsExp = rackets.filter((r) => r.category === "expert");
  const racketsInt = rackets.filter((r) => r.category === "intermediate");
  const racketsBeg = rackets.filter((r) => r.category === "beginner");

  return (
    <main>
      {/* <h2>Lista racchette</h2> */}
      <div className="catalogo">
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
      </div>
    </main>
  );
}
