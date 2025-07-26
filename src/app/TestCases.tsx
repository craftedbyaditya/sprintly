import { CalendarClock } from 'lucide-react';
import SideNav from './components/SideNav';

interface TestCasesProps {
  onClose?: () => void;
  openDashboard?: () => void;
  openStoryBuilder?: () => void;
  openFeedback?: () => void;
}

export default function TestCases({ 
  onClose, 
  openDashboard, 
  openStoryBuilder, 
  openFeedback 
}: TestCasesProps) {
  return (
    <div className="fixed inset-0 bg-white z-50 flex overflow-hidden">
      {/* Left Sidebar */}
      <SideNav 
        activeScreen="testCases"
        onClose={onClose}
        openDashboard={openDashboard}
        openStoryBuilder={openStoryBuilder}
        openFeedback={openFeedback}
        openTestCases={() => {}}
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
            {/* Coming Soon Section */}
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <CalendarClock className="w-10 h-10 text-blue-500" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                Coming Soon
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-md">
                We're working hard to bring automated test case generation to Sprintly.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 max-w-lg">
                <p className="text-sm text-blue-700 mb-1 font-medium">What to expect</p>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Generate comprehensive test cases from your user stories</li>
                  <li>Create unit, integration, and E2E test templates</li>
                  <li>Export test cases to your favorite testing frameworks</li>
                  <li>Automate test case management and tracking</li>
                </ul>
              </div>
              
              <button 
                onClick={openDashboard}
                className="mt-8 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-2 rounded-md transition-colors flex items-center"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
