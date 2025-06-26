import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <aside>
      <nav>
        <div>
          <NavLink to="/">
            <img src="/home.png" alt="home" />
            Home
          </NavLink>
        </div>

        <div>
          <NavLink to="/rackets">
            <img src="/catalogue.jpg" alt="catalogue" />
            Catalogo
          </NavLink>
        </div>

        <div>
          <NavLink to="/whishlist">
            <img src="/whishlist.jpg" alt="whishlist" />
            Le tue preferite
          </NavLink>
        </div>

        <div>
          <NavLink to="/vs">
            <img src="/vs.jpg" alt="vs" />
            Challenge
          </NavLink>
        </div>
      </nav>
    </aside>
  );
}
