import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

const AddFracasData = () => {
  const [problemid, setProblemId] = useState("");
  const [problem, setProblem] = useState("");
  const [representation, setRepresentation] = useState("");

  const handleSubmit = async () => {
    if (problemid === "" || problem === "" || representation === "") {
      return;
    }

    const { data, error } = await supabase.from("fracas").insert({
      problemid: problemid,
      problem: problem,
      representation: representation,
    });
    if (error) {
      console.error(error);
      return;
    }
    console.log(data);
  };

  return (
    <div className="container">
      <h3>Ajouter un problème à la base FraCas</h3>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3" controlId="problemid">
          <Form.Label>Problem ID</Form.Label>
          <Form.Control
            type="text"
            value={problemid}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setProblemId(event.target.value)
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="problem">
          <Form.Label>Problem</Form.Label>
          <Form.Control
            type="text"
            value={problem}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setProblem(event.target.value)
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="representation">
          <Form.Label>Representation</Form.Label>
          <Form.Control
            type="text"
            value={representation}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setRepresentation(event.target.value)
            }
          />
        </Form.Group>

        <Link href="/posts/acgtk">
          <Button
            variant="btn-outline-primary"
            style={{ borderColor: "#000000", color: "#000000" }}
            onClick={handleSubmit}
          >
            Ajouter à la base
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default AddFracasData;
