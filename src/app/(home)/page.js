import "./page.css";
import EventSection from "@/components/HomeComponents/EventSection";
import AboutSection from "@/components/HomeComponents/AboutSection";
import HeroSection from "@/components/HomeComponents/HeroSection";
import MusicSection from "@/components/HomeComponents/MusicSection";
import VideoSection from "@/components/HomeComponents/VideoSection";
import ContactSection from "@/components/HomeComponents/ContactSection";
import BlogSection from "@/components/HomeComponents/BlogSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <MusicSection />
      <EventSection />
      <ContactSection />
      <BlogSection />
    </main>
  );
}
