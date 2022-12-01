import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/navBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mon Parcours Recherche</title>
        <meta
          name="description"
          content="A small dive into NLP and semantic representation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar></NavBar>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Produire et tester une représentation sémantique unifiée
        </h1>

        <p className={styles.description}>
          Mon projet de deuxième année aux Mines est un projet de Recherche au
          Loria au sein de l'équipe sémagramme autour du traitement automatique
          des langues.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/ViolettePel/Web"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow my project on my github
        </a>
      </footer>
    </div>
  );
}
