import AboutSection from "@/app/components/home-page/AboutSection";
import BlogSection from "@/app/components/home-page/BlogSection";
import BookingsSection from "@/app/components/home-page/BookingsSection";
import HeroSection from "@/app/components/home-page/HeroSection";
import MusicSection from "@/app/components/home-page/MusicSection";
import VideosSection from "@/app/components/home-page/VideosSection";

const Home = () => {
  return <div className="space-y-20 bg-secondary">
    <HeroSection />
    <AboutSection />
    <VideosSection />
    <MusicSection />
    <BookingsSection />
    <BlogSection />
  </div>;
};

export default Home;
