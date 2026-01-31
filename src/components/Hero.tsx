
"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/10 blur-[120px] rounded-full animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-white/5 blur-[100px] rounded-full animate-float [animation-delay:2s]" />

      <div className="container mx-auto px-6 text-center z-10">
        <div className="overflow-hidden mb-4">
          <p className="reveal delay-100 text-primary font-medium tracking-widest uppercase text-sm">
            Creative Technologist
          </p>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-headline font-bold tracking-tighter mb-8 reveal delay-200">
          Hi, I’m <span className="text-glow text-white">Arnav.</span>
        </h1>
        
        <div className="max-w-2xl mx-auto overflow-hidden">
          <p className="text-lg md:text-xl text-muted-foreground reveal delay-300 leading-relaxed">
            Crafting immersive digital experiences through 
            <span className="text-white"> cutting-edge code </span> and 
            <span className="text-white"> visual storytelling.</span>
          </p>
        </div>

        <div className="mt-12 reveal delay-500">
          <button className="group relative glass px-8 py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-95 magnetic">
            <span className="relative z-10 flex items-center gap-2">
              Explore My Universe
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity rounded-full" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground opacity-50">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
}
