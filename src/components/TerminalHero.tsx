import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Terminal, FileText, Brain } from "lucide-react";

export const TerminalHero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "/medical/docs > ls\n\nanalyze\noptimize\ntranscribe\n\n/medical/docs > _";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-soft">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#9b87f52e_1px,transparent_1px),linear-gradient(to_bottom,#9b87f52e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-primary/20 shadow-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <div className="w-3 h-3 rounded-full bg-accent" />
            </div>
            <pre className="font-mono text-primary text-lg">
              {displayedText}
              <span className="animate-pulse">|</span>
            </pre>
          </div>
          
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
              Redefining Clinical Documentation
              <br />
              <span className="text-secondary">with AI co-pilot</span>
            </h1>
            <p className="text-xl text-secondary/80 max-w-2xl mx-auto">
              Transform your medical documentation workflow with intelligent AI assistance
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Terminal className="mr-2" />
                Try Demo
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
                <FileText className="mr-2" />
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};