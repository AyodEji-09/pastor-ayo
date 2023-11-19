"use client";
import Image from "next/image";
import heroImage from "@/assets/images/hero4.jpg";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-4 my-2 hero__container">
            <div className="hero__desc-one shadow">
              <h1 className="fs-1 fw-bolder text-dark">Marriage Ministry</h1>
              <p className="lead my-1 text-dark">
                “And the man and his wife were both naked and were not
                embarrassed or ashamed in each other`s presence.” - Genesis 2:25
                AMPC
              </p>
              <Link className="btn btn-danger" href="/marriage-ministry">
                Learn More <HiOutlineArrowNarrowRight />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 my-2">
            <div className="hero__image text-center">
              <Image
                src={heroImage}
                width={500}
                alt="Pastor Ayo"
                className="rounded-pill img-thumbnail shadow"
              />
              <div className="hero__image-desc">
                <h2 className="my-0 py-0">Ayodeji Anifowose</h2>
                <p className="small fst-italic my-0 py-0">
                  Lead Pastor, RCCG, Arise Church.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 my-2 position-relative d-flex align-items-end">
            <div className="hero__desc-two shadow">
              <h1 className="fs-1 fw-bolder text-dark">Music Ministry</h1>
              <p className="lead my-1 text-dark">
                “I think the amazing thing about Gospel music is that not only
                does it lift up the death and resurrection of our Lord, which is
                consistent with the Gospel, but it is uniquely communicated
                depending upon generation” - T.D. Jakes
              </p>
              <Link className="btn btn-danger" href="/music-ministry">
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
