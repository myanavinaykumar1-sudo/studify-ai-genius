import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const CTASection = () => {
  const benefits = [
    "Process unlimited documents",
    "AI-generated assessments",
    "Progress tracking & analytics", 
    "Personalized study recommendations",
    "24/7 AI study assistant"
  ];

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Study Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students already using AI to study smarter, not harder
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 justify-center md:justify-start">
                <CheckCircle className="h-5 w-5 text-white/80 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold group"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>

          <p className="text-sm opacity-70 mt-4">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
    </section>
  );
};