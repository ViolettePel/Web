import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { ListGroup } from "react-bootstrap";
import { FracasProblem } from "../types/FraCas";
import styles from "../styles/Home.module.css";

const FracasList = () => {
  const [fracasProblems, setFracasProblems] = useState<FracasProblem[]>([]);
  const [activeProblem, setActiveProblem] = useState<FracasProblem | null>(
    null
  );

  useEffect(() => {
    async function fetchFracasData() {
      const { data, error } = await supabase
        .from("fracas")
        .select("*")
        .order("problemid", { ascending: true });
      if (error) {
        console.log(error);
        return;
      }
      if (data) {
        setFracasProblems(data as FracasProblem[]);
      }
    }

    fetchFracasData();
  }, []);

  const handleListItemClick = (fracasProblem: FracasProblem) => {
    setActiveProblem(fracasProblem);
  };

  return (
    <div className="row">
      <div className="col-4">
        <ListGroup
          className="list-group-flush"
          style={{
            backgroundColor: "#ffffff",
            outlineStyle: "solid",
            outlineColor: "#f2e7fd",
            outlineWidth: "1px",
            borderRadius: "15px",
          }}
        >
          {fracasProblems.map((fracasProblem, index) => (
            <ListGroup.Item
              key={fracasProblem.problemid}
              action
              active={fracasProblem === activeProblem}
              onClick={() => handleListItemClick(fracasProblem)}
              style={{
                backgroundColor:
                  activeProblem === fracasProblem ? '"#edddfc"' : "inherit",
                border: activeProblem === fracasProblem ? "#edddfc" : "inherit",
                color: activeProblem === fracasProblem ? "black" : "inherit",
              }}
            >
              {fracasProblem.problemid}. {fracasProblem.problem}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="col-8">
        {activeProblem && (
          <>
            <h3>{activeProblem.problemid}</h3>
            <img
              src={`../public/${activeProblem.problemid}.png`}
              alt={activeProblem.problem}
              style={{ maxWidth: "100%" }}
            />
            <p className={styles.small}>{activeProblem.representation}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default FracasList;
