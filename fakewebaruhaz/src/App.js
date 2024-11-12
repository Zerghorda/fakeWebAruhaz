import Admin from "./pages/Admin";
import Public from "./pages/Public";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fake Webáruház</h1>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Public />} />
              <Route path="admin" element={<Admin />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
