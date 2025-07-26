import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Zap, 
  Users, 
  Download, 
  CheckCircle, 
  Star,
  Menu,
  X,
  Sparkles,
  Target,
  Clock,
  FileText,
  Settings,
  BarChart3,
  ArrowDown
} from 'lucide-react';
import StoryGenerator from './app/StoryGenerator';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [showStoryBuilder, setShowStoryBuilder] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set loaded state after a small delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const fullText = "Add a user authentication system with email/password login, social media integration (Google, Facebook), password reset functionality, and user profile management.";

  const startDemo = () => {
    setShowDemo(true);
    setDemoStep(0);
    setTypingComplete(false);
    setTypedText('');
    
    // Start typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
        
        // Wait a moment after typing completes, then move to next step
        setTimeout(() => {
          setDemoStep(1);
          
          // Continue with remaining steps
          setTimeout(() => {
            setDemoStep(2);
          }, 3000);
        }, 1000);
      }
    }, 30); // Typing speed
  };

  const closeDemo = () => {
    setShowDemo(false);
    setDemoStep(0);
    setTypingComplete(false);
    setTypedText('');
  };

  const openStoryBuilder = () => {
    setShowStoryBuilder(true);
  };

  const closeStoryBuilder = () => {
    setShowStoryBuilder(false);
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Sprintly</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Reviews</a>
                <button 
                  onClick={openStoryBuilder}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Story Builder
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => {
                  toggleMenu(); // Close the menu
                  openStoryBuilder(); // Open story builder
                }}
                className="w-full text-left block px-3 py-2 text-base font-medium text-blue-600 bg-blue-50 rounded-md flex items-center space-x-2"
              >
                <FileText className="w-5 h-5" />
                <span>Story Builder</span>
              </button>
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-gray-900">How it Works</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Reviews</a>
              {/* <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Early Access
              </button> */}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-24">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-48 sm:w-64 h-48 sm:h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 relative z-10">
          <div className="text-center">
            <div 
              className={`inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}>
              <Sparkles className={`w-3 h-3 sm:w-4 sm:h-4 ${isLoaded ? 'animate-pulse' : ''}`} />
              <span>AI-Powered User Story Generator</span>
            </div>
            
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}>
              Turn product features into<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                sprint-ready user stories
              </span>
              <br className="hidden sm:block" />
              — instantly
            </h1>
            
            <p className={`text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}>
              Generate role-specific user stories for PMs, developers, designers, and QAs. 
              Export to Jira, Notion, ClickUp in one click.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}>
              <button 
                onClick={openStoryBuilder}
                className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Generate My First Story</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={startDemo}
                className="w-full sm:w-auto text-gray-600 hover:text-gray-900 flex items-center justify-center space-x-1.5 transition-colors py-2">
                <span>Watch Demo</span>
                <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-bounce" />
              </button>
            </div>
            
            <div className={`mt-8 sm:mt-12 text-xs sm:text-sm text-gray-500 transition-all duration-700 delay-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0'}`}>
              Easily export to Jira, Notion, ClickUp, Linear, Trello, and more
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-3 sm:p-6 border-b border-gray-200">
              <h3 className="text-base sm:text-xl font-semibold text-gray-900">How Sprintly Works</h3>
              <button 
                onClick={closeDemo}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-all ${
                    demoStep >= 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    1
                  </div>
                  <div className={`w-10 sm:w-16 h-1 rounded transition-all ${
                    demoStep >= 1 ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-all ${
                    demoStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    2
                  </div>
                  <div className={`w-10 sm:w-16 h-1 rounded transition-all ${
                    demoStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-all ${
                    demoStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    3
                  </div>
                </div>
              </div>
              
              <div className="min-h-[300px] sm:min-h-[400px] flex items-center justify-center">
                {demoStep === 0 && (
                  <div className="text-center w-full max-w-3xl px-3 sm:px-0">
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto mb-4 sm:mb-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Step 1: Describe Your Feature</h4>
                      <div className="bg-white rounded-lg border-2 border-gray-300 p-3 sm:p-6 min-h-[100px] sm:min-h-[120px] flex items-start">
                        <div className="w-full">
                          <p className="text-left text-gray-700 leading-relaxed font-mono text-xs sm:text-sm">
                            {typedText}
                            {!typingComplete && (
                              <span className="animate-pulse bg-blue-500 text-blue-500 ml-1">|</span>
                            )}
                          </p>
                        </div>
                      </div>
                      {typingComplete && (
                        <div className="mt-3 sm:mt-4 flex items-center justify-center text-green-600 animate-fade-in">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                          <span className="text-xs sm:text-sm font-medium">Feature description complete!</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {!typingComplete ? "Watch as we type your feature description..." : "Ready to generate user stories!"}
                    </p>
                  </div>
                )}
                
                {demoStep === 1 && (
                  <div className="text-center animate-fade-in px-3 sm:px-0">
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto mb-4 sm:mb-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Step 2: AI Generates Stories</h4>
                      <div className="flex items-center justify-center mb-4 sm:mb-6">
                        <div className="animate-spin w-6 h-6 sm:w-8 sm:h-8 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                        <span className="ml-3 text-xs sm:text-sm text-gray-600">Processing with AI...</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200 animate-slide-up" style={{animationDelay: '0.5s'}}>
                          <div className="text-xs font-medium text-blue-700 mb-1 sm:mb-2">PRODUCT MANAGER</div>
                          <div className="text-xs sm:text-sm text-gray-700">As a PM, I want to track user registration metrics...</div>
                        </div>
                        <div className="bg-purple-50 p-3 sm:p-4 rounded-lg border border-purple-200 animate-slide-up" style={{animationDelay: '0.7s'}}>
                          <div className="text-xs font-medium text-purple-700 mb-1 sm:mb-2">DEVELOPER</div>
                          <div className="text-xs sm:text-sm text-gray-700">As a developer, I need to implement OAuth integration...</div>
                        </div>
                        <div className="bg-teal-50 p-3 sm:p-4 rounded-lg border border-teal-200 animate-slide-up" style={{animationDelay: '0.9s'}}>
                          <div className="text-xs font-medium text-teal-700 mb-1 sm:mb-2">DESIGNER</div>
                          <div className="text-xs sm:text-sm text-gray-700">As a designer, I want to create intuitive login flows...</div>
                        </div>
                        <div className="bg-orange-50 p-3 sm:p-4 rounded-lg border border-orange-200 animate-slide-up" style={{animationDelay: '1.1s'}}>
                          <div className="text-xs font-medium text-orange-700 mb-1 sm:mb-2">QA ENGINEER</div>
                          <div className="text-xs sm:text-sm text-gray-700">As a QA, I need to test password validation rules...</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">Role-specific stories generated instantly</p>
                  </div>
                )}
                
                {demoStep === 2 && (
                  <div className="text-center animate-fade-in px-3 sm:px-0">
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto mb-4 sm:mb-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Step 3: Export Anywhere</h4>
                      <div className="flex items-center justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-6">
                        <div className="bg-white p-2 sm:p-4 rounded-lg shadow-sm border animate-bounce" style={{animationDelay: '0.2s'}}>
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">J</span>
                          </div>
                          <div className="text-xs mt-1 sm:mt-2 text-gray-600">Jira</div>
                        </div>
                        <div className="bg-white p-2 sm:p-4 rounded-lg shadow-sm border animate-bounce" style={{animationDelay: '0.4s'}}>
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">N</span>
                          </div>
                          <div className="text-xs mt-1 sm:mt-2 text-gray-600">Notion</div>
                        </div>
                        <div className="bg-white p-2 sm:p-4 rounded-lg shadow-sm border animate-bounce" style={{animationDelay: '0.6s'}}>
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">C</span>
                          </div>
                          <div className="text-xs mt-1 sm:mt-2 text-gray-600">ClickUp</div>
                        </div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
                        <div className="flex items-center justify-center text-green-700">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                          <span className="text-xs sm:text-sm font-medium">12 user stories exported successfully!</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">One-click export to your favorite tools</p>
                  </div>
                )}
              </div>
              
              <div className="flex justify-center mt-4 sm:mt-8">
                <button 
                  onClick={closeDemo}
                  className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium mx-4 sm:mx-0"
                >
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* How It Works */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              From idea to actionable stories in 3 steps
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Stop spending hours writing user stories. Let AI do the heavy lifting.
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">1. Describe Your Feature</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Simply type or paste your product feature description. No complex formatting needed.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">2. AI Generates Stories</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our AI instantly creates user stories for PMs, developers, designers, and QAs.
              </p>
            </div>
            
            <div className="text-center group sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Download className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">3. Export & Execute</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                One-click export to Jira, Notion, ClickUp, or any tool your team uses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Everything you need for better sprints
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Smart features designed specifically for agile product teams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Role-Based Stories</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Get tailored user stories for Product Managers, Developers, Designers, and QA Engineers.
              </p>
            </div>
            
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Instant Generation</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Generate comprehensive user stories in seconds, not hours. Focus on strategy, not documentation.
              </p>
            </div>
            
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Download className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Export Anywhere</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                One-click export to Jira, Notion, ClickUp, Linear, and more. Integrate with your existing workflow.
              </p>
            </div>
            
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Smart Templates</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                AI-powered templates that adapt to your product domain and team preferences.
              </p>
            </div>
            
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Acceptance Criteria</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Automatically generate clear acceptance criteria and edge cases for each story.
              </p>
            </div>
            
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Time Estimation</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Get intelligent story point estimates and time predictions for better sprint planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for every role on your team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sprintly speaks the language of each team member.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Managers</h3>
              <p className="text-sm text-gray-600 mb-3">
                For PMs who hate writing tickets and need clear requirements fast.
              </p>
              <div className="text-xs text-blue-700 font-medium">
                "Finally, no more messy briefs"
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Developers</h3>
              <p className="text-sm text-gray-600 mb-3">
                For devs who need technical clarity and well-defined scope.
              </p>
              <div className="text-xs text-purple-700 font-medium">
                "Clear requirements = better code"
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl border border-teal-200">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">QA Engineers</h3>
              <p className="text-sm text-gray-600 mb-3">
                For QAs who need comprehensive test scenarios and edge cases.
              </p>
              <div className="text-xs text-teal-700 font-medium">
                "No more guessing test cases"
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Designers</h3>
              <p className="text-sm text-gray-600 mb-3">
                For designers who need user-focused stories and UX considerations.
              </p>
              <div className="text-xs text-orange-700 font-medium">
                "User needs, crystal clear"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Seamless Integration</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect Sprintly to your favorite tools and get your user stories where you need them
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Jira */}
            <div className="flex flex-col items-center">
              <div className="h-12 w-32 bg-white shadow-sm rounded-lg flex items-center justify-center p-2 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-blue-600 font-bold text-xl">Jira</div>
              </div>
              <span className="text-xs text-gray-500 mt-2">Issue Tracking</span>
            </div>
            
            {/* Linear */}
            <div className="flex flex-col items-center">
              <div className="h-12 w-32 bg-white shadow-sm rounded-lg flex items-center justify-center p-2 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-purple-600 font-semibold text-xl">Linear</div>
              </div>
              <span className="text-xs text-gray-500 mt-2">Project Management</span>
            </div>
            
            {/* Trello */}
            <div className="flex flex-col items-center">
              <div className="h-12 w-32 bg-white shadow-sm rounded-lg flex items-center justify-center p-2 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-blue-400 font-bold text-xl">Trello</div>
              </div>
              <span className="text-xs text-gray-500 mt-2">Kanban Boards</span>
            </div>
            
            {/* Notion */}
            <div className="flex flex-col items-center">
              <div className="h-12 w-32 bg-white shadow-sm rounded-lg flex items-center justify-center p-2 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-gray-800 font-bold text-xl">Notion</div>
              </div>
              <span className="text-xs text-gray-500 mt-2">Documentation</span>
            </div>
            
            {/* Asana */}
            <div className="flex flex-col items-center">
              <div className="h-12 w-32 bg-white shadow-sm rounded-lg flex items-center justify-center p-2 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-orange-600 font-semibold text-xl">Asana</div>
              </div>
              <span className="text-xs text-gray-500 mt-2">Task Management</span>
            </div>
            
            {/* GitHub */}
            <div className="flex flex-col items-center">
              <div className="h-12 w-32 bg-white shadow-sm rounded-lg flex items-center justify-center p-2 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-gray-900 font-semibold text-xl">GitHub</div>
              </div>
              <span className="text-xs text-gray-500 mt-2">Projects</span>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-sm text-gray-500">And many more integrations available</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Loved by product teams everywhere
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of teams already shipping faster with Sprintly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Sprintly cut our sprint planning time from 4 hours to 30 minutes. The AI-generated stories are incredibly accurate and save us so much manual work."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">SR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Rodriguez</div>
                  <div className="text-sm text-gray-500">Product Manager at TechCorp</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "As a developer, I love how Sprintly generates technical requirements that actually make sense. No more back-and-forth clarification calls."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Mike Johnson</div>
                  <div className="text-sm text-gray-500">Senior Developer at StartupXYZ</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The export feature is a game-changer. One click and all our stories are in Jira with proper formatting. Couldn't be happier."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">AL</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Anna Lee</div>
                  <div className="text-sm text-gray-500">Agile Coach at InnovateCo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Builder Screen */}
      {showStoryBuilder && <StoryGenerator onClose={closeStoryBuilder} />}

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to ship faster?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of product teams already using Sprintly to generate better user stories in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 font-semibold flex items-center space-x-2 shadow-lg">
              <span>Generate My First Story</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-8 text-white/70 text-sm">
            Free trial • No setup required • Cancel anytime
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Sprintly</span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                AI-powered user story generation for agile product teams. 
                Turn features into sprint-ready stories instantly.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sprintly. All rights reserved.</p>
          </div>
        </div>
      </footer>
 
    </div>
  );
}

export default App;