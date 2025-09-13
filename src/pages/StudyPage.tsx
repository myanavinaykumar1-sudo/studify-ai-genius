import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/Header";
import { 
  Brain,
  BookOpen,
  Target,
  Clock,
  CheckCircle,
  X,
  ArrowRight,
  RotateCcw
} from "lucide-react";

export default function StudyPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(45);

  const questions = [
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correct: 1,
      explanation: "Binary search divides the search space in half with each comparison, resulting in O(log n) time complexity."
    },
    {
      question: "Which data structure uses LIFO (Last In, First Out) principle?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      correct: 1,
      explanation: "A stack follows the LIFO principle where the last element added is the first one to be removed."
    },
    {
      question: "What is the worst-case time complexity of quicksort?",
      options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
      correct: 1,
      explanation: "Quicksort has O(n²) worst-case complexity when the pivot is always the smallest or largest element."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeRemaining(45);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setTimeRemaining(45);
  };

  const studyMaterials = [
    { title: "Data Structures Review", progress: 85, type: "notes" },
    { title: "Algorithm Practice", progress: 60, type: "exercises" },
    { title: "Complexity Analysis", progress: 40, type: "quiz" },
  ];

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto shadow-glow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-study-progress rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
              <CardDescription>Here are your results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-study-progress mb-2">
                  {Math.round((score / questions.length) * 100)}%
                </div>
                <p className="text-muted-foreground">
                  You scored {score} out of {questions.length} questions correctly
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Performance Breakdown:</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Correct Answers</span>
                    <span className="text-study-progress font-medium">{score}/{questions.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Accuracy</span>
                    <span className="font-medium">{Math.round((score / questions.length) * 100)}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Subject Mastery</span>
                    <span className="font-medium">
                      {score >= questions.length * 0.8 ? "Excellent" : 
                       score >= questions.length * 0.6 ? "Good" : "Needs Improvement"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={resetQuiz} variant="outline" className="flex-1">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
                <Button variant="study" className="flex-1">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Review Material
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Study Session</h1>
          <p className="text-muted-foreground">Test your knowledge with AI-generated questions</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Quiz Area */}
          <div className="lg:col-span-3">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary" />
                      Data Structures Quiz
                    </CardTitle>
                    <CardDescription>
                      Question {currentQuestion + 1} of {questions.length}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {timeRemaining}s
                  </div>
                </div>
                <Progress value={((currentQuestion + 1) / questions.length) * 100} className="w-full" />
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold leading-relaxed">
                    {questions[currentQuestion].question}
                  </h3>
                  
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                          selectedAnswer === index
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedAnswer === index
                              ? "border-primary bg-primary text-white"
                              : "border-muted-foreground"
                          }`}>
                            {selectedAnswer === index && <CheckCircle className="h-4 w-4" />}
                          </div>
                          <span>{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <Button variant="outline" disabled={currentQuestion === 0}>
                    Previous
                  </Button>
                  <Button 
                    variant="study" 
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                  >
                    {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Study Progress Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Study Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {studyMaterials.map((material, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{material.title}</span>
                      <span className="text-muted-foreground">{material.progress}%</span>
                    </div>
                    <Progress value={material.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-soft border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  AI Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg bg-primary/5 border-l-4 border-primary">
                  <p className="text-sm">
                    Focus on understanding the underlying concepts rather than memorizing answers.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-study-progress/5 border-l-4 border-study-progress">
                  <p className="text-sm">
                    Take your time to think through each option before selecting.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}