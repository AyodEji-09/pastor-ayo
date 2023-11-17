import "./page.css";
import About from "@/components/HomeComponents/AboutComponent";
import Hero from "@/components/HomeComponents/HeroComponent";
import MusicComponent from "@/components/HomeComponents/MusicComponent";
import VideoComponent from "@/components/HomeComponents/VideoComponent";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <VideoComponent />
      <MusicComponent />
    </main>
  );
}
