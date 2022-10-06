import { Link } from "react-router-dom";

const ArtefactsList = ({artefacts, title}) => {
    return ( 
        <div className="artefac-list">
            <h2>{ title }</h2>
            {artefacts.map(artefact => (
                <div className="artefac-preview" key={artefact.id} >
                    <Link to={`/artefacts/${artefact.id}`}>
                        <h2>{ artefact.name }</h2>
                    </Link>
                    <p>{ artefact.description }</p>
                </div>
            ))}
        </div>
     );
}
 
export default ArtefactsList   ;