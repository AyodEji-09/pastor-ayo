import Link from "next/link";
import { useState } from "react";

const Error = ({ error }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ||
        (error && (
          <div
            className="alert alert-danger alert-dismissible fade show p-1 d-flex align-items-center"
            role="alert"
          >
            <p className="my-0 py-0">
              {error} <Link href="/contact">Contact</Link>
            </p>

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="btn btn-danger text-danger btn-close"
              style={{margin: '3px' , padding: '5px'}}
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        ))}
    </>
  );
};

export default Error;
