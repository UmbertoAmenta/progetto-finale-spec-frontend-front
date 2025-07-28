import Logo from "./Logo";

// Header della pagina contenente logo e Titolo web app
export default function Header() {
  return (
    <header>
      <div className="logo-frame">
        <Logo />
      </div>
      <div>
        <h1>Tennis Racket Finder</h1>
      </div>
    </header>
  );
}
