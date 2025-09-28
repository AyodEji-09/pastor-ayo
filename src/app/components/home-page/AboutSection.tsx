"use client";
import { HeaderStyleComponent } from "./HeroSection";
import about from "../../../assets/images/about.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const AboutSection = () => {
  const route = useRouter();
  return (
    <section className="px-4">
      <div className="container mx-auto rounded-2xl overflow-hidden shadow-xl bg-white">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="overflow-hidden md:h-[500px] h-[400px]">
            <Image
              src={about}
              alt="about"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="md:col-span- p-6 self-center">
            <div className="max-w-sm space-y-2 mx-auto text-center">
              <HeaderStyleComponent variant="dark" title="About" />
              <div className="space-y-2">
                <p className="text-md">
                  Ayodeji Anifowose is an author, content creator, training
                  facilitator, certified Life/ Marriage coach and Pastor. He
                  holds a bachelor`s degree in Economics and is also a young
                  minister of God, determined to continually groom world
                  changers and teach people the undiluted word of God. As a
                  content creator and marriage counselor, he runs a YouTube
                  channel called Great Father, Great Husband...
                </p>
              </div>
              <Button
                variant="outline"
                className="mt-4 border-primary text-primary font-semibold"
                onClick={() => route.push("/about")}
              >
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
