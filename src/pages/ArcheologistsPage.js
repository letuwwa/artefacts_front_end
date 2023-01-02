import useFetch from "../utils/useFetch";
import LoadingRender from "../components/LoadingRender";
import ArcheologistsList from "../components/ArcheologistsList";

const ArcheologistsPage = () => {
  const {
    fetchedData: archeologists,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/artefacts_api/archeologists/");
  return (
    <div className="archeologist-preview">
      <LoadingRender isLoading={isLoading} error={error} />
      {archeologists && (
        <ArcheologistsList
          archeologists={archeologists.archeologists}
          title="Our employees:"
        />
      )}
    </div>
  );
};

export default ArcheologistsPage;
