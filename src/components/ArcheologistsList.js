const ArcheologistsList = ({ archeologists, title }) => {
  return (
    <div className="artefac-list">
      <h2>{title}</h2>
      {archeologists.map((archeologist) => (
        <div className="artefac-preview" key={archeologist.id}>
          <h2>{archeologist.first_name + " " + archeologist.surname}</h2>
        </div>
      ))}
    </div>
  );
};

export default ArcheologistsList;
