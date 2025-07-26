import { useState } from 'react';
import { 
  Copy, 
  RefreshCw, 
  Plus
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
    window.location.href = '/story-generator';
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
      window.location.href = `/story-generator?prompt=${encodeURIComponent(storyToRetweak.prompt)}`;
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
                <h1 className="text-3xl font-bold text-gray-800 mb-1">
                  Welcome back 🙋🏻‍♂️!
                </h1>
              </div>
              <button
                onClick={handleGenerateNewStory}
                className="flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow-sm hover:shadow-md hover:from-blue-700 hover:to-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <Plus className="w-4 h-4 mr-2" />
                <span>Generate New Stories</span>
              </button>
            </div>
           
            
            {/* Project Context Section */}
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Project Context</h2>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all hover:shadow-md">
                <textarea
                  className="w-full p-4 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="What are you working on? (Optional)"
                  rows={3}
                  value={projectContext}
                  onChange={(e) => setProjectContext(e.target.value)}
                />
              </div>
              <p className="text-[0.7rem] text-gray-400 mt-2">
                Context helps tailor your stories better. Totally optional.
              </p>
            </div>

            {/* Recent Stories Section */}
            <div className="mb-12">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Last 3 Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recentStories.map((story) => (
                  <div 
                    key={story.id}
                    className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font text-blue-600 text-sm">{story.title}</h3>
                      <span className="text-xs text-gray-500">{story.date}</span>
                    </div>
                    <p className="text-gray-600 text-xs line-clamp-3 flex-grow">{story.prompt}</p>
                    <div className="flex justify-end space-x-2 mt-3">
                      <button 
                        onClick={() => handleCopyStory(story.id)}
                        className="flex items-center text-xs text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded hover:bg-gray-100"
                      >
                        <Copy className="w-3.5 h-3.5 mr-1" />
                        <span>Copy</span>
                      </button>
                      <button 
                        onClick={() => handleRetweakStory(story.id)}
                        className="flex items-center text-xs text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded hover:bg-gray-100"
                      >
                        <RefreshCw className="w-3.5 h-3.5 mr-1" />
                        <span>Retweak</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* No longer needed - moved to welcome section */}
          </div>
        </div>
      </div>
    </div>
  );
}
