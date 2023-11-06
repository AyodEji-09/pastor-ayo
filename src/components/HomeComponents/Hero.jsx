"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import gfgh_logo from "@/assets/images/logo/gfgh-logo.png";
import music_logo from "@/assets/images/logo/music-logo.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./hero.css";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center vh-100">
          <div className="col-lg-6">
            <div className="hero__desc">
              <Carousel
                showArrows={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={2000}
              >
                <div className="pt-2 pb-3">
                  <Image
                    src={music_logo}
                    alt="hero image one"
                    className="hero__desc-img"
                    width={150}
                    height={150}
                  />
                  <p className="fs-3 text-black fw-bold">
                    Welcome to the Music Ministry of Pastor Ayo
                  </p>
                  <Link className="btn btn-secondary" href="/music-ministry">
                    Read More
                  </Link>
                </div>
                <div className="pt-2 pb-3">
                  <Image
                    src={gfgh_logo}
                    alt="hero image one"
                    className="hero__desc-img"
                    width={150}
                    height={150}
                  />
                  <p className="fs-3 text-black fw-bold">
                    Welcome to the Mariage Ministry of Pastor Ayo
                  </p>
                  <Link className="btn btn-danger" href="/marriage-ministry">
                    Read More
                  </Link>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        
      </div> */}
    </section>
  );
};

export default Hero;
