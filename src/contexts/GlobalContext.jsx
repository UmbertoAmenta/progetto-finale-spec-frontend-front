import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [rackets, setRackets] = useState([]);
  const [racket, setRacket] = useState(null);
  const [wishRackets, setWishRackets] = useState(() => {
    const saved = localStorage.getItem("wishRackets");
    return saved ? JSON.parse(saved) : [];
  });

  // richiesta dei dati parziali di tutte le racchette al mount del componente
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3001/rackets");
        const data = await res.json();
        setRackets(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  // richiesta dei dati completi della singola racchetta
  const loadRacket = async (id) => {
    setRacket(null);

    try {
      const res = await fetch(`http://localhost:3001/rackets/${id}`);
      const data = await res.json();
      setRacket(data);
    } catch (error) {
      setRacket(null);
      console.error(error);
    }
  };

  // salvataggio della lista preferiti nel local storage al modificarsi della lista stessa
  useEffect(() => {
    localStorage.setItem("wishRackets", JSON.stringify(wishRackets));
  }, [wishRackets]);

  return (
    <GlobalContext.Provider
      value={{
        rackets,
        setRackets,
        racket,
        setRacket,
        loadRacket,
        wishRackets,
        setWishRackets,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
