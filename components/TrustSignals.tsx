
import React from 'react';

const TrustSignals: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          <div className="flex items-center gap-3">
            <i className="fas fa-shield-halved text-2xl text-slate-400"></i>
            <span className="font-bold text-slate-500 uppercase tracking-widest text-xs">Fully Insured</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="fas fa-location-dot text-2xl text-slate-400"></i>
            <span className="font-bold text-slate-500 uppercase tracking-widest text-xs">Houston Local</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="fas fa-calendar-check text-2xl text-slate-400"></i>
            <span className="font-bold text-slate-500 uppercase tracking-widest text-xs">Punctual Service</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="fas fa-check-double text-2xl text-slate-400"></i>
            <span className="font-bold text-slate-500 uppercase tracking-widest text-xs">Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
