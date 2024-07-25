"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const LocationCheck = ({ book }) => {
  const [isInNigeria, setIsInNigeria] = useState(false);

  const getGeolocation = async () => {
    try {
      const response = await axios.get("https://api.ipgeolocation.io/ipgeo", {
        params: {
          apiKey: process.env.NEXT_PUBLIC_GEO_API,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching geolocation:", error);
      return null;
    }
  };

  useEffect(() => {
    const checkLocation = async () => {
      const geolocation = await getGeolocation();
      if (geolocation && geolocation.country_name === "Nigeria") {
        setIsInNigeria(true);
      } else {
        setIsInNigeria(false);
      }
    };
    checkLocation();
  }, []);

  return (
    <div className="card-body">
      <small>{book.dop}</small>
      <a
        href={isInNigeria && book.url_2?.length ? book.url_2 : book.url}
        target="_blank"
      >
        <h5 className="card-title text-primary fw-bold">{book.title}</h5>
      </a>
      <p className="card-text">{book.description.substring(0, 100)}...</p>
      <div className="d-flex flex-wrap">
        <span style={{ paddingRight: "5px" }}>Formats: {""}</span>
        {isInNigeria && book.url_2?.length ? (
          <>
            <a target="_blank" href={book.url_2}>
              Order Now
            </a>
          </>
        ) : (
          <>
            {book?.format?.map((format, index) => (
              <a
                key={index}
                target="_blank"
                style={{ paddingRight: "5px" }}
                href={format.url}
              >
                {format.type},
              </a>
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
