import { useState } from "react";

const Create = () => {
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [createdIn, setCreatedIn] = useState('');
const [discoveredIn, setDiscoveredIn] = useState('');

    return ( 
        <div className="create">
            <h2>Add New Artefact</h2>
            <form>
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
                <button>Save Artefact</button>
            </form>
        </div>
     );
}
 
export default Create;