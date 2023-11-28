import "./page.css";
import EventSection from "@/components/HomeComponents/EventSection";
import AboutSection from "@/components/HomeComponents/AboutSection";
import HeroSection from "@/components/HomeComponents/HeroSection";
import MusicSection from "@/components/HomeComponents/MusicSection";
import VideoSection from "@/components/HomeComponents/VideoSection";
import ContactSection from "@/components/HomeComponents/ContactSection";
import BlogSection from "@/components/HomeComponents/BlogSection";
import Api from "@/Api/api";

const getAllPublishedMedia = async () => {
  try {
    const res = await Api.get(`/api/publishedMedia?video=3&music=4`);
    return res.data;
  } catch (error) {
    return [];
  }
};
export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function Home() {
  const res = await getAllPublishedMedia();
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <VideoSection videos={res?.videos ? res.videos : []} />
      <MusicSection
        musics={res?.musics ? res.musics : []}
        latestTrack={res?.latestTrack ? res.latestTrack : {}}
      />
      <EventSection />
      <ContactSection />
      <BlogSection />
    </main>
  );
}
