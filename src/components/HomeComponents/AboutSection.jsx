"use client";
import about from "@/assets/images/about.jpg";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section id="about__section" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-2 d-flex justify-content-lg-center">
            <div className="rounded">
              <Image
                src={about}
                alt="pastor ayo picture"
                className="img-thumbnail rounded shadow"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center mb-2">
            <div className="bg-transparent">
              <SectionHeader header="About" />
              <div className="about__section-desc mt-2">
                <p className="lead">
                  Ayodeji Anifowose is an author, content creator, training
                  facilitator, certified Life/ Marriage coach and Pastor. He
                  holds a bachelor`s degree in Economics and is also a young
                  minister of God, determined to continually groom world
                  changers and teach people the undiluted word of God. As a
                  content creator and marriage counselor, he runs a YouTube
                  channel called Great Father, Great Husband...
                </p>
                <Link href="/about" className="btn btn-outline-danger">
                  Read More <HiOutlineArrowNarrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
