
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    {role: 'assistant', text: "Hi! Need a quick estimate or have a question about our painting services in Houston? I'm here to help."}
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userText}]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{text: m.text}]
        })), {role: 'user', parts: [{text: userText}]}],
        config: {
          systemInstruction: "You are a friendly customer service assistant for 'Marcos Professional Painting' in Houston, TX. Business phone: (713) 884-5029. Address: 8282 Bellaire Blvd #125, Houston, TX 77036. Services: Interior, Exterior, Residential, Commercial, Drywall Repair. You are helpful, professional, and focus on getting the customer to call for a free estimate. Keep answers short and conversion-focused. NEVER mention you are AI.",
          temperature: 0.7,
        }
      });

      const reply = response.text || "I'm sorry, I'm having trouble connecting. Please call us at (713) 884-5029 for immediate assistance!";
      setMessages(prev => [...prev, {role: 'assistant', text: reply}]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, {role: 'assistant', text: "I apologize, but I'm having trouble responding right now. Please call us directly at (713) 884-5029!"}]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[200]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all border-4 border-white"
        >
          <i className="fas fa-comment-dots text-2xl"></i>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      ) : (
        <div className="bg-white w-[90vw] md:w-96 h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-fade-in-up">
          <div className="bg-blue-600 p-5 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fas fa-paint-roller"></i>
              </div>
              <div>
                <p className="font-bold text-sm">Marcos Painting Assistant</p>
                <p className="text-[10px] opacity-80 uppercase tracking-widest">Active Now</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-5 overflow-y-auto bg-slate-50 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm shadow-sm ${
                  m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                type="text" 
                placeholder="Ask about pricing or timing..." 
                className="flex-grow bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
