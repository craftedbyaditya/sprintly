import { useState, useEffect } from 'react';
import { 
  ArrowLeft,
  Sparkles,
  Copy,
  CheckCircle,
  Loader2,
  FileText,
  Menu,
  Search,
  Users,
  BarChart3,
  Home,
  Zap,
  Clock,
  MessageSquare,
  Check,
  Square,
  CheckSquare
} from 'lucide-react';

interface StoryGeneratorProps {
  onClose: () => void;
}

interface GeneratedStory {
  role: string;
  content: string;
}

export default function StoryGenerator({ onClose }: StoryGeneratorProps) {
  const [projectContext, setProjectContext] = useState('');
  const [storyPrompt, setStoryPrompt] = useState('');
  const [selectedRoles, setSelectedRoles] = useState<string[]>(['Developer', 'QA']);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedStories, setGeneratedStories] = useState<GeneratedStory[]>([]);
  const [copiedStory, setCopiedStory] = useState('');
  const [allSelected, setAllSelected] = useState(false);

  const roles = ['Developer', 'QA', 'UI/UX', 'Product Manager', 'End User', 'Business Analyst', 'DevOps', 'Security'];

  // Check if all roles are selected
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
    
    // Simulate API call with timeout
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
    }, 2000);
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStory(text);
    
    // Reset copied status after 2 seconds
    setTimeout(() => {
      if (copiedStory === text) {
        setCopiedStory('');
      }
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex overflow-hidden">
      {/* Side navigation bar */}
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
      
      {/* Main content area */}
      <div className="flex-grow overflow-y-auto overflow-x-hidden">
        {/* Minimalist navigation bar */}
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-12">
              {/* Intentionally minimal for aesthetic purposes */}
            </div>
          </div>
        </nav>
      
        <div className="px-4 sm:px-6 lg:px-8 py-6">
        {/* Main form area */}
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Story Builder</h1>
          <p className="text-sm text-gray-500 mb-5">
            Generate role-specific user stories using AI based on your feature idea.
          </p>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            {/* Project context input */}
            <div className="mb-6">
              <label htmlFor="projectContext" className="block text-sm font-medium text-gray-700 mb-1">
                Project context (optional)
              </label>
              <textarea
                id="projectContext"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                placeholder="Optional background or goals..."
                rows={3}
                value={projectContext}
                onChange={(e) => setProjectContext(e.target.value)}
              />
            </div>
            
            {/* Story prompt input */}
            <div className="mb-6">
              <label htmlFor="storyPrompt" className="block text-sm font-medium text-gray-700 mb-1">
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
            
            {/* Role selector */}
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
                      Deselect All
                    </>
                  ) : (
                    <>
                      <CheckSquare className="w-4 h-4 mr-1.5" />
                      Select All
                    </>
                  )}
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {roles.map((role) => (
                  <div 
                    key={role}
                    onClick={() => toggleRoleSelection(role)}
                    className={`flex items-center p-2 rounded-md cursor-pointer transition-all ${
                      selectedRoles.includes(role) 
                        ? 'bg-blue-50/50' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-4 h-4 flex items-center justify-center mr-2.5 ${selectedRoles.includes(role) ? 'text-blue-500' : 'text-gray-300'}`}>
                      {selectedRoles.includes(role) ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4" />}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{role}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Generate button - positioned in a more prominent fixed position */}
            <div className="sticky bottom-6 left-0 right-0 z-10 flex justify-end pt-4 mt-6 border-t border-gray-100">
              <button
                onClick={generateStories}
                disabled={!storyPrompt.trim() || isGenerating || selectedRoles.length === 0}
                className={`px-10 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] ${  
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
                    <Sparkles className="w-4 h-4" />
                    <span>Generate Stories</span>
                  </div>
                )}
              </button>
            </div>
          </div>
          
          {/* Generated stories */}
          {generatedStories.length > 0 && (
            <div className="mb-12 animate-fade-in">
              <h3 className="text-md font-medium text-gray-700 mb-5">Generated User Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {generatedStories.map((story, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 transition-all hover:shadow-md h-full flex flex-col"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
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
                    <p className="text-gray-700 leading-relaxed flex-grow">{story.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
