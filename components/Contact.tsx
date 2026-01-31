
"use client";

import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto glass p-12 md:p-24 rounded-[3rem] border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Send className="w-32 h-32 rotate-12" />
          </div>
          
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-8">Ready to evolve?</p>
          <h2 className="text-5xl md:text-7xl font-headline font-bold mb-12 tracking-tight">
            Let's build the <br /> <span className="text-glow text-white">Impossible.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="w-full md:w-auto px-12 py-5 bg-white text-black font-bold rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 magnetic text-lg">
              Start a Conversation
            </button>
            <button className="w-full md:w-auto px-12 py-5 glass text-white font-medium rounded-2xl hover:bg-white/10 transition-all duration-300 magnetic text-lg">
              Download CV
            </button>
          </div>
          
          <div className="mt-16 flex justify-center gap-8 text-muted-foreground font-medium">
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Github</a>
          </div>
        </div>
      </div>
    </section>
  );
}
