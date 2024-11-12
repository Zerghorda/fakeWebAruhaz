import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Oldalak
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* A publikus tartalom linkje */}
                <Link className="nav-link " to="/">
                  Webáruház
                </Link>
              </li>
              <li className="nav-item">
                {/* Az admin oldal linkjetartalom linkje */}
                <Link className="nav-link" to="/admin">
                  Admin felület
                </Link>
              </li>
            </ul>
            <span class="navbar-text">Navbar text with an inline element</span>
          </div>
        </div>
      </nav>
      <article>
        {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
        <Outlet />
      </article>
    </>
  );
};

export default Layout;
