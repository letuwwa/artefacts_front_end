import { useState, useEffect } from "react";
import ArtefactsList from "./ArtefactsList";

const Home = () => {
    const [artefacts, setArtefacts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/artefacts/artefact/")
                .then(res => {
                    if(!res.ok) {
                        throw Error("Could not fetch data for that resource");
                    }
                    return res.json();
                })
                .then(data => {
                    setArtefacts(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setError(err.message);
                });
        }, 1000);
    }, []);

    return (
    <div className="home">
        { error && <div>{ error }</div>}
        { isLoading && <div>Loading...</div> }
        {artefacts && <ArtefactsList artefacts={artefacts} title="What we have found:"/>}
    </div>
  );
}
 
export default Home;