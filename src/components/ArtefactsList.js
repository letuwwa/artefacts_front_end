import { Link } from "react-router-dom";
import styles from "./ArtefactPreview.module.css";

const ArtefactsList = ({ artefacts, title }) => {
  return (
    <div className="artefact-list">
      <h2>{title}</h2>
      {artefacts.map((artefact) => (
        <div className={styles.listPreview} key={artefact.id}>
          <Link to={`/artefacts/${artefact.id}`}>
            <h2>{artefact.name}</h2>
          </Link>
          {artefact.archeologist && (
            <p>
              Discovered by {artefact.archeologist.first_name}{" "}
              {artefact.archeologist.surname}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ArtefactsList;
