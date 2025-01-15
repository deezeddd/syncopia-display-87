import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export const NewsletterSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "We'll keep you updated on the latest features and news.",
    });
  };

  return (
    <div className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
          <p className="text-white/70">
            Get the latest updates on our AI technology and medical documentation features.
          </p>
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
              required
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};