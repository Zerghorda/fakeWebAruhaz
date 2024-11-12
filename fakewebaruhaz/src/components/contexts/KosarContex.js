import { createContext, useState } from "react";

export const KosarContext = createContext("");
export const KosarProvider = ({ children }) => {
  const [kosarLista, setkosarLista] = useState([]);
  function kosarba(obj) {
    const segLista = [...kosarLista];
    segLista.push(obj);
    setkosarLista([...segLista]);
  }
  return (
    <KosarContext.Provider value={{ kosarLista, kosarba }}>
      {children}
    </KosarContext.Provider>
  );
};
