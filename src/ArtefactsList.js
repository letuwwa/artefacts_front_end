const ArtefactsList = ({artefacts, title, handleDelete}) => {
    return ( 
        <div className="artefac-list">
            <h2>{ title }</h2>
            {artefacts.map(artefact => (
                <div className="artefac-preview" key={artefact.id} >
                <h2>{ artefact.title }</h2>
                <p>Written by { artefact.author }</p>
                <button onClick={() => handleDelete(artefact.id)}>delete artefact</button>
                </div>
            ))}
        </div>
     );
}
 
export default ArtefactsList   ;