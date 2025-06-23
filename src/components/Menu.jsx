import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <aside>
      <nav>
        {/* icona casa */}
        <NavLink to="/">Home</NavLink>
        {/* icona libro/catalogo */}
        <NavLink to="/rackets" end>
          Catalogo
        </NavLink>
        {/* icona racchetta */}
        <NavLink to="/rackets/:id">Dettaglio</NavLink>
        {/* icona cuore */}
        <NavLink to="/whishlist">Le tue preferite</NavLink>
        {/* icona vs */}
        <NavLink to="/vs">Challenge</NavLink>
      </nav>
    </aside>
  );
}
