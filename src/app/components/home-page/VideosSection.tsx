import Image from "next/image";
import bg from "../../../assets/images/video-bg.png";
// import youtube from "../../../assets/images/youtube.png";
import { HeaderStyleComponent } from "./HeroSection";
import { Empty } from "antd";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";

const VideosSection = () => {
  return (
    <section className="py-12 flex justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={bg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-2 relative z-10">
        <HeaderStyleComponent variant="dark" title="Videos" />
        <p className="text-center text-white mt-4">
          From Marriage Ministry - &quot;Great Father Great Husband&quot;
        </p>
        <div>
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            styles={{
              //   image: { height: 60, },
              description: { color: "white" },
            }}
            className="flex justify-center flex-col items-center"
            description={"No Videos published"}
          />
        </div>
        <div className="flex justify-center mt-4">
          <Button>
            VIEW MORE <EyeIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
