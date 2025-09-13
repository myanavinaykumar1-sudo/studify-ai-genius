import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/Header";
import { 
  Upload as UploadIcon, 
  FileText, 
  Image, 
  File,
  CheckCircle,
  Clock,
  AlertCircle,
  Brain
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Upload() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  };

  const handleFiles = (files: File[]) => {
    if (files.length === 0) return;
    
    setIsProcessing(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsProcessing(false);
            toast({
              title: "Upload Successful!",
              description: `${files.length} file(s) processed and ready for AI analysis.`,
            });
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const recentUploads = [
    { 
      name: "Machine_Learning_Notes.pdf", 
      status: "processed", 
      type: "pdf",
      uploadedAt: "2 hours ago",
      concepts: 24
    },
    { 
      name: "Data_Structures_Textbook.docx", 
      status: "processing", 
      type: "docx",
      uploadedAt: "5 minutes ago",
      concepts: 0
    },
    { 
      name: "Algorithm_Analysis.txt", 
      status: "processed", 
      type: "txt",
      uploadedAt: "Yesterday",
      concepts: 18
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "processed":
        return <CheckCircle className="h-4 w-4 text-study-progress" />;
      case "processing":
        return <Clock className="h-4 w-4 text-study-warning animate-spin" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return <File className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-5 w-5 text-red-500" />;
      case "docx":
        return <FileText className="h-5 w-5 text-blue-500" />;
      case "txt":
        return <File className="h-5 w-5 text-muted-foreground" />;
      default:
        return <File className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Upload Documents</h1>
          <p className="text-muted-foreground">Upload your study materials for AI processing and analysis</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Area */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UploadIcon className="h-5 w-5 text-primary" />
                  Document Upload
                </CardTitle>
                <CardDescription>
                  Drag and drop files or click to browse. Supports PDF, Word, and text files.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                    isDragging 
                      ? "border-primary bg-primary/5" 
                      : "border-muted-foreground/30 hover:border-primary/50"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {isProcessing ? (
                    <div className="space-y-4">
                      <Brain className="h-12 w-12 text-primary mx-auto animate-pulse" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Processing Documents</h3>
                        <p className="text-muted-foreground mb-4">AI is analyzing your content...</p>
                        <Progress value={uploadProgress} className="w-full max-w-xs mx-auto" />
                        <p className="text-sm text-muted-foreground mt-2">{uploadProgress}% complete</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <UploadIcon className="h-12 w-12 text-muted-foreground mx-auto" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Drop files here</h3>
                        <p className="text-muted-foreground mb-4">
                          or click to browse your computer
                        </p>
                        <input 
                          type="file" 
                          multiple 
                          accept=".pdf,.doc,.docx,.txt"
                          onChange={handleFileSelect}
                          className="hidden"
                          id="file-upload"
                        />
                        <label htmlFor="file-upload">
                          <Button variant="study" className="cursor-pointer">
                            Choose Files
                          </Button>
                        </label>
                      </div>
                      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          PDF
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          Word
                        </div>
                        <div className="flex items-center gap-1">
                          <File className="h-4 w-4" />
                          Text
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upload Stats & Recent Files */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Upload Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Documents</span>
                  <span className="font-semibold">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Concepts Extracted</span>
                  <span className="font-semibold">342</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Quizzes Generated</span>
                  <span className="font-semibold">89</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Recent Uploads</CardTitle>
                <CardDescription>Your latest document uploads</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentUploads.map((file, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      <div className="flex-shrink-0">
                        {getFileIcon(file.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{file.name}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{file.uploadedAt}</span>
                          {file.status === "processed" && (
                            <span>• {file.concepts} concepts</span>
                          )}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {getStatusIcon(file.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}