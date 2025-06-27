import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

const responses = [
  "Great! I've noted your preferences. Is there anything else you'd like to know?",
  "Sure, let me look into that for you.",
  "I'm here to help you anytime.",
  "Thank you for your message. We're processing it.",
  "Interesting! Let's explore that further."
];

function getTime() {
  return new Date().toLocaleTimeString('en-GB');
}

export default function ChatBot() {
  const [messages, setMessages] = useState<
    { type: 'user' | 'bot'; text: string; time: string }[]
  >([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const time = getTime();
    const userMessage = { type: 'user', text: input.trim(), time };
    const botMessage = {
      type: 'bot',
      text: responses[Math.floor(Math.random() * responses.length)],
      time
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-4xl p-6 flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-green-400 to-teal-500 p-3 rounded-full">
              <MessageCircle className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-teal-800">SniperThink Chat AI</h1>
              <p className="text-green-500 text-sm">● Online & Ready</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-green-100 text-green-700 font-semibold text-sm px-4 py-1 rounded-full">
              Text AI
            </div>
            {messages.length > 0 && (
              <div className="bg-gray-100 text-gray-700 font-semibold text-sm px-4 py-1 rounded-full">
                Responding
              </div>
            )}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex flex-col justify-between h-[400px] rounded-2xl bg-gray-50 p-4 shadow-inner overflow-y-auto space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
              <MessageCircle size={48} className="text-gray-300 mb-4" />
              <h2 className="text-lg font-medium mb-2">Start a conversation with our AI agent!</h2>
              <p className="text-sm">Try asking about our features, pricing, or schedule a demo.</p>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`w-fit max-w-md rounded-xl px-4 py-2 shadow text-sm break-words ${msg.type === 'user'
                    ? 'ml-auto bg-gradient-to-br from-teal-500 to-green-400 text-white text-right'
                    : 'bg-white text-gray-800'
                  }`}
              >
                <p>{msg.text}</p>
                <p
                  className={`text-xs mt-1 ${msg.type === 'user' ? 'text-white/70' : 'text-gray-500'
                    }`}
                >
                  {msg.time}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Input Area */}
        <div className="flex items-center gap-3 mt-2">
          <input
            type="text"
            placeholder="Type your message here ..."
            className="flex-1 border border-teal-500 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 text-sm"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="p-3 rounded-full bg-gradient-to-br from-teal-500 to-green-400 text-white hover:opacity-90"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
