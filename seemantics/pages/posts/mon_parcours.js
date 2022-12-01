import NavBar from "../../components/navBar";
import styles from "../../styles/Home.module.css";

export default function monParcours() {
  return (
    <div className={styles.container}>
      <div className="navBar">
        <NavBar></NavBar>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>Mon Parcours Recherche</h1>

        <p className={styles.description}>
          Produire et tester une représentation sémantique unifiée.
        </p>
      </main>
    </div>
  );
}
