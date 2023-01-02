const CreateButton = ({ isLoading, buttonText, loadingText }) => {
  return (
    <div>
      {!isLoading && <button>{buttonText}</button>}
      {isLoading && <button disabled>{loadingText}</button>}
    </div>
  );
};

export default CreateButton;
