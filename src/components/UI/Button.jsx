import { Children } from "react";

export const Button = ({
  loading,
  type,
  className,
  text,
  func,
  disabled,
  children,
  style,
}) => {
  return (
    <button
      onClick={func}
      type={type}
      disabled={disabled}
      style={style}
      className={className}
    >
      {loading && (
        <span
          style={{ margin: "0px 5px" }}
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
      )}
      {text && <span style={{ marginRight: "4px" }}>{text}</span>}
      {children && !loading && children}
    </button>
  );
};
