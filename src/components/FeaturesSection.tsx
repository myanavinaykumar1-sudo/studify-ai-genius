import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Brain, BarChart3, Target, Upload, Lightbulb } from "lucide-react";
import documentProcessing from "@/assets/document-processing.jpg";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";
import aiRecommendations from "@/assets/ai-recommendations.jpg";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Upload,
      title: "Document Processing",
      description: "Upload PDFs, Word docs, and text files. Our AI extracts key concepts and creates structured study materials.",
      image: documentProcessing,
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Automated Assessments",
      description: "Generate custom quizzes, flashcards, and practice tests based on your uploaded content.",
      image: documentProcessing,
      color: "text-study-progress"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Track your learning progress with detailed analytics and performance insights.",
      image: analyticsDashboard,
      color: "text-study-info"
    },
    {
      icon: Brain,
      title: "AI Recommendations",
      description: "Get personalized study recommendations based on your learning patterns and weak areas.",
      image: aiRecommendations,
      color: "text-primary"
    },
    {
      icon: FileText,
      title: "Smart Summaries",
      description: "AI-generated summaries and key points from your study materials for quick review.",
      image: documentProcessing,
      color: "text-study-warning"
    },
    {
      icon: Lightbulb,
      title: "Study Insights",
      description: "Discover optimal study times, methods, and patterns tailored to your learning style.",
      image: aiRecommendations,
      color: "text-study-progress"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Smart Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform how you study with AI-powered tools designed to maximize your learning efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-0 shadow-soft"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-muted group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};