import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [rackets, setRackets] = useState([]);

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

  return (
    <GlobalContext.Provider value={{ rackets, setRackets }}>
      {children}
    </GlobalContext.Provider>
  );
}
