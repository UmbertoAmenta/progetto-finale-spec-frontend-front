import { useContext } from "react";
import { NavLink } from "react-router-dom";

// context
import { GlobalContext } from "../contexts/GlobalContext";

// Menù laterale
export default function Menu() {
  const { wishRackets } = useContext(GlobalContext);

  let howManyWhished = 0;
  if (wishRackets?.length != 0) {
    howManyWhished = wishRackets.length;
  } else {
    howManyWhished = 0;
  }

  return (
    <aside>
      <nav>
        {/* Home page */}
        <div>
          <NavLink to="/">
            <img src="/home.png" alt="home" />
            <span>Home</span>
          </NavLink>
        </div>

        {/* Catalogo */}
        <div>
          <NavLink to="/rackets">
            <img src="/catalogue.jpg" alt="catalogue" />
            <span>Catalogo</span>
          </NavLink>
        </div>

        {/* Lista preferiti - con indice numerico elementi nella lista */}
        <div>
          <NavLink to="/wishlist">
            <img src="/wishlist.jpg" alt="wishlist" />
            <span>{howManyWhished !== 0 ? howManyWhished : "0"}</span>
            <span>Desiderat{howManyWhished === 1 ? "a" : "e"}</span>
          </NavLink>
        </div>

        {/* Pagina di confronto */}
        <div>
          <NavLink to="/vs">
            <img src="/vs.jpg" alt="vs" />
            <span>Challenge</span>
          </NavLink>
        </div>
      </nav>
    </aside>
  );
}
