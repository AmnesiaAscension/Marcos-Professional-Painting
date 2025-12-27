
import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 opacity-5 -skew-x-12 translate-x-24"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal">
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Why Marcos Professional Painting?</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Painters Who Actually <br/> Show Up On Time.</h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center">
                  <i className="fas fa-clock text-blue-400 text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Punctuality Guaranteed</h4>
                  <p className="text-slate-400">We respect your time. If we say we'll be there at 8 AM, we'll be there at 8 AM.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center">
                  <i className="fas fa-brush text-blue-400 text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Meticulous Surface Prep</h4>
                  <p className="text-slate-400">The secret to a great paint job is the prep. We sand, patch, and prime every inch.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center">
                  <i className="fas fa-broom text-blue-400 text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Zero-Mess Policy</h4>
                  <p className="text-slate-400">We treat your home like our own. Daily cleanup ensures your life isn't disrupted.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative scroll-reveal">
            <div className="bg-slate-800 rounded-3xl p-2 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1595844730298-b960ff98fee0?auto=format&fit=crop&q=80&w=1000" 
                alt="Painter at work" 
                className="rounded-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 p-8 rounded-3xl shadow-2xl">
              <div className="text-4xl font-extrabold mb-1">4.4★</div>
              <div className="text-sm font-bold opacity-80 uppercase tracking-widest">Google Rating</div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-24 h-24 grid grid-cols-4 gap-2 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-blue-500 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
