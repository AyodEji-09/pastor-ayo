import about from "@/assets/images/about.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="col-lg-6"></div>
        <div className="col-lg-6">
          <Image src={about} alt="pastor ayo picture" className="img-thumbnail" />
        </div>
      </div>
    </section>
  );
};

export default About;
