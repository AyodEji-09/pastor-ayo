import UtilityBanner from "@/app/components/layout/UtilityBanner";
import MarriageComponent from "@/app/components/MarriageComponent";
// import AdPlaceholder from "@/app/components/AdPlaceholder";
// import BundlesCarousel from "@/app/components/BundlesCarousel";

const Ministry = () => {
  return (
    <div className="space-y-20 mb-20">
      <UtilityBanner page="Marriage Ministry" />

      {/* Top banner ad for the Marriage Ministry page */}
      {/*<div className="container mx-auto px-4">
        <AdPlaceholder variant="banner" className="mx-auto my-6">
          <BundlesCarousel />
        </AdPlaceholder>
      </div>*/}

      <MarriageComponent />

      {/* Inline box ad after the ministry component */}
      {/*<div className="container mx-auto px-4">
        <div className="flex justify-center my-6">
          <AdPlaceholder variant="box">
            <BundlesCarousel />
          </AdPlaceholder>
        </div>
      </div>*/}
    </div>
  );
};

export default Ministry;
