import Image from "next/image";
import bg from "../../../assets/images/music-bg.jpg";
import { HeaderStyleComponent } from "./HeroSection";
import spotify from "@/assets/images/icons/spotify.png";
import youtube from "@/assets/images/icons/youtube.png";
import { Empty } from "antd";

const MusicSection = () => {
  return (
    <section className="py-12 flex justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={bg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-2 relative z-10">
        <HeaderStyleComponent variant="white" title="Music" />
        <p className="text-center text-white">
          Get all my albums and singles on Spotify and YouTube
        </p>
        <div>
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            styles={{
              //   image: { height: 60, },
              description: { color: "white" },
            }}
            className="flex justify-center flex-col items-center"
            description={"No Musics published"}
          />
        </div>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Image src={youtube} alt="" className="" />
          <Image src={spotify} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
