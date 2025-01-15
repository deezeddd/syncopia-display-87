import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Terminal, FileText, Brain } from "lucide-react";

export const TerminalHero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCommand, setCurrentCommand] = useState("");
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary/80">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg border border-white/10 p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <pre className="font-mono text-green-400 text-lg">
              {displayedText}
              <span className="animate-pulse">|</span>
            </pre>
          </div>
          
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Next-Gen AI for Medical Documentation
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Transforming healthcare documentation with intelligent AI assistance
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                <Terminal className="mr-2" />
                Try Demo
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
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