const ArtefactsList = ({artefacts, title, handleDelete}) => {
    return ( 
        <div className="artefac-list">
            <h2>{ title }</h2>
            {artefacts.artefacts.map(artefact => (
                <div className="artefac-preview" key={artefact.id} >
                    <h2>{ artefact.name }</h2>
                    <p>{ artefact.description }</p>
                </div>
            ))}
        </div>
     );
}
 
export default ArtefactsList   ;