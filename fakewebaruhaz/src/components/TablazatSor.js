import React, { useContext } from "react";
import { ApiContext } from "./contexts/ApiContext";

function TablazatSor(props) {
  const { deletAdat } = useContext(ApiContext);
  return (
    <tr>
      <td>{props.elem.id}</td>
      <td>
        <img
          className="img-fluid"
          src={props.elem.image}
          alt={props.elem.title}
        />
      </td>
      <td>{props.elem.title}</td>
      <td>{props.elem.description}</td>
      <td>{props.elem.price}</td>
      <td>
        <button type="button" className="btn btn-warning">
          Modosítás
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            deletAdat("/products",props.elem.id);
          }}
          type="button"
          className="btn btn-danger"
        >
          Törlés
        </button>
      </td>
    </tr>
  );
}

export default TablazatSor;
