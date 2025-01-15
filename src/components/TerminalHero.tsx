import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Terminal, FileText, Brain, Sparkles } from "lucide-react";

export const TerminalHero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = `/medical/docs > ls
analyzing directory contents...

PATIENT_RECORDS/
  ├── clinical_notes.md
  ├── lab_results.json
  ├── medical_history/
  └── prescriptions.yaml

/medical/docs > analyze clinical_notes.md
initializing sync agent...

🤖 AI Analysis in Progress:
  ► Processing natural language content
  ► Extracting key medical insights
  ► Generating structured data
  ► Validating against medical standards

✓ Analysis complete. Found 3 optimization opportunities.
Ready for autonomous documentation assistance_`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-soft">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#9b87f52e_1px,transparent_1px),linear-gradient(to_bottom,#9b87f52e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-40 right-40 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-bounce" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-primary/20 shadow-lg p-6 mb-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <div className="w-3 h-3 rounded-full bg-accent" />
            </div>
            <pre className="font-mono text-primary text-sm whitespace-pre-wrap break-words">
              {displayedText}
              <span className="animate-pulse">|</span>
            </pre>
          </div>
          
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-primary/90">Intelligent Documentation Agent</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
              Your Medical Records
              <br />
              <span className="text-secondary">AI Assistant</span>
            </h1>
            <p className="text-xl text-secondary/80 max-w-2xl mx-auto">
              Experience autonomous documentation with an AI agent that understands,
              organizes, and optimizes your medical records in real-time
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white group transition-all duration-300"
              >
                <Terminal className="mr-2 group-hover:rotate-12 transition-transform" />
                Start Analysis
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/20 text-primary hover:bg-primary/5 group"
              >
                <Sparkles className="mr-2 group-hover:scale-110 transition-transform" />
                View Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};