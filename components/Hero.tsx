
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=2000" 
          alt="Painting Interior" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <i className="fas fa-star text-xs"></i>
            Top-Rated Houston Painters
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Transform Your <br/> 
            <span className="text-blue-500">Houston</span> Home
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
            Professional interior and exterior painting for residential and commercial properties. We deliver quality you can see and reliability you can trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:7138845029" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl shadow-blue-900/20 transition-all flex items-center justify-center gap-3">
              <i className="fas fa-phone-alt"></i>
              Get Your Free Estimate
            </a>
            <div className="flex items-center gap-4 px-4">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-slate-900" src={`https://picsum.photos/100/100?random=${i}`} alt="Customer" />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 text-sm">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <p className="text-sm text-slate-400">4.4/5 from local reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Request A Callback</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Interior Painting</option>
                <option>Exterior Painting</option>
                <option>Drywall Repair</option>
                <option>Commercial Painting</option>
              </select>
              <button className="w-full bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors">
                Send Request
              </button>
            </div>
            <p className="text-slate-400 text-xs text-center mt-4">
              We usually call back within 15 minutes during business hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
