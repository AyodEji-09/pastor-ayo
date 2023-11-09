"use client";
import Image from "next/image";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import gfgh_logo from "@/assets/images/logo/gfgh-logo.png";
import music_logo from "@/assets/images/logo/music-logo.jpg";
import heroImage from "@/assets/images/hero4.jpg";
import "./hero.css";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 my-1 hero__container">
            <div className="hero__desc-one shadow">
              <h1 className="fs-1 fw-bolder text-dark">Marriage Ministry</h1>
              <p className="lead my-1 text-dark">
                “And the man and his wife were both naked and were not
                embarrassed or ashamed in each other`s presence.” - Genesis 2:25
                AMPC
              </p>
              <Link
                className="btn btn-secondary"
                href="/marriage-ministry"
              >
                Learn More <HiOutlineArrowNarrowRight />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 my-1">
            <div className="hero__image text-center">
              <Image
                src={heroImage}
                width={500}
                alt="Pastor Ayo"
                className="rounded-pill img-thumbnail shadow-lg"
              />
            </div>
          </div>
          <div className="col-lg-3 my-1 position-relative d-flex align-items-end">
            <div className="hero__desc-two shadow">
              <h1 className="fs-1 fw-bolder text-dark">Music Ministry</h1>
              <p className="lead my-1 text-dark">
                “I think the amazing thing about Gospel music is that not only
                does it lift up the death and resurrection of our Lord, which is
                consistent with the Gospel, but it is uniquely communicated
                depending upon generation” - T.D. Jakes
              </p>
              <Link
                className="btn btn-secondary"
                href="/music-ministry"
              >
                Learn More <HiOutlineArrowNarrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
