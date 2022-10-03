import { useState, useEffect } from "react";
import ArtefactsList from "./ArtefactsList";

const Home = () => {
    const [artefacts, setArtefacts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/artefacts/artefact/")
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setArtefacts(data);
                setIsLoading(false);
            });
        }, 1000)
    }, []);

    return (
    <div className="home">
        { isLoading && <div>Loading...</div> }
        {artefacts && <ArtefactsList artefacts={artefacts} title="What we have found:"/>}
    </div>
  );
}
 
export default Home;