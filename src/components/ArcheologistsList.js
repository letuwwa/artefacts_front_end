import styles from "./ArtefactPreview.module.css";

const ArcheologistsList = ({ archeologists, title }) => {
  return (
    <div className="archeologist-list">
      <h2>{title}</h2>
      {archeologists.map((archeologist) => (
        <div className={styles.listPreview} key={archeologist.id}>
          <h2>{archeologist.first_name + " " + archeologist.surname}</h2>
        </div>
      ))}
    </div>
  );
};

export default ArcheologistsList;
