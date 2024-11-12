import React, { useContext, useState } from "react";
import { ApiContext } from "./contexts/ApiContext";

function Urlap() {
  const { postAdat, katLista } = useContext(ApiContext);
  const [adat, setAdat] = useState({
    title: "...",
    price: "1000",
    category: "...",
    description: "...",
    image: "...",
  });
  function adatKuld(event) {
    event.preventDefault();
    postAdat("/products", adat);
  }

  function valtozasKezeles(event) {
    const sv = { ...adat };
    sv[event.target.id] = event.target.value;
    setAdat({ ...sv });
  }

  return (
    <form onSubmit={adatKuld}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Termék neve:
        </label>
        <input
          value={adat.title}
          onChange={valtozasKezeles}
          pattern="^[A-Z][a-zA-Z\s]{2,}$"
          type="text"
          className="form-control"
          id="title"
          aria-describedby="titleHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Termék ára:
        </label>
        <input
          value={adat.price}
          min={1000}
          max={100000}
          onChange={valtozasKezeles}
          type="number"
          className="form-control"
          id="price"
          aria-describedby="priceHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Termék ketegória:
        </label>
        <select
          className="form-select mb-3"
          aria-label="Default select example"
        >
          <option>Open this select menu</option>
          <>
            {katLista.map((elem, index) => {
              return (
                <option value={index + 1} key={index}>
                  {elem}
                </option>
              );
            })}
          </>
        </select>
      </div>

      <div className="form-floating mb-3">
        <textarea
          className="form-control "
          placeholder="Leave a comment here"
          id="description"
        ></textarea>
        <label htmlFor="description">Termék leírás:</label>
      </div>

      <button type="submit" className="btn btn-primary mb-3">
        Submit
      </button>
    </form>
  );
}

export default Urlap;
