import { useState } from "react";

const Create = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [createdIn, setCreatedIn] = useState('');
    const [discoveredIn, setDiscoveredIn] = useState('');
    const [isLoading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const artefact = {
            'name': name, 
            'description': description,
            'creation_year': createdIn,
            'discovery_year': discoveredIn,
        }
        setLoading(true);
        fetch("http://localhost:8000/artefacts_api/artefacts/", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(artefact)
        }).then(() => {
            console.log("data added");
            setLoading(false);
        })
    }

    return ( 
        <div className="create">
            <h2>Add New Artefact</h2>
            <form onSubmit={handleSubmit}>
                <label>Artefact name:</label>
                <input 
                    type="text"
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Artefact description:</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <label>Discovered in:</label>
                <input 
                    type="number"
                    required
                    value={discoveredIn}
                    onChange={(e) => setDiscoveredIn(e.target.value)}
                />
                <label>Created in:</label>
                <input 
                    type="number"
                    required
                    value={createdIn}
                    onChange={(e) => setCreatedIn(e.target.value)} 
                />
                { !isLoading && <button>Save Artefact</button>}
                { isLoading && <button disabled>Saving Artefact</button>}
            </form>
        </div>
     );
}
 
export default Create;