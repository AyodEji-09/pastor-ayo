import { Carousel } from "antd";
import Image from "next/image";
import hero from "../../../assets/images/hero-marriage.png";

const contentStyle: React.CSSProperties = {
  color: "#fff",
  textAlign: "center",
  position: "absolute",
  bottom: 24,
  right: 24,
};
const HeroSection = () => {
  return (
    <section>
      <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
        <div className="h-[500px] relative">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={hero}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
          <div style={contentStyle} className="max-w-sm mx-auto space-y-2">
            <HeaderStyleComponent variant="white" title="Marriage Ministry" />
            <div className="space-y-2">
              <p className="text-sm">
                At Cook & Serve, we bring you premium-quality kitchen and dining
                essentials designed for effortless cooking and elegant serving.
                From durable cookware to stylish tableware, our products blend
                functionality with aesthetics to enhance every meal. Whether
                you’re a home cook or a professional chef, our thoughtfully
                crafted utensils make food preparation a breeze. We believe
                great meals start with great tools, and we’re here to help you
                cook, serve, and enjoy every moment in your kitchen.
              </p>
              <p className="text-sm">Elevate your kitchen with Cook & Serve!</p>
            </div>
          </div>
        </div>
        <div className="h-[500px] relative">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={hero}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
          <div style={contentStyle} className="max-w-sm mx-auto space-y-2">
            <HeaderStyleComponent variant="white" title="Music Ministry" />
            <div className="space-y-2">
              <p className="text-sm">
                At Cook & Serve, we bring you premium-quality kitchen and dining
                essentials designed for effortless cooking and elegant serving.
                From durable cookware to stylish tableware, our products blend
                functionality with aesthetics to enhance every meal. Whether
                you’re a home cook or a professional chef, our thoughtfully
                crafted utensils make food preparation a breeze. We believe
                great meals start with great tools, and we’re here to help you
                cook, serve, and enjoy every moment in your kitchen.
              </p>
              <p className="text-sm">Elevate your kitchen with Cook & Serve!</p>
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
    <div className="bg-secondary text-text text-sm font-semibold p-2">
      {title}
    </div>
    <div
      className={`${
        variant === "white" ? `border-white` : "border-primary"
      }  border w-12`}
    ></div>
  </div>
);
