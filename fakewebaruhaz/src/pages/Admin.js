import React from "react";
import Tablazat from "../components/Tablazat";
import Urlap from "../components/Urlap";



function Admin() {
  return (
    <main className="row">
      <Urlap />
      <article className="col-lg-12">
        <h2>Táblázat:</h2>
        <Tablazat />
      </article>
    </main>
  );
}

export default Admin;
