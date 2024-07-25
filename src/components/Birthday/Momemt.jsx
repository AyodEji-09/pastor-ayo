"use client";
import Image from "next/image";
import { Gallery } from "react-grid-gallery";
import { useEffect, useState } from "react";

const Momemt = () => {
  const [randomImages, setRandomImages] = useState([]);
  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };

  let images = importAll(
    require.context("../../assets/images/birthday/gallery/", false, /\.jpg$/)
  );

  images = Object.keys(images).map((key) => {
    return {
      src: images[key].default.src,
      width: 320,
      // height: 174,
      isSelected: false,
      caption: "Ayodeji Anifowose",
    };
  });

  function getRandomItems(arr, numItems) {
    let result = [];
    let len = arr.length;
    if (numItems >= len) {
      result = arr.slice();
      result.sort(() => Math.random() - 0.5);
    } else {
      let copy = arr.slice();
      for (let i = 0; i < numItems; i++) {
        let randomIndex = Math.floor(Math.random() * copy.length);
        result.push(copy[randomIndex]);
        copy.splice(randomIndex, 1);
      }
    }
    return result;
  }
  useEffect(() => {
    setRandomImages(getRandomItems(images, 30));
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <Gallery images={randomImages} />
        </div>
      </div>
    </div>
  );
};

export default Momemt;
