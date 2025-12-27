
import React from 'react';

const StickyMobileBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-[100]">
      <div className="flex gap-2">
        <a 
          href="tel:7138845029" 
          className="flex-grow bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-2xl flex items-center justify-center gap-3 text-lg animate-bounce-slow"
        >
          <i className="fas fa-phone-alt"></i>
          CALL NOW: (713) 884-5029
        </a>
      </div>
    </div>
  );
};

export default StickyMobileBar;
