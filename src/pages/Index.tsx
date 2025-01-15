import { Brain, FileText, Sparkles, Terminal, Shield } from "lucide-react";
import { TerminalHero } from "@/components/TerminalHero";
import { FeatureCard } from "@/components/FeatureCard";
import { NewsletterSection } from "@/components/NewsletterSection";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced natural language processing for accurate medical documentation.",
  },
  {
    icon: Terminal,
    title: "Smart CLI Interface",
    description: "Intuitive command-line tools for rapid documentation processing.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security with full HIPAA compliance.",
  },
  {
    icon: FileText,
    title: "Smart Templates",
    description: "Customizable templates that learn from your workflow.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <TerminalHero />
      
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Practice
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our AI-powered platform revolutionizes medical documentation,
              allowing you to focus more on what matters most - your patients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                className={`delay-${index * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
};

export default Index;