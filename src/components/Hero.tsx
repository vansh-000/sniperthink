import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Phone,
  Zap,
  Play,
  Send,
  Wifi,
  Battery,
  Signal,
  MoreHorizontal,
  ChevronRight,
  Mic,
  MicOff,
  VolumeX
} from 'lucide-react';
import ChatBot from './ChatComponent';
import Call from './CallComponent';

const Hero: React.FC = () => {
  const [typingDots, setTypingDots] = useState<number>(0);
  const [activeMode, setActiveMode] = useState<'chat' | 'call'>('chat');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isCallActive, setIsCallActive] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingDots(prev => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleChatClick = () => {
    setActiveMode('chat');
    setIsCallActive(false);
  };

  const handleCallClick = () => {
    setActiveMode('call');
    setIsCallActive(true);
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    setActiveMode('chat');
  };

  const TypingIndicator: React.FC = () => (
    <div className="flex items-center space-x-1 px-4 py-3 bg-white rounded-2xl rounded-bl-md shadow-sm max-w-fit">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 bg-gray-400 rounded-full transition-all duration-300 ${i < typingDots ? 'animate-bounce' : ''
            }`}
          style={{ animationDelay: `${i * 100}ms` }}
        />
      ))}
    </div>
  );

  const ChatInterface: React.FC = () => (
    <>
      <div className="bg-white px-6 py-4 flex items-center space-x-3 border-b border-gray-100 shadow-sm">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-teal-400 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-teal-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">SniperThink AI</h3>
          <p className="text-xs text-primary font-medium">Online</p>
        </div>
        <MoreHorizontal className="w-5 h-5 text-gray-400" />
      </div>
      <div className="flex-1 px-6 py-6 space-y-4 bg-gray-50">
        <div className="flex justify-start">
          <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm max-w-xs">
            <p className="text-sm text-gray-800">Hello! How can I help you today?</p>
            <p className="text-xs text-gray-500 mt-1">9:41 AM</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-gradient-to-r from-primary to-teal-400 px-4 py-3 rounded-2xl rounded-br-md shadow-sm max-w-xs">
            <p className="text-sm text-white">I need help with Pricing</p>
            <p className="text-xs text-emerald-100 mt-1 text-right">9:42 AM</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm max-w-xs">
            <p className="text-sm text-gray-800">I'd be happy to help! Let me show you our plans...</p>
            <p className="text-xs text-gray-500 mt-1">9:42 AM</p>
          </div>
        </div>
        <div className="flex justify-start">
          <TypingIndicator />
        </div>
      </div>

      <div className="bg-white px-6 py-4 border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-3">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full bg-transparent text-sm outline-none placeholder-gray-500"
              aria-label="Type a message"
            />
          </div>
          <button className="w-10 h-10 bg-gradient-to-r from-primary to-teal-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </>
  );

  const CallInterface: React.FC = () => (
    <>
      <div className="px-6 py-8 text-center text-white">
        <div className="bg-gradient-to-r from-accent-orange to-orange-500  w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
          <Phone className=" w-8 h-8 text-white" />
        </div>
        <h3 className="font-bold text-black text-lg">SniperThink AI</h3>
        <p className="text-green-500 mt-1 text-sm">
          {isCallActive ? `Connected • 00:42` : 'Connecting...'}
        </p>
      </div>
      <div className="bg-white px-6 py-6 border-t border-gray-100">
        <div className="flex items-center justify-center space-x-6">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 transform hover:scale-105 ${isMuted
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-gray-200 hover:bg-gray-300'
              }`}
          >
            {isMuted ? (
              <MicOff className="w-5 h-5 text-white" />
            ) : (
              <Mic className="w-5 h-5 text-gray-700" />
            )}
          </button>
          <button
            onClick={handleEndCall}
            className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
          >
            <Phone className="w-6 h-6 text-white" />
          </button>
          <button className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 transform hover:scale-105">
            <VolumeX className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-b from-gray-50 to-white px-6 flex flex-col items-center mt-8">
        {isCallActive && (
          <div className="text-center mb-6">
            <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-gray-700">AI is speaking...</span>
            </div>
            <p className="text-gray-500 text-xs mt-1 max-w-sm">
              "I can help you with that right away"
            </p>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-emerald-200/30 to-green-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-accent-orange" />
                <span className="text-sm font-semibold text-primary">AI-Powered Customer Engagement</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-[#1A6262] via-[#91C499] to-[#E1A940] bg-clip-text text-transparent animate-pulse">
                  The Future of
                </span>
                <br/>
                <span className="text-gray-900">
                  Customer Interaction
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Experience next-generation AI agents that chat and call with human-like intelligence.
                Boost productivity by 300% and reduce manual effort by 85%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleChatClick}
                  className={`group px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 ${activeMode === 'chat'
                    ? 'bg-gradient-to-r from-primary to-teal-400 text-white'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-emerald-300'
                    }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat Agent</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={handleCallClick}
                  className={`group px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 ${activeMode === 'call'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-orange-300'
                    }`}
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Agent</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#trial"
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-500 text-white px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="group bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-gray-300 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 border-primary"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative flex flex-col">
                    <div className="bg-white px-6 py-3 flex justify-between items-center border-b border-gray-100 flex-shrink-0">
                      <span className="text-sm font-bold text-gray-900">9:41</span>
                      <div className="flex items-center space-x-1">
                        <Signal className="w-4 h-4 text-gray-900" />
                        <Wifi className="w-4 h-4 text-gray-900" />
                        <Battery className="w-4 h-4 text-gray-900" />
                      </div>
                    </div>
                    {activeMode === 'chat' ? <ChatInterface /> : <CallInterface />}
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-lg animate-bounce"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-lg animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {activeMode === 'chat' ? <ChatBot /> : <Call/>}
    </div>
  );
};

export default Hero;