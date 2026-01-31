
"use client";

import { useEffect, useState, useRef } from "react";
import { Code2, Video, Palette, Zap, Cpu, Globe } from "lucide-react";

const SKILLS = [
  { icon: Code2, name: "Next.js / TS", level: 95, color: "text-blue-400" },
  { icon: Video, name: "Davinci Resolve", level: 90, color: "text-purple-400" },
  { icon: Palette, name: "Blender 3D", level: 85, color: "text-orange-400" },
  { icon: Cpu, name: "Creative Tech", level: 92, color: "text-green-400" },
  { icon: Zap, name: "Motion Design", level: 88, color: "text-yellow-400" },
  { icon: Globe, name: "WebGL / Three", level: 80, color: "text-cyan-400" },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8">
              The <span className="text-primary">Arsenal.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Combining engineering precision with creative chaos. My toolkit is built for the modern digital landscape.
            </p>
            
            <div className="space-y-8">
              {SKILLS.map((skill, index) => (
                <div 
                  key={index} 
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className={`w-5 h-5 ${skill.color}`} />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-code">{skill.level}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
                    <div 
                      className="h-full bg-primary transition-all duration-1500 ease-out"
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center relative">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className={`w-32 h-32 glass rounded-3xl flex items-center justify-center animate-float`}
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
