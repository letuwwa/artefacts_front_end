import { useState } from "react";
import ArtefactsList from "./ArtefactsList";

const Home = () => {
    const [artefacts, setArtefacts] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    
    const handleDelete = (id) => {
        const newArtefacts = artefacts.filter(artefact => artefact.id !== id);
        setArtefacts(newArtefacts);
    }

    return (
    <div className="home">
        <ArtefactsList artefacts={artefacts} title="What we have found:" handleDelete={handleDelete}/>
    </div>
  );
}
 
export default Home;