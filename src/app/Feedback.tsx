import { useState } from 'react';
import { Send } from 'lucide-react';
import SideNav from './components/SideNav';

interface FeedbackProps {
  onClose?: () => void;
  openDashboard?: () => void;
  openStoryBuilder?: () => void;
}

export default function Feedback({ onClose, openDashboard, openStoryBuilder }: FeedbackProps) {
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackType, setFeedbackType] = useState('suggestion');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this feedback to a server
    console.log('Feedback submitted:', { feedbackType, feedbackText, name, email });
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFeedbackText('');
      setFeedbackType('suggestion');
      setName('');
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex overflow-hidden">
      {/* Left Sidebar */}
      <SideNav 
        activeScreen="feedback"
        onClose={onClose}
        openDashboard={openDashboard}
        openStoryBuilder={openStoryBuilder}
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
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                We'd Love Your Feedback ❤️
              </h1>
              <p className="text-sm text-gray-500 mb-5">
                Your thoughts help us improve Sprintly and build better features for you.
              </p>
            </div>

            {isSubmitted ? (
              <div className="animate-fade-in">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  We appreciate you taking the time to share your feedback with us.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="">
                {/* Feedback Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Feedback
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['suggestion', 'issue', 'praise'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        className={`py-2 px-4 rounded-md text-sm font-medium border ${
                          feedbackType === type
                            ? 'bg-blue-50 border-blue-300 text-blue-700'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setFeedbackType(type)}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Feedback Text */}
                <div className="mb-6">
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Feedback
                  </label>
                  <textarea
                    id="feedback"
                    rows={5}
                    placeholder="Please share your thoughts..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    required
                  />
                </div>
                
                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Feedback
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
