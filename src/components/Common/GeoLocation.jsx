"use client";
import { useRouter } from "next/navigation";

const LocationCheck = ({ book, slug }) => {
  const router = useRouter();

  return (
    <div className="card-body">
      <small>{book.dop}</small>
      {/* <a
        href={isInNigeria && book.url_2?.length ? book.url_2 : book.url}
        target="_blank"
      > */}
      <h5
        onClick={() => router.push(`/checkout/${slug}`)}
        className="card-title text-primary fw-bold tw-cursor-pointer"
        // style={{cursor: 'pointer'}}
      >
        {book.title}
      </h5>
      {/* </a> */}
      <p className="card-text">{book.description.substring(0, 100)}...</p>
      <div className="d-flex flex-wrap">
        <span style={{ paddingRight: "5px" }}>Formats: {""}</span>
        {book.url_2?.length ? (
          <>
            <div
              className="cursor-pointer"
              onClick={() => router.push(`/checkout/${slug}`)}
            >
              Order Now
            </div>
          </>
        ) : (
          <>
            {book?.format?.map((format, index) => (
              <span
                className="cursor-pointer"
                key={index}
                onClick={() => router.push(`/checkout/${slug}`)}
              >
                {format.type},
              </span>
            ))}
          </>
        )}
      </div>
      <hr />
      <div className="d-flex gap-1 flex-wrap">
        <span>Pages: </span>
        <em className="fst-italic">{book.pages}</em>
      </div>
    </div>
  );
};

export default LocationCheck;
