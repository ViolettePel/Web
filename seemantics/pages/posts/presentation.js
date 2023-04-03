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

        <h2 className={styles.subtitle}>
          Produire et tester une représentation sémantique unifiée
        </h2>

        <div className={styles.description}>
          <h2 className={styles.subtitle}>
            Traitement automatique des langues
          </h2>
          <p className={styles.description}>
            Traitement Automatique des Langues ou Traitement Automatique des
            Langues Naturelles (Natural Language Processing) est un domaine
            multidisciplinaire impliquant l’informatique, la linguistique et
            l’intelligence artificielle et cherche à faciliter le traitement
            numérique des langues naturelles pour diverses applications telles
            que la reconnaissance vocale pour la diction automatique, la
            traduction, le résumé automatique, les assistants automatiques
            (chatbots).
          </p>
        </div>

        <div className={styles.description}>
          <h2 className={styles.subtitle}>
            La question de la représentation sémantique
          </h2>
          <p className={styles.description}>
            Le TAL dans sa version contemporaine est souvent abordé aux travers
            de méthode d’apprentissage profonds et automatiques. Ces méthodes
            numériques n’exploitent souvent pas le principe de
            compositionnalité, un principe linguistique essentiel qui dit que la
            signification d’une expression complexe est définie par les
            significations des expressions la composant ainsi que les règles
            employées pour les combiner. Ce principe fait que l’on peut définir
            des règles inspirées par la logique : c’est le cas de Montague qui a
            formalisé le sens.
          </p>
        </div>
        <div className={styles.description}>
          <h2 className={styles.subtitle}>Qu'est-ce qu'une ACG ?</h2>

          <p className={styles.description}>
            La Grammaire Abstraite Catégorielle (Abstract Categorial Grammar)
            est un cadre linguistique qui a été développé comme un formalisme
            pour la description de la syntaxe du langage naturel. La GAC est
            basée sur l'idée que la structure grammaticale d'une phrase peut
            être représentée comme un calcul catégoriel, qui décrit comment les
            différents mots et expressions dans une phrase se combinent pour
            former une structure grammaticalement correcte.{" "}
          </p>
          <p className={styles.description}>
            Dans la GAC, chaque mot ou expression dans une phrase est assigné à
            une catégorie, qui décrit ses propriétés syntaxiques et sémantiques.
            Ces catégories sont ensuite combinées à travers un ensemble de
            règles qui dictent comment elles peuvent être combinées pour former
            des structures grammaticalement correctes. Une des caractéristiques
            clés de la GAC est qu'elle est un système de typage logique, ce qui
            signifie qu'elle utilise un système de types pour s'assurer que
            seules les structures bien formées peuvent être construites. Ce
            système de types est basé sur l'idée de la composition de fonctions,
            où chaque catégorie est associée à une fonction qui mappe entre les
            types.
          </p>

          <h2 className={styles.subtitle}>Mon travail avec ACGtk</h2>

          <p className={styles.description}>
            ACGtk est un package OCamel développé par les chercheurs du Loria.
            Cet ensemble d'outils fournit un compilateur et un interpréteur pour
            les grammaires catégorielles abstraites (ACG). Les grammaires
            peuvent être compilées puis utilisées par l'interpréteur pour
            analyser (si la grammaire est au plus de second ordre) ou pour
            générer des termes.
          </p>
          <p className={styles.description}>
            Le but de mon parcours recherche est d'étendre le travail
            d'annotation de la suite FraCas sur ACGtk entamé par un étudiant de
            l'ENS dans le cadre d'un stage au Loria. Je prends en entrée les
            différents problèmes FraCas et j'essaye d'obtenir une formule
            logique qui permet de définir la sémantique de la phrase. L'idée
            sera par la suite de tester ces formules pour voir si elle sont
            correctes.
          </p>
        </div>
        <div className={styles.description}>
          <h2 className={styles.subtitle}>La suite FraCas</h2>

          <p className={styles.description}>
            Les tests FraCaS ont été développés par une équipe de chercheurs en
            linguistique et en informatique à l'Université de Saarland en
            Allemagne. Ils ont été publiés pour la première fois en 1996 et ont
            depuis été utilisés par de nombreux chercheurs pour évaluer et
            comparer les performances de différents systèmes TAL.
          </p>
          <p className={styles.description}>
            La suite de tests FraCaS est constituée d'un ensemble de phrases
            annotées manuellement avec des informations de structure et de sens.
            Les systèmes TAL sont évalués en fonction de leur capacité à
            produire des analyses grammaticales et sémantiques correctes pour
            chaque phrase.
          </p>
          <p className={styles.description}>
            Les tests FraCaS ont été largement utilisés dans le domaine de la
            recherche en TAL pour évaluer les performances des différents
            systèmes TAL et pour comparer les approches théoriques et
            méthodologiques dans le domaine. Ils sont également utilisés pour
            tester les capacités des systèmes TAL commerciaux et open-source, et
            pour améliorer leur précision et leur performance.
          </p>
        </div>
      </main>
    </div>
  );
}
