import React, { useContext } from "react";
import TablazatSor from "./TablazatSor";
import { ApiContext } from "./contexts/ApiContext";

function Tablazat() {
  const { termekLista } = useContext(ApiContext);
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Kép</th>
          <th scope="col">Cím</th>
          <th scope="col">Leírás</th>
          <th scope="col">Ár</th>
          <th scope="col">Modosítás</th>
          <th scope="col">Törlés</th>
        </tr>
      </thead>
      <tbody>
        <>
          {termekLista.map((elem, index) => {
            return <TablazatSor elem={elem} key={index} index={index} />;
          })}
        </>
      </tbody>
    </table>
  );
}

export default Tablazat;
