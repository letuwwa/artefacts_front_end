const ArtefactsList = (prop) => {
    const artefacts = prop.artefacts
    const title = prop.title
    
    return ( 
        <div className="artefac-list">
            <h2>{ title }</h2>
            {artefacts.map(artefact => (
                <div className="artefac-preview" key={artefact.id} >
                <h2>{ artefact.title }</h2>
                <p>Written by { artefact.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default ArtefactsList   ;