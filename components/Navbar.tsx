
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <i className="fas fa-paint-roller text-white text-xl"></i>
          </div>
          <span className={`text-xl font-extrabold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            MARCOS<span className="text-blue-500">PAINTING</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-semibold">
          <a href="#services" className={`${scrolled ? 'text-slate-600' : 'text-white'} hover:text-blue-500 transition-colors`}>Services</a>
          <a href="#why-us" className={`${scrolled ? 'text-slate-600' : 'text-white'} hover:text-blue-500 transition-colors`}>Why Us</a>
          <a href="#faq" className={`${scrolled ? 'text-slate-600' : 'text-white'} hover:text-blue-500 transition-colors`}>FAQ</a>
          <a href="tel:7138845029" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full transition-all shadow-lg hover:shadow-blue-200 flex items-center gap-2">
            <i className="fas fa-phone-alt"></i>
            (713) 884-5029
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
