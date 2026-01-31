
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-me');
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className={`flex-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8">
              Breaking Boundaries Between <br />
              <span className="text-primary">Art & Logic.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                As a digital polymath, I thrive at the intersection of complex problem solving and expressive visual design. My journey began with a curiosity for how pixels could move, which evolved into a passion for building robust applications that feel like breathing entities.
              </p>
              <p>
                Whether it's an immersive 3D web experience or a high-fidelity cinematic edit, I believe every digital interaction should tell a story.
              </p>
              <div className="flex gap-12 pt-8">
                <div>
                  <p className="text-white text-3xl font-headline font-bold">5+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="text-white text-3xl font-headline font-bold">40+</p>
                  <p className="text-sm">Global Projects</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`flex-1 relative aspect-square w-full max-w-lg transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-20 rotate-6'}`}>
            <div className="absolute inset-0 bg-primary/20 rounded-2xl -rotate-6 blur-2xl" />
            <div className="relative glass p-4 rounded-2xl h-full w-full overflow-hidden group">
              <Image
                src={aboutImage?.imageUrl || "https://picsum.photos/seed/about/1200/800"}
                alt="About Arnav"
                fill
                className="object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={aboutImage?.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
                <p className="text-white font-medium italic">"The future belongs to those who learn more skills and combine them in creative ways."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
