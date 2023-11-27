export const Button = ({ loading, type, className, text, func, disabled }) => {
  return (
    <button onClick={func} type={type} disabled={disabled} className={className}>
      {loading && (
        <span
          style={{ margin: "0px 5px" }}
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
      )}
      <span>{text}</span>
    </button>
  );
};
