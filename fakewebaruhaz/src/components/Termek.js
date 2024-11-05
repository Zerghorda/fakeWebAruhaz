import React, { useContext } from "react";
import { KosarContext } from "../contexts/KosarContex";
function Termek(props) {
  const { kosarba } = useContext(KosarContext);
  return (
    <div className="card col-lg-3 m-2">
      <div class="card-header">
        <h1>{props.elem.title}</h1>
      </div>
      <div className="card-body">
        <img
          className="img-fluid"
          src={props.elem.image}
          alt={props.elem.title}
        />
        <p>{props.elem.description}</p>
      </div>
      <div className="card-footer row">
        <button
          type="button"
          className="btn btn-primary col-lg-6"
          onClick={() => {
            kosarba(props.elem);
          }}
        >
          Kosárba
        </button>
        <b className="col-lg-6">{props.elem.price}€</b>
      </div>
    </div>
  );
}

export default Termek;
