import React from "react";
import Kosar from "../components/Kosar";
import Termekek from "../components/Termekek";

function Public() {
  return (
    <main className="row">
      <aside className="col-lg-3">
        <h3>Kosár</h3>
        <Kosar />
      </aside>
      <article className="col-lg-9 row">
        <h3>Termékek</h3>
        <Termekek />
      </article>
      <footer className="col-lg-12">Tar Gergő</footer>
    </main>
  );
}

export default Public;
