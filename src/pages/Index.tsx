
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FileUpload from '@/components/FileUpload';
import AnalysisResults from '@/components/AnalysisResults';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Brain, Zap, Target, BarChart3 } from 'lucide-react';

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setAnalysisResults(null);
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    setAnalysisResults(null);
  };

  const handleAnalyzeResume = async () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call - replace with actual backend integration
    setTimeout(() => {
      setAnalysisResults({
        overallScore: 85,
        skills: ['Python', 'Machine Learning', 'Data Analysis', 'SQL', 'React', 'Node.js'],
        experience: '5+ years in software development with focus on AI/ML',
        education: 'MS in Computer Science from Stanford University',
        strengths: [
          'Strong technical background in AI/ML',
          'Excellent problem-solving skills',
          'Leadership experience in cross-functional teams',
          'Published research in top-tier conferences'
        ],
        improvements: [
          'Could benefit from more cloud computing experience',
          'Consider adding project management certifications',
          'Expand experience in agile methodologies'
        ],
        jobMatch: 92
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced RAG technology analyzes resumes with human-like understanding'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get comprehensive analysis results in seconds, not hours'
    },
    {
      icon: Target,
      title: 'Job Matching',
      description: 'Compare resumes against specific job requirements for perfect matches'
    },
    {
      icon: BarChart3,
      title: 'Detailed Insights',
      description: 'Receive actionable feedback and improvement suggestions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HR Resume Analyzer
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionize Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Hiring Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Leverage cutting-edge AI and RAG technology to analyze resumes with unprecedented accuracy, 
            match candidates to job requirements, and make data-driven hiring decisions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Analysis Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-semibold">Upload & Analyze Resume</CardTitle>
              <p className="text-gray-600">Upload a resume to get started with AI-powered analysis</p>
            </CardHeader>
            <CardContent className="space-y-8">
              <FileUpload
                onFileSelect={handleFileSelect}
                selectedFile={selectedFile}
                onFileRemove={handleFileRemove}
              />

              {selectedFile && !isAnalyzing && !analysisResults && (
                <div className="text-center animate-fade-in">
                  <Button
                    onClick={handleAnalyzeResume}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Brain className="w-5 h-5 mr-2" />
                    Analyze Resume
                  </Button>
                </div>
              )}

              {isAnalyzing && <LoadingSpinner />}

              {analysisResults && (
                <AnalysisResults results={analysisResults} />
              )}
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-500">
          <p>&copy; 2024 HR Resume Analyzer. Powered by advanced AI and RAG technology.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
