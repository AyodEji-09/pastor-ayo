"use client";
import img1 from "@/assets/images/birthday/1.png";
import img2 from "@/assets/images/birthday/13.png";
import img3 from "@/assets/images/birthday/3.png";
import img4 from "@/assets/images/birthday/4.png";
import img5 from "@/assets/images/birthday/5.png";
import img6 from "@/assets/images/birthday/6.png";
import img7 from "@/assets/images/birthday/7.png";
import img8 from "@/assets/images/birthday/8.png";
import img9 from "@/assets/images/birthday/9.png";
import img10 from "@/assets/images/birthday/10.png";
import img11 from "@/assets/images/birthday/11.png";
import img12 from "@/assets/images/birthday/12.png";
import img13 from "@/assets/images/birthday/13.png";

import { Gallery } from "react-grid-gallery";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
].map((item, index) => {
  return {
    src: item.src,
    width: 320,
    // height: 174,
    isSelected: index === 0 && true,
    caption: "Ayodeji Anifowose",
  };
});

const Momemt = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <Gallery images={images} />
        </div>
      </div>
    </div>
  );
};

export default Momemt;
