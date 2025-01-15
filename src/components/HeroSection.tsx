import { Button } from "@/components/ui/button";
import { Brain, FileText, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary/80">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-white/90">Revolutionizing Medical Documentation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            AI-Powered Medical<br />Documentation Assistant
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Transform your medical documentation workflow with our intelligent AI assistant. 
            Save time, reduce errors, and focus more on patient care.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
    </div>
  );
};