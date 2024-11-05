import Kosar from "./components/Kosar";
import Termekek from "./components/Termekek";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fake Webáruház</h1>
      </header>
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
    </div>
  );
}

export default App;
