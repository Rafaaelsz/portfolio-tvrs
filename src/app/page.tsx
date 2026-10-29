import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Providers } from "@/components/layout/Providers";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Projects } from "@/components/sections/Projects";
import "./eclipse.css";

export default function Home() {
  return (
    <Providers>
      <div className="ec">
        <Header />
        <main id="conteudo">
          <Hero />
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
