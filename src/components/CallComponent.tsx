import { useState } from 'react';
import { PhoneCall, Mic, Lightbulb } from 'lucide-react';

export default function Call() {
  const [inCall, setInCall] = useState(false);

  const handleStartCall = () => {
    setInCall(true);
  };

  const handleEndCall = () => {
    setInCall(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-4xl p-6 flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-full">
              <PhoneCall className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-yellow-600">SniperThink Call AI</h1>
              <p className={`text-sm text-green-500`}>
                ● {inCall ? 'In Call' : 'Ready to Call'}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-yellow-100 text-yellow-700 font-semibold text-sm px-4 py-1 rounded-full">
              Voice AI
            </div>
            {inCall &&<div className="bg-gray-100 text-gray-700 font-semibold text-sm px-4 py-1 rounded-full">
              Ready
            </div>}
          </div>
        </div>

        {/* Content */}
        {inCall ? (
          <div className="flex flex-col justify-between h-[400px] rounded-2xl bg-gray-50 p-4 shadow-inner">
            {/* Message Bubble */}
            <div className="bg-white text-gray-800 rounded-xl shadow p-4 w-fit">
              <p>Call connected! AI agent is ready to assist you.</p>
              <p className="text-xs mt-2 text-gray-500">16:18:02</p>
            </div>

            {/* Bottom Controls */}
            <div className="flex flex-col gap-3 mt-6">
              <div className="flex gap-3">
                <button className="flex-1 text-sm bg-accent-green hover:bg-green-500 text-white py-3 px-6 rounded-xl flex items-center justify-center gap-2 font-medium">
                  <Mic size={18} /> Hold to Speak
                </button>
                <button className="px-6 bg-white rounded-xl shadow">
                  <Mic className="text-gray-700" size={20} />
                </button>
                <button
                  onClick={handleEndCall}
                  className="bg-red-500 text-sm  hover:bg-red-600 text-white px-7 py-3 rounded-xl font-semibold"
                >
                  End Call
                </button>
              </div>
              <div className="text-gray-600 text-sm flex items-center gap-1">
                <Lightbulb className="text-yellow-400" size={16} />
                Hold "Hold to Speak" button and speak into your microphone. The AI will respond with voice.
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-96 text-center text-gray-500">
            <PhoneCall size={48} className="text-gray-300 mb-4" />
            <h2 className="text-lg font-medium mb-2">Start a call with our AI agent!</h2>
            <p className="text-sm">Experience natural voice conversations with advanced AI.</p>
            <button
              onClick={handleStartCall}
              className="mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 text-lg"
            >
              <PhoneCall size={20} />
              Start Call
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
