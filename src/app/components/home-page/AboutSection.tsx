import { HeaderStyleComponent } from "./HeroSection";
import about from "../../../assets/images/about.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto rounded-2xl overflow-hidden shadow-xl bg-white">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="overflow-hidden md:h-[500px] h-[400px]">
            <Image src={about} alt="about" className="w-full h-full object-cover object-top" />
          </div>
          <div className="md:col-span- p-6 self-center">
            <div className="max-w-sm space-y-2 mx-auto text-center">
              <HeaderStyleComponent variant="dark" title="About" />
              <div className="space-y-2">
                <p className="text-sm">
                  At Cook & Serve, we bring you premium-quality kitchen and
                  dining essentials designed for effortless cooking and elegant
                  serving. From durable cookware to stylish tableware, our
                  products blend functionality with aesthetics to enhance every
                  meal. Whether you’re a home cook or a professional chef, our
                  thoughtfully crafted utensils make food preparation a breeze.
                  We believe great meals start with great tools, and we’re here
                  to help you cook, serve, and enjoy every moment in your
                  kitchen.
                </p>
                <p className="text-sm">
                  Elevate your kitchen with Cook & Serve!
                </p>
              </div>
              <Button variant="outline" className="mt-4 border-primary text-primary font-semibold">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
