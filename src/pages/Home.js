import useFetch from "../utils/useFetch";
import LoadingRender from "../components/LoadingRender";
import ArtefactsList from "../components/ArtefactsList";

const Home = () => {
  const {
    fetchedData: artefacts,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/artefacts_api/artefacts/");

  return (
    <div className="home">
      <LoadingRender isLoading={isLoading} error={error} />
      {artefacts && (
        <ArtefactsList
          artefacts={artefacts.artefacts}
          title="What we have found:"
        />
      )}
    </div>
  );
};

export default Home;
