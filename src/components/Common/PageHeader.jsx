import Link from "next/link";

const PageHeader = ({ page, birthday = false }) => {
  return (
    <>
      {birthday == true ? (
        <div id="page__header-birthday" className="text-center">
          <h1 className="fw-light text-light">{page}</h1>
          <p className="fw-light">
            <Link className="text-light fw-light" href="/">
              Home
            </Link>
          </p>
        </div>
      ) : (
        <div id="page__header" className="text-center">
          <h1 className="fw-light text-light">{page}</h1>
          <p className="fw-light">
            <Link className="text-light fw-light" href="/">
              Home
            </Link>{" "}
            / <span>{page}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default PageHeader;
