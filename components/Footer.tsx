
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <i className="fas fa-paint-roller text-white"></i>
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                MARCOS<span className="text-blue-500">PAINTING</span>
              </span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Premium residential and commercial painting services in Houston, TX. Quality craftsmanship, transparent pricing, and absolute reliability.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Interior Painting</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Exterior Painting</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Drywall Repair</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Cabinet Refinishing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <i className="fas fa-location-dot mt-1 text-blue-500"></i>
                8282 Bellaire Blvd #125, <br/>Houston, TX 77036
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone mt-1 text-blue-500"></i>
                (713) 884-5029
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-clock mt-1 text-blue-500"></i>
                Mon-Sun: 7am - 8pm
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Marcos Professional Painting. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
