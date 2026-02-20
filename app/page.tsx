import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { CursorEffect } from "@/components/cursor-effect";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <CursorEffect />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
