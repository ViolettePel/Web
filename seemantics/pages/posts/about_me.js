import NavBar from "../../components/navBar";
import styles from "../../styles/Home.module.css";

export default function me() {
  return (
    <div className={styles.container}>
      <div className="navBar">
        <NavBar></NavBar>
      </div>

      <main className={styles.main}>
        <h2 className={styles.subtitle}>A mon propos</h2>

        <p className={styles.description}>
          Je m'appelle Violette et j'ai 21 ans. Actuellement étudiante en école
          d'ingénieur, je me spécialise dans l'informatique, un domaine qui m'a
          toujours passionné. Cependant, mes centres d'intérêt sont multiples et
          je me passionne également pour les arts et la linguistique.
        </p>
        <p className={styles.description}>
          C'est d'ailleurs cette passion pour les langues qui m'a conduite à
          m'orienter vers un parcours de recherche en traitement automatique des
          langues au sein du laboratoire Loria à Nancy. Mon intérêt pour la
          linguistique m'a conduit à explorer cette voie de recherche, qui se
          concentre sur les bases théoriques et pratiques du traitement du
          langage naturel, plutôt que sur les techniques d'apprentissage en
          profondeur telles que les réseaux de neurones.
        </p>
      </main>
    </div>
  );
}
