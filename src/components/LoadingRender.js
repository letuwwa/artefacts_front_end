const LoadingRender = ({ isLoading, error }) => {
  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default LoadingRender;
