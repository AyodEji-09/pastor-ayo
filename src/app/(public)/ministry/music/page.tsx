import UtilityBanner from "@/app/components/layout/UtilityBanner";
import MusicComponent from "@/app/components/MusicComponent";
import { title } from "@/lib/metaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: title("Music Ministry"),
};
export const revalidate = 0;
export const dynamic = "force-dynamic";

const Ministry = () => {
  return (
    <div className="space-y-20 mb-20 bg-[#F8F8F8]">
      <UtilityBanner page="Music Ministry" />
      <MusicComponent />
    </div>
  );
};

export default Ministry;
