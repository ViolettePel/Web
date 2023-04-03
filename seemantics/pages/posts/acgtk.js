import NavBar from "../../components/navBar";
import FracasList from "../../components/fracasList";
import styles from "../../styles/Home.module.css";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function me() {
  return (
    <div className={styles.container}>
      <div className="navBar">
        <NavBar></NavBar>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>Des exemples de représentations</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <FracasList />
            </div>
          </div>
        </div>
        <Button
          variant="btn-outline-primary"
          style={{ borderColor: "#000000", color: "#000000" }}
        >
          <Link
            className="nav-link active"
            aria-current="page"
            href="/posts/newProblem"
          >
            Ajouter un problème
          </Link>
        </Button>
      </main>
    </div>
  );
}
