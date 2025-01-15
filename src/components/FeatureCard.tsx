import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export const FeatureCard = ({ title, description, icon: Icon, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10",
      "hover:bg-white/10 transition-all duration-300 animate-float",
      className
    )}>
      <div className="flex flex-col items-start space-y-4">
        <div className="p-3 rounded-lg bg-accent/10 text-accent">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};