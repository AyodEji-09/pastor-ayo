import AboutSection from "@/app/components/home-page/AboutSection";
import BlogSection from "@/app/components/home-page/BlogSection";
import BookingsSection from "@/app/components/home-page/BookingsSection";
import HeroSection from "@/app/components/home-page/HeroSection";
import MusicSection from "@/app/components/home-page/MusicSection";
import VideosSection from "@/app/components/home-page/VideosSection";
import AdPlaceholder from "@/app/components/AdPlaceholder";
import BundlesCarousel from "@/app/components/BundlesCarousel";

const Home = () => {
  return (
    <div className="space-y-20 bg-secondary">
      <HeroSection />

      {/* Banner ad just under the hero */}
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="banner" className="mx-auto my-6">
          <BundlesCarousel />
        </AdPlaceholder>
      </div>

      <AboutSection />

      {/* Medium rectangle ad between About and Videos */}
      <div className="flex justify-center">
        <AdPlaceholder variant="box" className="my-6">
          <BundlesCarousel />
        </AdPlaceholder>
      </div>

      <VideosSection />
      <MusicSection />

      {/* Responsive banner above bookings */}
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="responsive" aspectRatio={6.4} className="my-6">
          <BundlesCarousel />
        </AdPlaceholder>
      </div>

      <BookingsSection />
      <BlogSection />

      {/* Floating square ad (desktop only) */}
      <div className="hidden md:block">
        <div style={{ position: "fixed", right: 16, bottom: 24, zIndex: 9999 }}>
          <AdPlaceholder variant="square">
            <BundlesCarousel />
          </AdPlaceholder>
        </div>
      </div>
    </div>
  );
};

export default Home;
