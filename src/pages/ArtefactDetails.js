import useFetch from "../utils/useFetch";
import styles from "./ArtefactDetails.module.css";
import { useHistory, useParams } from "react-router-dom";

const ArtefactDetails = () => {
  const { uuid } = useParams();
  const {
    fetchedData: artefact,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/artefacts_api/artefacts/" + uuid);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/artefacts_api/artefacts/" + uuid, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className={styles.artefactDetails}>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {artefact && (
        <article>
          <h2>{artefact.name}</h2>
          {artefact.discovery_year && (
            <div>Discovered in: {artefact.discovery_year}</div>
          )}
          {artefact.creation_year && (
            <div>Created in: {artefact.creation_year}</div>
          )}
          <p>{artefact.description}</p>
          <button onClick={handleClick}>Delete artefact</button>
        </article>
      )}
    </div>
  );
};

export default ArtefactDetails;
