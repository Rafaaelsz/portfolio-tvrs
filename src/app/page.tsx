import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ChapterRail } from "@/components/narrative/ChapterRail";
import { SmoothScroll } from "@/components/narrative/SmoothScroll";
import { Providers } from "@/components/layout/Providers";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { LumeScene } from "@/components/sections/LumeScene";
import { Projects } from "@/components/sections/Projects";
import "lenis/dist/lenis.css";
import "./eclipse.css";
import "./narrative.css";

export default function Home() {
  return (
    <Providers>
      <div className="ec">
        <SmoothScroll />
        <Header />
        <ChapterRail />
        <main id="conteudo">
          <Hero />
          <LumeScene />
          <Projects />
          <About />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
