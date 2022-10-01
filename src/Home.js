import { useState, useEffect } from "react";
import ArtefactsList from "./ArtefactsList";

const Home = () => {
    const [artefacts, setArtefacts] = useState(null);
    
    const handleDelete = (id) => {
        const newArtefacts = artefacts.filter(artefact => artefact.id !== id);
        setArtefacts(newArtefacts);
    };

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
        {artefacts && <ArtefactsList artefacts={artefacts} title="What we have found:" handleDelete={handleDelete}/>}
    </div>
  );
}
 
export default Home;