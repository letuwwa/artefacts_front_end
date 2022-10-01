import { useState, useEffect } from "react";
import ArtefactsList from "./ArtefactsList";

const Home = () => {
    const [artefacts, setArtefacts] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/artefacts/artefact/")
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setArtefacts(data);
            });
    }, []);

    return (
    <div className="home">
        {artefacts && <ArtefactsList artefacts={artefacts} title="What we have found:"/>}
    </div>
  );
}
 
export default Home;