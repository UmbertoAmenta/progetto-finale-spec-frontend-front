import Logo from "./Logo";

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
