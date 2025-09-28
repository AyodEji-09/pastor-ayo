import { Carousel } from "antd";
import Image from "next/image";
import heroOne from "../../../assets/images/marriage2.jpg";
import heroTwo from "../../../assets/images/music.jpg";

const contentStyle: React.CSSProperties = {
  color: "#fff",
  textAlign: "center",
  position: "absolute",
  bottom: 24,
  right: 24,
};
const HeroSection = () => {
  return (
    <section className="relative">
      <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
        <div className="h-[550px] relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden bg-accent-foreground/60 z-10"></div>
            <Image
              src={heroOne}
              alt="Hero"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div
            style={contentStyle}
            className="max-w-sm mx-auto space-y-2 z-20 p-4"
          >
            <HeaderStyleComponent variant="white" title="Marriage Ministry" />
            <div className="space-y-2">
              <p className="text-lg">
                “And the man and his wife were both naked and were not
                embarrassed or ashamed in each other`s presence.” - Genesis 2:25
              </p>
            </div>
          </div>
        </div>
        <div className="h-[550px] relative">
          <div className="absolute inset-0 overflow-hidden bg-accent-foreground/60 z-10"></div>
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={heroTwo}
              alt="Hero"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div
            style={contentStyle}
            className="max-w-sm mx-auto space-y-2 z-20 p-4"
          >
            <HeaderStyleComponent variant="white" title="Music Ministry" />
            <div className="space-y-2">
              <p className="text-lg">
                “I think the amazing thing about Gospel music is that not only
                does it lift up the death and resurrection of our Lord, which is
                consistent with the Gospel, but it is uniquely communicated
                depending upon generation” - T.D. Jakes
              </p>
              {/*<p className="text-sm">Elevate your kitchen with Cook & Serve!</p>*/}
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;

export const HeaderStyleComponent = ({
  variant,
  title,
}: {
  variant: "dark" | "white";
  title: string;
}) => (
  <div className="flex items-center gap-4 justify-center">
    <div
      className={`${
        variant === "white" ? `border-white` : "border-primary"
      }  border w-12`}
    ></div>
    <div className="bg-secondary text-text text-2xl font-semibold p-2 px-4 rounded">
      {title}
    </div>
    <div
      className={`${
        variant === "white" ? `border-white` : "border-primary"
      }  border w-12`}
    ></div>
  </div>
);
