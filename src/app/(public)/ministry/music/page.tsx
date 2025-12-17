import UtilityBanner from "@/app/components/layout/UtilityBanner";
import MusicComponent from "@/app/components/MusicComponent";
import AdPlaceholder from "@/app/components/AdPlaceholder";
import BundlesCarousel from "@/app/components/BundlesCarousel";
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

      {/* Top banner ad for Music Ministry page */}
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="banner" className="mx-auto my-6">
          <BundlesCarousel />
        </AdPlaceholder>
      </div>

      <MusicComponent />

      {/* Inline box ad after the music ministry content */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center my-6">
          <AdPlaceholder variant="box">
            <BundlesCarousel />
          </AdPlaceholder>
        </div>
      </div>
    </div>
  );
};

export default Ministry;
