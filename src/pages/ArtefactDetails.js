import { toast } from "react-toastify";
import useFetch from "../utils/useFetch";
import styles from "./ArtefactDetails.module.css";
import LoadingRender from "../components/LoadingRender";
import { useHistory, useParams } from "react-router-dom";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const ArtefactDetails = () => {
  const { uuid } = useParams();
  const {
    fetchedData: artefact,
    isLoading,
    error,
  } = useFetch(SERVER_URL + "/artefacts_api/artefacts/" + uuid);
  const history = useHistory();

  const notify = () => toast("Artefact has been deleted!");

  const handleClick = () => {
    fetch(SERVER_URL + "/artefacts_api/artefacts/" + uuid, {
      method: "DELETE",
    }).then(() => {
      notify();
      history.push("/");
    });
  };

  return (
    <div className={styles.artefactDetails}>
      <LoadingRender isLoading={isLoading} error={error} />
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
