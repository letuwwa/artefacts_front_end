import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./Create.module.css";
import { useHistory } from "react-router-dom";
import CreateButton from "../components/CreateButton";

const Create = () => {
  const notify = () => toast("Artefact has been saved!");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createdIn, setCreatedIn] = useState("");
  const [discoveredIn, setDiscoveredIn] = useState("");
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const artefact = {
      name: name,
      description: description,
      creation_year: createdIn,
      discovery_year: discoveredIn,
    };
    setLoading(true);
    fetch("http://localhost:8000/artefacts_api/artefacts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artefact),
    }).then(() => {
      notify();
      setLoading(false);
      history.push("/");
    });
  };

  return (
    <div className={styles.create}>
      <h2>Add New Artefact</h2>
      <form onSubmit={handleSubmit}>
        <label>Artefact name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Artefact description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Discovered in:</label>
        <input
          type="number"
          required
          value={discoveredIn}
          onChange={(e) => setDiscoveredIn(e.target.value)}
        />
        <label>Created in:</label>
        <input
          type="number"
          required
          value={createdIn}
          onChange={(e) => setCreatedIn(e.target.value)}
        />
        <CreateButton
          isLoading={isLoading}
          buttonText="Save artefact"
          loadingText="Saving artefact..."
        />
      </form>
    </div>
  );
};

export default Create;
