import AddFracasData from "../../components/addFracas";
import NavBar from "../../components/navBar";
import styles from "../../styles/Home.module.css";

const NewProblem = () => {
  return (
    <div className={styles.container}>
      <div className="navBar">
        <NavBar></NavBar>
      </div>
      <div>
        <h1>Enrichir la base de données</h1>
        <AddFracasData />
      </div>
    </div>
  );
};

export default NewProblem;
