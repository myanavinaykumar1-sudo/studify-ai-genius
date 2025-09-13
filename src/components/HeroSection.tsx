import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Brain, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-study.jpg";

export const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                AI-Powered
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Study Platform
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your documents into personalized study materials with AI-driven 
                assessments, progress analytics, and intelligent recommendations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Started Free
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Upload className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Upload Documents</p>
              </div>
              <div className="text-center">
                <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">AI Processing</p>
              </div>
              <div className="text-center">
                <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Track Progress</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="AI Study Platform Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-medium animate-bounce">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-medium animate-pulse">
              <BarChart3 className="h-6 w-6 text-study-progress" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};