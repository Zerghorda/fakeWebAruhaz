import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({ children }) => {
  const [termekLista, setTermekLista] = useState([]);
  const [katLista, setKatLista] = useState([]);
  const getAdat = async (vegpont, callbackFv) => {
    try {
      const response = await myAxios.get(vegpont);
      //console.log("adat:", response.data);
      callbackFv(response.data);
    } catch (err) {
      console.log("Hiba történt az adat elküldésekor.");
    } finally {
    }
  };

  const postAdat = async (vegpont, adat) => {
    try {
      const response = await myAxios.post(vegpont, adat);
      console.log("adat:", response.data);
    } catch (err) {
      console.log("Hiba történt az adat küldéskor!", err);
    }
  };
  const deletAdat = async (vegpont, id) => {
    try {
      const response = await myAxios.delete(vegpont + "/" + id);
      console.log("adat:", response.data);
    } catch (err) {
      console.log("Hiba történt az adat küldéskor!", err);
    }
  };
  useEffect(() => {
    getAdat("/products", setTermekLista);
    getAdat("/products/categories", setKatLista);
  }, []);
  return (
    <ApiContext.Provider value={{ termekLista, katLista, postAdat, deletAdat }}>
      {children}
    </ApiContext.Provider>
  );
};
