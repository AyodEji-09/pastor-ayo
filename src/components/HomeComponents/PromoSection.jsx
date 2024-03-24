"use client";
import Image from "next/image";
import promo1 from "@/assets/images/promo1.jpg";
import promo2 from "@/assets/images/promo2.jpg";
import Link from "next/link";
import AOSComponent from "../Common/AOS";

const PromoSection = () => {
  return (
    <AOSComponent>
      <section id="promo__section" className="section">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 d-flex justify-content-center mb-1">
              <a
                target="_blank"
                href="https://www.amazon.com/GODS-AGENDA-MAN-EMBRACING-MANHOOD/dp/B0CLVGJYKL/ref=monarch_sidesheet"
              >
                <Image
                  width={300}
                  src={promo1}
                  alt="promotion"
                  className="img-thumbnail rounded shadow"
                />
              </a>
            </div>
            <div className="col-lg-4 d-flex justify-content-center mb-1">
              <a
                target="_blank"
                href="https://www.amazon.com/EAGLE-WINNING-STRATEGY-Ayodeji-Anifowose/dp/B0CMJCP2NW/ref=monarch_sidesheet"
              >
                <Image
                  width={300}
                  src={promo2}
                  alt="promotion"
                  className="img-thumbnail rounded shadow"
                />
              </a>
            </div>
          </div>
          <div className="text-center mt-1">
            <Link href={"/shop"} className="btn btn-outline-danger">
              Click Here For More Books
            </Link>
          </div>
        </div>
      </section>
    </AOSComponent>
  );
};

export default PromoSection;
