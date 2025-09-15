import Image from "next/image";
import bg from "../../../assets/images/video-bg.png";
import youtube from "../../../assets/images/youtube.png";
import { HeaderStyleComponent } from "./HeroSection";

const VideosSection = () => {
  return (
    <section className="py-12 flex justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={bg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-2 relative z-10">
        <HeaderStyleComponent variant="dark" title="Videos" />
        <p className="text-center text-white">
          From Marriage Ministry - “Great Father Great Husband
        </p>
        <Image src={youtube} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default VideosSection;
