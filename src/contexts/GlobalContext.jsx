import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [rackets, setRackets] = useState([]);
  const [racket, setRacket] = useState(null);
  const [wishRackets, setWishRackets] = useState([]);

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
