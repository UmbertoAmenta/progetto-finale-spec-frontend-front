export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <div>
        <h1>Trova la racchetta perfetta per te! 🎾</h1>
        <h3>
          Confronta le migliori in commercio e trova la più adatta al tuo stile
          di gioco!
        </h3>
      </div>

      {/* Descrizione funzionalità web app */}
      <div className="features">
        <div>
          <span>🔍</span>
          <h4>Ricerca Avanzata</h4>
          <p>
            Ricerca per brand o modello e filtra in base al tuo livello di gioco
          </p>
        </div>
        <div>
          <span>📊</span>
          <h4>Confronta Modelli</h4>
          <p>Metti a confronto le racchette per trovare la più adatta.</p>
        </div>
        <div>
          <span>❤️</span>
          <h4>Preferiti</h4>
          <p>Salva le racchette che ti piacciono di più.</p>
        </div>
      </div>
    </main>
  );
}
