import ArcheologistsList from "../components/ArcheologistsList";
import useFetch from "../components/useFetch";

const ArcheologistsPage = () => {
    const { fetchedData: archeologists, isLoading, error } = useFetch("http://localhost:8000/artefacts_api/archeologists/")
    return ( 
        <div className="archeologist-preview">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div> }
            {archeologists && <ArcheologistsList archeologists={archeologists.archeologists} title="Our employee:"/>}
        </div>
     );
}
 
export default ArcheologistsPage;