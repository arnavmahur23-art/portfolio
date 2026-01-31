
"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const PROJECTS = [
  {
    id: "p1",
    title: "Luminal UI",
    category: "Experimental Web",
    imgId: "project-1",
    color: "from-blue-500/20",
  },
  {
    id: "p2",
    title: "Cyberpunk Motion",
    category: "Video Production",
    imgId: "project-2",
    color: "from-purple-500/20",
  },
  {
    id: "p3",
    title: "Neuro Synth",
    category: "AI Concept",
    imgId: "project-3",
    color: "from-cyan-500/20",
  }
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-xs mb-4">Selected Works</p>
            <h2 className="text-4xl md:text-6xl font-headline font-bold">Featured Projects.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A curation of my favorite experiments, commercial works, and technical deep dives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => {
            const imageData = PlaceHolderImages.find(img => img.id === project.imgId);
            const isHovered = hoveredId === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative group cursor-none"
              >
                <div className={`relative aspect-[4/5] overflow-hidden rounded-2xl glass transition-all duration-500 ${isHovered ? 'scale-[1.02] shadow-2xl shadow-primary/20' : 'scale-100'}`}>
                  <Image
                    src={imageData?.imageUrl || "https://picsum.photos/seed/proj/800/600"}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-1000 ${isHovered ? 'scale-110 blur-[2px]' : 'scale-100 blur-0'}`}
                    data-ai-hint={imageData?.imageHint}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-60`} />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 transition-transform duration-500">
                    <div className={`flex items-center gap-2 mb-2 transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                      <span className="glass px-3 py-1 rounded-full text-xs font-medium uppercase">{project.category}</span>
                    </div>
                    <h3 className="text-3xl font-headline font-bold text-white mb-2">{project.title}</h3>
                    
                    <div className={`flex items-center justify-between transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                      <button className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                        <Play className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">Watch Preview</span>
                      </button>
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <button className="text-muted-foreground hover:text-white transition-colors flex items-center gap-2 mx-auto font-medium group">
            View All Archives 
            <span className="w-8 h-[1px] bg-muted-foreground group-hover:w-12 group-hover:bg-primary transition-all" />
          </button>
        </div>
      </div>
    </section>
  );
}
