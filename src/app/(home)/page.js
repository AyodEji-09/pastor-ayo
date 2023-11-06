import Image from "next/image";
import './page.css'
import About from "@/components/HomeComponents/About";
import Hero from "@/components/HomeComponents/Hero";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About></About>
    </main>
  );
}
