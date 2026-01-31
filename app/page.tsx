
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import GrainOverlay from "@/components/GrainOverlay";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Cursor />
      <GrainOverlay />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <section id="skills">
          <Skills />
        </section>
        <Contact />
      </div>

      <footer className="py-12 border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground text-sm font-code">
            © {new Date().getFullYear()} ARNAV.IO - BUILT WITH NEXT.JS & PURE VISION.
          </p>
        </div>
      </footer>
    </main>
  );
}
