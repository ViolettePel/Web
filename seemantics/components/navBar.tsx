import Link from "next/link";

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#ffffff",
        outlineStyle: "solid",
        outlineColor: "#f2e7fd",
        outlineWidth: "1px",
        borderRadius: "15px",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/posts/../">
          <span style={{ color: "#D1BFE2" }}>
            <strong>See</strong>
          </span>
          mantics
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/posts/presentation"
              >
                Mon projet recherche
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/posts/acgtk"
              >
                FraCas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                target="_blank"
                href="https://team.inria.fr/semagramme/"
              >
                L'équipe sémagramme
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link active dropdown-toggle"
                href="/posts/summary"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About me
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/posts/mon_parcours">
                    Mon parcours
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/posts/about_me">
                    Qui je suis
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    target="_blank"
                    href="https://www.linkedin.com/in/violette-pelgrims/"
                  >
                    Mon LinkedIn
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
