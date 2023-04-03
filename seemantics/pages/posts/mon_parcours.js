import NavBar from "../../components/navBar";
import styles from "../../styles/Home.module.css";

export default function monParcours() {
  return (
    <div className={styles.container}>
      <div className="navBar">
        <NavBar></NavBar>
      </div>

      <main className={styles.main}>
        <h2 className={styles.subtitle}>Mes études</h2>

        <p className={styles.description}>
          Mon parcours scolaire a commencé par l'obtention de mon Baccalauréat
          Scientifique S-SI en 2019, ce qui m'a permis de consolider mes bases
          scientifiques et technologiques. J'ai ensuite poursuivi mes études en
          classe préparatoire MPSI-PSI*, qui est une filière prestigieuse en
          France pour préparer aux concours d'entrée dans les grandes écoles
          d'ingénieurs. Cette expérience m'a permis de renforcer mes
          connaissances et compétences en mathématiques, en physique, en chimie
          et en sciences de l'ingénieur.
        </p>

        <p className={styles.description}>
          Finalement, j'ai intégré l'Ecole des Mines de Nancy, dans le
          département informatique avec un parcours recherche, où je me
          concentre sur l'étude et la recherche en profondeur des bases de
          l'informatique et des sciences des données. Ce parcours de formation
          est axé sur l'étude des bases de la linguistique plus que sur
          l'apprentissage profond. Cette formation offre une opportunité unique
          d'approfondir mes connaissances en informatique et de découvrir les
          domaines de la recherche en sciences des données et du traitement de
          l'information.
        </p>

        <h2 className={styles.subtitle}>Mon engagement associatif</h2>

        <p className={styles.description}>
          Depuis que j'ai intégré l'Ecole des Mines de Nancy, j'ai eu
          l'opportunité de m'engager dans plusieurs associations étudiantes.
          J'ai commencé en tant qu'assistante communication pour TEDxMinesNancy,
          une conférence annuelle organisée par les étudiants pour partager des
          idées novatrices sur différents sujets. Par la suite, j'ai été élue
          vice-présidente de l'association gala de l'école, ce qui m'a permis de
          participer à l'organisation d'un événement majeur de l'école. Le
          budget du gala s'élève à 28 000 euros, ce qui m'a offert une
          expérience significative en matière de gestion de budget et de
          coordination d'équipe.
        </p>
        <p className={styles.description}>
          En parallèle, j'ai également eu l'occasion de présider l'association
          d'oenologie de l'école, ce qui m'a permis de partager ma passion pour
          le vin et d'organiser des événements autour de cette thématique.
          Enfin, je suis également impliquée au sein du pôle Sensi, une
          association de prévention des violences sexuelles. En tant que membre,
          j'ai pu participer à des actions de sensibilisation et
          d'accompagnement des victimes en cas de besoin.
        </p>
      </main>
    </div>
  );
}
