const ArcheologistsList = () => {
    const { fetchedData: archeologists, isLoading, error } = useFetch("http://localhost:8000/artefacts_api/archeologists/")
    return ( 
        <div className="archeologist-preview">
            Hi!
        </div>
     );
}
 
export default ArcheologistsList;