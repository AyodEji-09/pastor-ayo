const ErrorDisplay = ({ error }) => {
  return (
    <>
      <div
        className="alert text-center alert-danger fade show p-1"
        role="alert"
      >
        <p className="lead">{error}</p>
      </div>
    </>
  );
};

export default ErrorDisplay;
