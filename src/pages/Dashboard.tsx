import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/Header";
import { 
  BookOpen, 
  Target, 
  TrendingUp, 
  Clock, 
  Award, 
  FileText,
  Brain,
  ChevronRight
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    { label: "Documents Processed", value: "24", icon: FileText, color: "text-primary" },
    { label: "Study Sessions", value: "156", icon: BookOpen, color: "text-study-progress" },
    { label: "Quizzes Completed", value: "89", icon: Target, color: "text-study-info" },
    { label: "Study Streak", value: "12 days", icon: Award, color: "text-study-warning" },
  ];

  const recentActivity = [
    { title: "Machine Learning Basics Quiz", score: "85%", time: "2 hours ago" },
    { title: "Data Structures Summary", score: "92%", time: "Yesterday" },
    { title: "Algorithm Analysis Test", score: "78%", time: "2 days ago" },
  ];

  const subjects = [
    { name: "Machine Learning", progress: 75, color: "bg-primary" },
    { name: "Data Structures", progress: 60, color: "bg-study-progress" },
    { name: "Algorithms", progress: 45, color: "bg-study-info" },
    { name: "Statistics", progress: 30, color: "bg-study-warning" },
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Alex!</h1>
          <p className="text-muted-foreground">Here's your learning progress and recommendations</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Study Progress */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Study Progress
                </CardTitle>
                <CardDescription>Your progress across different subjects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {subjects.map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{subject.name}</span>
                      <span className="text-muted-foreground">{subject.progress}%</span>
                    </div>
                    <Progress value={subject.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Your latest study sessions and quiz results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-study-progress">{activity.score}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Recommendations */}
          <div className="space-y-6">
            <Card className="shadow-soft border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  AI Recommendations
                </CardTitle>
                <CardDescription>Personalized study suggestions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
                  <h4 className="font-semibold text-sm mb-2">Focus on Algorithms</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Your performance suggests reviewing dynamic programming concepts.
                  </p>
                  <Button variant="study" size="sm" className="w-full">
                    Start Practice Session
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-4 rounded-lg bg-study-progress/5 border-l-4 border-study-progress">
                  <h4 className="font-semibold text-sm mb-2">Review Statistics</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Generate a quiz on probability distributions to strengthen weak areas.
                  </p>
                  <Button variant="success" size="sm" className="w-full">
                    Generate Quiz
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-4 rounded-lg bg-study-info/5 border-l-4 border-study-info">
                  <h4 className="font-semibold text-sm mb-2">Study Schedule</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Your optimal study time is 9-11 AM based on performance data.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Set Reminder
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}