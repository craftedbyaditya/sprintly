import { Check, X, AlertTriangle, Zap, ArrowLeft, Menu } from 'lucide-react';

interface PricingProps {
  onClose?: () => void;
  openDashboard?: () => void;
}

export default function Pricing({  }: PricingProps) {
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Main content */}
      <div className="w-full overflow-auto">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <button onClick={() => window.location.href = '/'} className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-gradient-to-r from-blue-600 to-blue-500 rounded flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <span className="text-xl font-bold text-gray-900">Sprintly</span>
                </button>
              </div>
              
              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                  <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
                  <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Reviews</a>
                </div>
              </div>

              <div className="md:hidden">
                <button onClick={() => window.location.href = '/'} className="text-gray-600 hover:text-gray-900">
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Removed back button section */}
          
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="w-full max-w-6xl mx-auto">
            {/* Pricing Header */}
            <div className="mb-8">
              <div className="text-center">
                <div className="bg-blue-50 text-blue-700 py-2 px-4 rounded-full inline-block text-sm font-medium mb-4">
                  Start free, upgrade when you're ready
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Simple, transparent pricing
                </h1>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                  Choose what best suits you. No hidden fees, no contracts.
                </p>
              </div>
            </div>
            
            {/* Pricing Cards - More minimal */}
            <div className="grid md:grid-cols-2 gap-6 mb-12 mx-auto">
              {/* Free Plan */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded mb-3 inline-block">
                    FREE
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Get Started, Free Forever</h2>
                  <div className="flex items-baseline mb-2">
                    <span className="text-2xl font-bold">$0</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Ideal for individuals trying it out or working on one-off tasks.</p>
                  <button className="w-full py-2 px-4 bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 rounded font-medium transition-colors text-sm">
                    Try it Free
                  </button>
                </div>
                <div className="p-5 bg-gray-50">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5"><Check className="w-4 h-4" /></span>
                      <span className="text-gray-700">10 user stories/month</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5"><Check className="w-4 h-4" /></span>
                      <span className="text-gray-700">1 retweak per story</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5"><Check className="w-4 h-4" /></span>
                      <span className="text-gray-700">Manual copy only</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-0.5"><AlertTriangle className="w-4 h-4" /></span>
                      <span className="text-gray-700">Local history: Last 3 stories</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-0.5"><X className="w-4 h-4" /></span>
                      <span className="text-gray-500">No tool integrations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-0.5"><X className="w-4 h-4" /></span>
                      <span className="text-gray-500">No test case generation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-0.5"><X className="w-4 h-4" /></span>
                      <span className="text-gray-500">No backend storage</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Pro Plan */}
              <div className="bg-white rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded mb-3 inline-block">
                    PRO
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">For Power Users</h2>
                  <div className="flex items-baseline mb-2">
                    <span className="text-2xl font-bold">$5</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">For product folks, QAs, and devs who need speed, scale, and integrations.</p>
                  <button className="w-full py-2 px-4 bg-blue-600 text-white hover:bg-blue-700 rounded font-medium transition-colors text-sm">
                    Go Pro – Just $5/month
                  </button>
                </div>
                <div className="p-5 bg-blue-50">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5"><Check className="w-4 h-4" /></span>
                      <span className="text-gray-700">Unlimited user stories</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5"><Check className="w-4 h-4" /></span>
                      <span className="text-gray-700">Unlimited retweaks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5"><Check className="w-4 h-4" /></span>
                      <span className="text-gray-700">Export to Jira, Notion, ClickUp & more</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5"><Check className="w-4 h-4" /></span>
                      <span className="text-gray-700">Test case generation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5"><Check className="w-4 h-4" /></span>
                      <span className="text-gray-700">Full project history</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5"><Check className="w-4 h-4" /></span>
                      <span className="text-gray-700">Priority access to new features</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* No Feature Comparison as requested */}
            
            {/* No testimonials section as requested */}
            
            {/* FAQ section removed as requested */}
            
            {/* CTA - Simplified */}
            <div className="mb-8 text-center">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Ready to get started?</h2>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => window.location.href = '/'} className="px-4 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors font-medium text-sm">
                  Start with Free
                </button>
                <button onClick={() => window.location.href = '/'} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium text-sm flex items-center">
                  <Zap className="w-3 h-3 mr-1" />
                  Go Pro Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* No footer needed as other screens don't have one */}
    </div>
  );
}
