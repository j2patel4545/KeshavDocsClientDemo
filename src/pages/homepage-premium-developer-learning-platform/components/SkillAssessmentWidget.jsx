import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillAssessmentWidget = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isAssessmentStarted, setIsAssessmentStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isActive, setIsActive] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is the primary purpose of React hooks?",
      options: [
        "To replace class components entirely",
        "To manage state and side effects in functional components",
        "To improve performance only",
        "To handle routing in React applications"
      ],
      correct: 1,
      difficulty: "Beginner",
      category: "React"
    },
    {
      id: 2,
      question: "Which HTTP method is typically used to update existing data?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correct: 2,
      difficulty: "Beginner",
      category: "Web APIs"
    },
    {
      id: 3,
      question: "What does SSR stand for in Next.js?",
      options: [
        "Static Site Rendering",
        "Server-Side Rendering",
        "Secure Socket Rendering",
        "Single Source Rendering"
      ],
      correct: 1,
      difficulty: "Intermediate",
      category: "Next.js"
    },
    {
      id: 4,
      question: "In MongoDB, what is a collection?",
      options: [
        "A single document",
        "A group of databases",
        "A group of documents",
        "A query result"
      ],
      correct: 2,
      difficulty: "Beginner",
      category: "MongoDB"
    },
    {
      id: 5,
      question: "What is the purpose of middleware in Express.js?",
      options: [
        "To handle database connections only",
        "To execute code during the request-response cycle",
        "To manage user authentication only",
        "To serve static files only"
      ],
      correct: 1,
      difficulty: "Intermediate",
      category: "Express.js"
    }
  ];

  const learningPaths = {
    beginner: {
      title: "Foundation Builder",
      description: "Start with the fundamentals and build a solid foundation",
      technologies: ["HTML/CSS", "JavaScript", "React Basics"],
      duration: "8-12 weeks",
      color: "from-green-500 to-emerald-400",
      icon: "BookOpen"
    },
    intermediate: {
      title: "Full-Stack Developer",
      description: "Master the complete MERN stack and build real applications",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      duration: "12-16 weeks",
      color: "from-blue-500 to-cyan-400",
      icon: "Code2"
    },
    advanced: {
      title: "Architecture Expert",
      description: "Advanced patterns, performance optimization, and system design",
      technologies: ["Next.js", "TypeScript", "Microservices", "DevOps"],
      duration: "16-20 weeks",
      color: "from-purple-500 to-pink-400",
      icon: "Zap"
    }
  };

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleFinishAssessment();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startAssessment = () => {
    setIsAssessmentStarted(true);
    setIsActive(true);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setTimeLeft(300);
  };

  const handleAnswer = (questionId, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleFinishAssessment();
    }
  };

  const handleFinishAssessment = () => {
    setIsActive(false);
    setShowResults(true);
  };

  const calculateResults = () => {
    let correct = 0;
    let beginnerCorrect = 0;
    let intermediateCorrect = 0;
    let beginnerTotal = 0;
    let intermediateTotal = 0;

    questions.forEach(question => {
      if (question.difficulty === "Beginner") beginnerTotal++;
      if (question.difficulty === "Intermediate") intermediateTotal++;

      if (answers[question.id] === question.correct) {
        correct++;
        if (question.difficulty === "Beginner") beginnerCorrect++;
        if (question.difficulty === "Intermediate") intermediateCorrect++;
      }
    });

    const percentage = Math.round((correct / questions.length) * 100);
    let recommendedPath = 'beginner';

    if (percentage >= 80 && intermediateCorrect >= 2) {
      recommendedPath = 'advanced';
    } else if (percentage >= 60 && beginnerCorrect >= 2) {
      recommendedPath = 'intermediate';
    }

    return {
      correct,
      total: questions.length,
      percentage,
      recommendedPath,
      beginnerScore: beginnerTotal > 0 ? Math.round((beginnerCorrect / beginnerTotal) * 100) : 0,
      intermediateScore: intermediateTotal > 0 ? Math.round((intermediateCorrect / intermediateTotal) * 100) : 0
    };
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const results = showResults ? calculateResults() : null;
  const recommendedPath = results ? learningPaths[results.recommendedPath] : null;

  if (!isAssessmentStarted) {
    return (
      <section className="py-20 dark:bg-gradient-to-b dark:from-white dark:to-slate-50   bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 lg:p-12">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Icon name="Brain" size={32} className="text-white" />
              </div>
              
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Skill Assessment
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Discover your current skill level and get personalized learning recommendations. 
                This quick 5-minute assessment will help us tailor the perfect learning path for you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <Icon name="Clock" size={24} className="text-blue-500 mx-auto mb-3" />
                  <div className="font-semibold text-slate-900">5 Minutes</div>
                  <div className="text-sm text-slate-600">Quick Assessment</div>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <Icon name="HelpCircle" size={24} className="text-green-500 mx-auto mb-3" />
                  <div className="font-semibold text-slate-900">5 Questions</div>
                  <div className="text-sm text-slate-600">Carefully Selected</div>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <Icon name="Target" size={24} className="text-purple-500 mx-auto mb-3" />
                  <div className="font-semibold text-slate-900">Personalized</div>
                  <div className="text-sm text-slate-600">Learning Path</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center text-slate-600">
                  <Icon name="CheckCircle" size={16} className="text-green-500 mr-2" />
                  <span>No registration required</span>
                </div>
                <div className="flex items-center justify-center text-slate-600">
                  <Icon name="CheckCircle" size={16} className="text-green-500 mr-2" />
                  <span>Instant results and recommendations</span>
                </div>
                <div className="flex items-center justify-center text-slate-600">
                  <Icon name="CheckCircle" size={16} className="text-green-500 mr-2" />
                  <span>Covers React, Node.js, MongoDB, and more</span>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                iconName="Play"
                iconPosition="right"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 text-lg font-semibold"
                onClick={startAssessment}
              >
                Start Assessment
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (showResults) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 lg:p-12">
              {/* Results Header */}
              <div className="text-center mb-12">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Trophy" size={40} className="text-white" />
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  Assessment Complete!
                </h2>
                <div className="text-6xl font-bold text-green-500 mb-2">
                  {results.percentage}%
                </div>
                <p className="text-xl text-slate-600">
                  You scored {results.correct} out of {results.total} questions correctly
                </p>
              </div>

              {/* Score Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex items-center mb-3">
                    <Icon name="BookOpen" size={20} className="text-blue-500 mr-2" />
                    <span className="font-semibold text-blue-900">Beginner Level</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {results.beginnerScore}%
                  </div>
                  <div className="text-sm text-blue-700">Fundamentals & Basics</div>
                </div>
                <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="flex items-center mb-3">
                    <Icon name="Code2" size={20} className="text-purple-500 mr-2" />
                    <span className="font-semibold text-purple-900">Intermediate Level</span>
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    {results.intermediateScore}%
                  </div>
                  <div className="text-sm text-purple-700">Advanced Concepts</div>
                </div>
              </div>

              {/* Recommended Path */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                  Recommended Learning Path
                </h3>
                <div className={`p-8 bg-gradient-to-r ${recommendedPath.color} rounded-2xl text-white`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-6">
                      <Icon name={recommendedPath.icon} size={28} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold mb-2">{recommendedPath.title}</h4>
                      <p className="text-white/90 text-lg">{recommendedPath.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-white/80 text-sm font-medium mb-2">Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        {recommendedPath.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-white/80 text-sm font-medium mb-2">Duration</div>
                      <div className="text-2xl font-bold">{recommendedPath.duration}</div>
                    </div>
                  </div>

                  <Button
                    variant="secondary"
                    size="lg"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 font-semibold"
                    onClick={() => console.log(`Start ${recommendedPath.title} path`)}
                  >
                    Start This Path
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  iconName="BookOpen"
                  iconPosition="left"
                  className="px-8 py-3 font-semibold"
                  onClick={() => console.log('View All Paths')}
                >
                  View All Learning Paths
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="RotateCcw"
                  iconPosition="left"
                  className="px-8 py-3 font-semibold"
                  onClick={() => {
                    setIsAssessmentStarted(false);
                    setShowResults(false);
                    setCurrentQuestion(0);
                    setAnswers({});
                  }}
                >
                  Retake Assessment
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress Header */}
          <div className="bg-white rounded-t-3xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold text-slate-900">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentQ.difficulty === 'Beginner' ?'bg-green-100 text-green-800' :'bg-blue-100 text-blue-800'
                }`}>
                  {currentQ.difficulty}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={16} className="text-slate-500" />
                <span className={`font-mono text-lg font-semibold ${
                  timeLeft < 60 ? 'text-red-500' : 'text-slate-700'
                }`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-slate-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
                className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              />
            </div>
          </div>

          {/* Question Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-b-3xl shadow-lg border-l border-r border-b border-slate-200 p-8"
            >
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">
                    {currentQ.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 leading-relaxed">
                  {currentQ.question}
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                {currentQ.options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(currentQ.id, index)}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                      answers[currentQ.id] === index
                        ? 'border-blue-500 bg-blue-50 text-blue-900' :'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                        answers[currentQ.id] === index
                          ? 'border-blue-500 bg-blue-500' :'border-slate-300'
                      }`}>
                        {answers[currentQ.id] === index && (
                          <Icon name="Check" size={14} className="text-white" />
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="flex justify-between">
                <Button
                  variant="ghost"
                  size="lg"
                  iconName="ChevronLeft"
                  disabled={currentQuestion === 0}
                  onClick={() => setCurrentQuestion(prev => prev - 1)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  Previous
                </Button>

                <Button
                  variant="primary"
                  size="lg"
                  iconName={currentQuestion === questions.length - 1 ? "CheckCircle" : "ChevronRight"}
                  iconPosition="right"
                  disabled={answers[currentQ.id] === undefined}
                  onClick={nextQuestion}
                  className="px-8 py-3 font-semibold"
                >
                  {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillAssessmentWidget;