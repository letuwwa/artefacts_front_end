import useFetch from "../components/useFetch";

const ArcheologistsPage = () => {
    const { fetchedData: archeologists, isLoading, error } = useFetch("http://localhost:8000/artefacts_api/archeologists/")
    return ( 
        <div className="archeologist-preview">
            Hi!
        </div>
     );
}
 
export default ArcheologistsPage;