import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom";

const ArtefactDetails = () => {
    const { uuid } = useParams()
    const {fetchedData: artefact, isLoading, error} = useFetch("http://localhost:8000/artefacts_api/artefacts/" + uuid)
    const history = useHistory();

    const handleClick = () => {
        fetch("http://localhost:8000/artefacts_api/artefacts/" + uuid, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="artefact-details">
            { isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { artefact && (
                <article>
                     <h2>{ artefact.name }</h2>
                     { artefact.archeologist && <p>Discovered by {artefact.archeologist.first_name}</p>}
                     { artefact.discovery_year && <div>date of discovery: {artefact.discovery_year}</div>}
                     { artefact.creation_year && <div>created at: {artefact.creation_year}</div>}
                     <button onClick={handleClick}>Delete artefact</button>
                </article>
            )}
        </div>
     );
}
 
export default ArtefactDetails;