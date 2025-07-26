import { 
  Home, 
  FileText, 
  MessageSquare, 

} from 'lucide-react';

interface SideNavProps {
  onClose?: () => void;
  openDashboard?: () => void;
  openStoryBuilder?: () => void;
  openFeedback?: () => void;
  openTestCases?: () => void;
  openPricing?: () => void;
  activeScreen: 'dashboard' | 'storyBuilder' | 'feedback' ;
}

export default function SideNav({ 
  openDashboard, 
  openStoryBuilder, 
  openFeedback, 
  
  activeScreen 
}: SideNavProps) {
  return (
    <div className="w-14 md:w-52 bg-white border-r border-gray-100 shadow-sm flex-shrink-0 h-full">
      <div className="p-3 flex flex-col h-full">
        {/* App Logo */}
        <div className="flex items-center mb-6 h-10 pl-1.5">
          <button 
            onClick={() => window.location.href = import.meta.env.BASE_URL || '/'} 
            className="flex items-center focus:outline-none hover:opacity-90 transition-opacity"
          >
            <div className="w-7 h-7 bg-gradient-to-r from-blue-600 to-blue-500 rounded flex items-center justify-center text-white font-bold mr-2">
              S
            </div>
            <div className="text-gray-800 text-base font-bold hidden md:block">Sprintly</div>
          </button>
        </div>
        
        <div className="flex-grow flex flex-col space-y-1">
          {/* Dashboard */}
          <button 
            onClick={openDashboard}
            className={`flex items-center py-2.5 px-3 md:px-4 rounded-lg transition-colors ${
              activeScreen === 'dashboard' 
                ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            <Home className={`w-4 h-4 ${activeScreen !== 'dashboard' && 'text-gray-500'}`} />
            <span className={`ml-3 text-sm hidden md:block ${
              activeScreen !== 'dashboard' && 'text-gray-600'
            }`}>Dashboard</span>
          </button>
          
          {/* Story Builder */}
          <button 
            onClick={openStoryBuilder}
            className={`flex items-center py-2.5 px-3 md:px-4 rounded-lg transition-colors ${
              activeScreen === 'storyBuilder' 
                ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            <FileText className={`w-4 h-4 ${activeScreen !== 'storyBuilder' && 'text-gray-500'}`} />
            <span className={`ml-3 text-sm hidden md:block ${
              activeScreen !== 'storyBuilder' && 'text-gray-600'
            }`}>Story Builder</span>
          </button>
          
          
          {/* Feedback */}
          <button 
            onClick={openFeedback}
            className={`flex items-center py-2.5 px-3 md:px-4 rounded-lg transition-colors ${
              activeScreen === 'feedback' 
                ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            <MessageSquare className={`w-4 h-4 ${activeScreen !== 'feedback' && 'text-gray-500'}`} />
            <span className={`ml-3 text-sm hidden md:block ${
              activeScreen !== 'feedback' && 'text-gray-600'
            }`}>Feedback</span>
          </button>
          
        
          
  
        
        </div>
      </div>
    </div>
  );
}
