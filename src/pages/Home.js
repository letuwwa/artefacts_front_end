import useFetch from "../utils/useFetch";
import LoadingRender from "../components/LoadingRender";
import ArtefactsList from "../components/ArtefactsList";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Home = () => {
  const {
    fetchedData: artefacts,
    isLoading,
    error,
  } = useFetch(SERVER_URL + "/artefacts_api/artefacts/");

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
