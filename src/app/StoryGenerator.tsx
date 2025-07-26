import { useState, useEffect, useRef } from 'react';
import { 
  Sparkles,
  Copy,
  CheckCircle,
  Loader2,
  FileText,
  Home,
  Clock,
  MessageSquare,
  Square,
  CheckSquare,
  ChevronDown,
  ChevronUp,
  Pencil,
  X
} from 'lucide-react';

/* Add global animation styles */
import './animations.css';

interface StoryGeneratorProps {
  onClose: () => void;
}

interface GeneratedStory {
  role: string;
  content: string;
}

export default function StoryGenerator({ onClose }: StoryGeneratorProps) {
  const [storyPrompt, setStoryPrompt] = useState('');
  const [selectedRoles, setSelectedRoles] = useState<string[]>(['Developer', 'QA']);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedStories, setGeneratedStories] = useState<GeneratedStory[]>([]);
  const [copiedStory, setCopiedStory] = useState('');
  const [allSelected, setAllSelected] = useState(false);
  const [isInputExpanded, setIsInputExpanded] = useState(true);
  const [expandedStoryIndex, setExpandedStoryIndex] = useState<number | null>(null);
  
  const storiesSectionRef = useRef<HTMLDivElement>(null);

  const roles = ['Developer', 'QA', 'UI/UX', 'Product Manager', 'End User', 'Business Analyst', 'DevOps', 'Security'];

  useEffect(() => {
    setAllSelected(selectedRoles.length === roles.length);
  }, [selectedRoles, roles.length]);

  const toggleRoleSelection = (role: string) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter(r => r !== role));
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  };
  
  const toggleAllRoles = () => {
    if (allSelected) {
      setSelectedRoles([]);
    } else {
      setSelectedRoles([...roles]);
    }
  };

  const generateStories = () => {
    if (!storyPrompt.trim()) return;
    
    setIsGenerating(true);
    
    setTimeout(() => {
      const stories = selectedRoles.map(role => {
        let content = '';
        
        switch(role) {
          case 'Developer':
            content = `As a developer, I want to ${storyPrompt.toLowerCase()}, so that I can implement the feature efficiently with proper technical considerations.`;
            break;
          case 'QA':
            content = `As a QA specialist, I want to test that ${storyPrompt.toLowerCase()}, so that I can ensure the feature works as expected across all scenarios.`;
            break;
          case 'UI/UX':
            content = `As a UI/UX designer, I want to create intuitive interfaces for ${storyPrompt.toLowerCase()}, so that users can easily understand and interact with the feature.`;
            break;
          case 'Product Manager':
            content = `As a product manager, I want to define success metrics for ${storyPrompt.toLowerCase()}, so that we can measure the impact of the feature on user engagement.`;
            break;
          case 'End User':
            content = `As an end user, I want to be able to ${storyPrompt.toLowerCase()}, so that I can accomplish my goals more effectively.`;
            break;
          case 'Business Analyst':
            content = `As a business analyst, I want to ensure ${storyPrompt.toLowerCase()} aligns with business requirements, so that the feature delivers measurable value.`;
            break;
          case 'DevOps':
            content = `As a DevOps engineer, I want to ensure ${storyPrompt.toLowerCase()} can be deployed and monitored effectively, so that we maintain service reliability.`;
            break;
          case 'Security':
            content = `As a security specialist, I want to verify ${storyPrompt.toLowerCase()} meets our security requirements, so that user data remains protected.`;
            break;
        }
        
        return {
          role,
          content
        };
      });
      
      setGeneratedStories(stories);
      setIsGenerating(false);
      setIsInputExpanded(false);
      
      setTimeout(() => {
        if (storiesSectionRef.current) {
          storiesSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }, 2000);
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStory(text);
    
    setTimeout(() => {
      if (copiedStory === text) {
        setCopiedStory('');
      }
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex overflow-hidden">
      <div className="w-16 md:w-64 bg-gray-50 border-r border-gray-200 flex-shrink-0 h-screen">
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-8 mt-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-800 hidden md:block">Sprintly</span>
          </div>
          
          <div className="flex-grow flex flex-col space-y-1">
            <button className="flex items-center py-3 px-3 md:px-4 rounded-lg hover:bg-gray-100 transition-colors">
              <Home className="w-5 h-5 text-gray-500" />
              <span className="ml-3 text-gray-600 font-medium hidden md:block">Dashboard</span>
            </button>
            <button className="flex items-center py-3 px-3 md:px-4 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
              <FileText className="w-5 h-5" />
              <span className="ml-3 font-medium hidden md:block">Story Builder</span>
            </button>
            <button className="flex items-center py-3 px-3 md:px-4 rounded-lg hover:bg-gray-100 transition-colors">
              <Clock className="w-5 h-5 text-gray-500" />
              <span className="ml-3 text-gray-600 font-medium hidden md:block">History</span>
            </button>
            <button className="flex items-center py-3 px-3 md:px-4 rounded-lg hover:bg-gray-100 transition-colors">
              <MessageSquare className="w-5 h-5 text-gray-500" />
              <span className="ml-3 text-gray-600 font-medium hidden md:block">Feedback</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex-grow overflow-y-auto overflow-x-hidden">
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-12" />
          </div>
        </nav>
      
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="w-full max-w-6xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">Story Builder</h1>
            <p className="text-sm text-gray-500 mb-5">
              Generate role-specific user stories using AI based on your feature idea.
            </p>
          
            {!isInputExpanded && generatedStories.length > 0 && (
              <div 
                onClick={() => setIsInputExpanded(true)}
                className="flex flex-col mb-6 bg-white py-3 px-4 border border-gray-100 rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-medium text-sm text-gray-700">Prompt</span>
                  <div className="flex items-center text-gray-400">
                    <Pencil className="w-3.5 h-3.5 mr-1" />
                    <span className="text-xs">Edit</span>
                  </div>
                </div>
                <span className="text-sm text-gray-600 mt-1">{storyPrompt}</span>
              </div>
            )}

            {(isInputExpanded || generatedStories.length === 0) && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 pt-4 mb-8 transition-all duration-300">
                <div className="transition-all duration-300">
                  <div className="mt-0 mb-6">
                    <label htmlFor="storyPrompt" className="block text-sm font-medium text-gray-700 mb-3">
                      Story prompt <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="storyPrompt"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                      placeholder="What feature would you like to build..."
                      rows={4}
                      required
                      value={storyPrompt}
                      onChange={(e) => setStoryPrompt(e.target.value)}
                    />
                  </div>
                
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-gray-700">
                        Select roles
                      </label>
                      <button 
                        onClick={toggleAllRoles}
                        className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {allSelected ? (
                          <>
                            <Square className="w-4 h-4 mr-1.5" />
                            <span>Deselect All</span>
                          </>
                        ) : (
                          <>
                            <CheckSquare className="w-4 h-4 mr-1.5" />
                            <span>Select All</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {roles.map((role) => (
                        <div 
                          key={role}
                          onClick={() => toggleRoleSelection(role)}
                          className={`flex items-center p-2 rounded-md cursor-pointer transition-all ${selectedRoles.includes(role) ? 'bg-blue-50/50' : 'hover:bg-gray-50'}`}
                        >
                          <div className={`w-4 h-4 flex items-center justify-center mr-2.5 ${selectedRoles.includes(role) ? 'text-blue-500' : 'text-gray-300'}`}>
                            {selectedRoles.includes(role) ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4" />}
                          </div>
                          <span className="text-sm font-medium text-gray-700">{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="sticky bottom-6 left-0 right-0 z-10 flex justify-end pt-4 mt-6">
              {/* <button
                onClick={() => {
                  if (!isInputExpanded) {
                    setIsInputExpanded(true);
                  } else {
                    generateStories();
                  }
                }}
                disabled={(!isInputExpanded && generatedStories.length > 0) || (!storyPrompt.trim() || isGenerating || selectedRoles.length === 0)}
                className={`px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] ${  
                  !storyPrompt.trim() || selectedRoles.length === 0 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-md'
                }`}
              >
                {isGenerating ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Generating...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    {!isInputExpanded && generatedStories.length > 0 ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        <span>Edit Prompt</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Generate Stories</span>
                      </>
                    )}
                  </div>
                )}
              </button> */}
              {generatedStories.length === 0 && (
  <button
    onClick={() => {
      if (!isInputExpanded) {
        setIsInputExpanded(true);
      } else {
        generateStories();
      }
    }}
    disabled={!storyPrompt.trim() || isGenerating || selectedRoles.length === 0}
    className={`px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] ${  
      !storyPrompt.trim() || selectedRoles.length === 0 
        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
        : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-md'
    }`}
  >
    <div className="flex items-center space-x-2">
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Generating...</span>
        </>
      ) : (
        <>
          <Sparkles className="w-4 h-4" />
          <span>Generate Stories</span>
        </>
      )}
    </div>
  </button>
)}
            </div>

            {generatedStories.length > 0 && (
              <div 
                ref={storiesSectionRef}
                className={`mb-12 animate-fade-in transition-all duration-500 ${!isInputExpanded ? 'pt-8 mt-2' : ''}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Generated User Stories</h2>
                  <div className="text-sm text-gray-500">{generatedStories.length} stories generated</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {generatedStories.map((story, index) => (
                    <div 
                      key={index} 
                      className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 transition-all hover:shadow-md h-full flex flex-col relative overflow-hidden"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        transform: 'translateY(0)',
                      }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                          {story.role}
                        </span>
                        <button 
                          onClick={() => copyToClipboard(story.content)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          aria-label="Copy to clipboard"
                        >
                          {copiedStory === story.content ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed overflow-hidden" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                          {story.content}
                        </p>
                        <div className="flex justify-end mt-2">
                          <button 
                            onClick={() => setExpandedStoryIndex(index)}
                            className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                          >
                            <span>Read more</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Modal for expanded story */}
            {expandedStoryIndex !== null && generatedStories[expandedStoryIndex] && (
              <div onClick={() => setExpandedStoryIndex(null)} className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in">
                <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-slide-up">
                  <div className="flex items-center justify-between p-5 border-b border-gray-100">
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2 py-0.5 text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200 mr-3">
                        {generatedStories[expandedStoryIndex].role}
                      </span>
                    </div>
                    <button 
                      onClick={() => setExpandedStoryIndex(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Close modal"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="p-5 flex-grow overflow-auto">
                    <p className="text-gray-700 leading-relaxed text-md">
                      {generatedStories[expandedStoryIndex].content}
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-100 p-4 flex justify-end">
                    <button
                      onClick={() => copyToClipboard(generatedStories[expandedStoryIndex].content)}
                      className="flex items-center px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors"
                    >
                      {copiedStory === generatedStories[expandedStoryIndex].content ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          <span>Copy to clipboard</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}