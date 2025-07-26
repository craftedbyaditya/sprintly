import { useState, useEffect } from 'react';
import { 
  Copy, 
  RefreshCw, 
  Plus,
  TestTube,
  Sparkles
} from 'lucide-react';
import SideNav from './components/SideNav';

interface RecentStory {
  id: string;
  title: string;
  prompt: string;
  date: string;
}

interface DashboardProps {
  onClose?: () => void;
  openStoryBuilder?: () => void;
  openFeedback?: () => void;
}

export default function Dashboard({ onClose, openStoryBuilder, openFeedback }: DashboardProps) {
  const [projectContext, setProjectContext] = useState('');
  const [hasChanges, setHasChanges] = useState(false);
  const [saveStatus, setSaveStatus] = useState('idle'); // 'idle', 'saving', 'saved'
  
  // Check for cached project context on component mount
  useEffect(() => {
    const cachedProjectContext = localStorage.getItem('projectContext');
    if (cachedProjectContext) {
      setProjectContext(cachedProjectContext);
    }
  }, []);
  
  // Update project context state when textfield changes
  const handleProjectContextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setProjectContext(newValue);
    setHasChanges(true);
  };
  
  // Save project context to cache when save button is clicked
  const handleSaveProjectContext = () => {
    setSaveStatus('saving');
    
    // Simulate a short delay to show saving state
    setTimeout(() => {
      localStorage.setItem('projectContext', projectContext);
      setHasChanges(false);
      setSaveStatus('saved');
      
      // Reset to idle state after showing saved
      setTimeout(() => {
        setSaveStatus('idle');
      }, 1500);
    }, 600);
  };
  
  // Mock data for recent stories
  const recentStories: RecentStory[] = [
    {
      id: '1',
      title: 'User invites team members',
      prompt: 'Create a feature allowing users to invite team members via email',
      date: '2 days ago'
    },
    {
      id: '2',
      title: 'Task prioritization',
      prompt: 'Build a drag and drop interface for prioritizing tasks',
      date: '1 week ago'
    },
    {
      id: '3',
      title: 'Dashboard analytics',
      prompt: 'Create a dashboard showing project progress and analytics',
      date: '2 weeks ago'
    }
  ];

  const userName = 'Aditya'; // This would typically come from a user context/state

  const handleGenerateNewStory = () => {
    // Navigation logic to go to story generator would be implemented here
    window.location.href = `${import.meta.env.BASE_URL || '/'}story-generator`;
  };

  const handleCopyStory = (storyId: string) => {
    // Find the story by ID
    const storyToCopy = recentStories.find(story => story.id === storyId);
    if (storyToCopy) {
      // Copy to clipboard logic
      navigator.clipboard.writeText(storyToCopy.prompt);
      // You might want to add a toast notification or other feedback here
    }
  };

  const handleRetweakStory = (storyId: string) => {
    // Navigate to story generator with the selected story's prompt pre-filled
    const storyToRetweak = recentStories.find(story => story.id === storyId);
    if (storyToRetweak) {
      // In a real app, you'd use React Router or similar navigation with state
      window.location.href = `${import.meta.env.BASE_URL || '/'}story-generator?prompt=${encodeURIComponent(storyToRetweak.prompt)}`;
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex overflow-hidden">
      {/* Left Sidebar */}
      <SideNav 
        activeScreen="dashboard"
        onClose={onClose}
        openStoryBuilder={openStoryBuilder}
        openFeedback={openFeedback}
      />
      
      {/* Main content area */}
      <div className="flex-grow overflow-y-auto overflow-x-hidden">
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="w-full px-4 sm:px-5 lg:px-6">
            <div className="flex items-center h-12" />
          </div>
        </nav>
        
        <div className="px-4 sm:px-5 lg:px-6 py-6">
          <div className="w-full max-w-6xl">
            {/* Welcome Section */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="flex justify-between items-center text-2xl font-bold text-gray-800 mb-2">
                  Welcome back 🙋🏻‍♂️!
                </h1>
              </div>
             
            </div>
           
            
            {/* Project Context Section */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-gray-800">Project Context</h2>
                <span className="text-xs text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full">Helps tailor your stories</span>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="p-2 bg-gradient-to-r from-blue-50 to-blue-50/30 border-b border-gray-100">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="relative">
                  <textarea
                    className={`w-full p-5 text-gray-700 resize-none focus:outline-none focus:ring-0 border-none transition-all text-sm ${hasChanges ? 'bg-amber-50/30' : 'bg-white'}`}
                    placeholder="Describe what you're working on to help Sprintly generate more relevant user stories..."
                    rows={4}
                    value={projectContext}
                    onChange={handleProjectContextChange}
                  />
                  {hasChanges && (
                    <div className="absolute top-2 right-2 flex items-center justify-center h-5 px-1.5 text-[10px] font-medium text-amber-700 bg-amber-100 rounded-sm border border-amber-200 animate-pulse">
                      EDITING
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-t border-gray-100">
                  <div className="flex items-center">
                    {saveStatus === 'idle' && hasChanges && (
                      <div className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                        <p className="text-xs text-amber-700 font-medium">Unsaved changes</p>
                      </div>
                    )}
                    {saveStatus === 'idle' && !hasChanges && (
                      <div className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        <p className="text-xs text-green-700 font-medium">All changes saved</p>
                      </div>
                    )}
                    {saveStatus === 'saving' && (
                      <div className="flex items-center">
                        <div className="animate-spin w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full mr-2"></div>
                        <p className="text-xs text-blue-600 font-medium">Saving changes...</p>
                      </div>
                    )}
                    {saveStatus === 'saved' && (
                      <div className="flex items-center animate-bounce">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <p className="text-xs text-green-600 font-medium">Successfully saved!</p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={handleSaveProjectContext}
                    disabled={!hasChanges || saveStatus === 'saving'}
                    className={`flex items-center px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
                      ${saveStatus === 'saving'
                        ? 'bg-blue-400 text-white cursor-not-allowed' 
                        : hasChanges
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                  >
                    {saveStatus === 'saving' ? (
                      <>
                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-1.5"></div>
                        Saving...
                      </>
                    ) : hasChanges ? (
                      <>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                        Save Changes
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Saved
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Stories Section */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <h2 className="text-lg font-semibold text-gray-800">Recent Stories</h2>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{recentStories.length}</span>
                </div>
                <button
                  onClick={handleGenerateNewStory}
                  className="flex items-center px-3 py-1.5 text-sm text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-md transition-all duration-200"
                >
                  <Plus className="w-3.5 h-3.5 mr-1" />
                  <span>New Story</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                {recentStories.map((story) => (
                  <div 
                    key={story.id}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full"
                  >
                    <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                      <h3 className="font-medium text-blue-600 text-sm">{story.title}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-md">{story.date}</span>
                    </div>
                    
                    <div className="p-4 flex-grow">
                      <p className="text-gray-700 text-sm mb-3 line-clamp-3">{story.prompt}</p>
                      
                      <div className="flex justify-between items-center mt-auto pt-2">
                        <div className="flex space-x-1">
                          <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full">User Story</span>
                        </div>
                        <div className="flex space-x-1">
                          <button 
                            onClick={() => handleCopyStory(story.id)}
                            className="flex items-center text-xs text-gray-600 hover:text-blue-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                            title="Copy Story"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleRetweakStory(story.id)}
                            className="flex items-center text-xs text-gray-600 hover:text-blue-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                            title="Retweak Story"
                          >
                            <RefreshCw className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
              
                
                {recentStories.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-10 bg-gray-50 border border-gray-200 rounded-lg text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">No stories yet</p>
                    <button
                      onClick={handleGenerateNewStory}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Generate your first story
                    </button>
                  </div>
                )}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
