import useFetch from "./useFetch";
import ArtefactsList from "./ArtefactsList";


const Home = () => {
    const { fetchedData: artefacts, isLoading, error } = useFetch("http://localhost:8000/artefacts_api/artefacts")

    return (
    <div className="home">
        { error && <div>{ error }</div>}
        { isLoading && <div>Loading...</div> }
        {artefacts && <ArtefactsList artefacts={artefacts.artefacts} title="What we have found:"/>}
    </div>
  );
}
 
export default Home;