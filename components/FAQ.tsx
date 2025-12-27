
import React, { useState } from 'react';

const FAQS = [
  {
    q: "Do you offer free estimates?",
    a: "Absolutely! We provide free, no-obligation estimates for both residential and commercial projects. Call (713) 884-5029 to schedule yours."
  },
  {
    q: "How long does a typical interior project take?",
    a: "Most single rooms or full-floor interior jobs take between 2 to 4 business days, depending on the amount of prep and drywall repair required."
  },
  {
    q: "What kind of paint do you use?",
    a: "We primarily use premium Sherwin-Williams and Benjamin Moore products for their durability and superior finish, but we can accommodate specific brand requests."
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, Marcos Professional Painting is fully insured to protect our workers and your property throughout the duration of the project."
  },
  {
    q: "How do you handle cleanup?",
    a: "We have a 'Zero-Mess Policy'. We clean the workspace daily and perform a deep clean once the project is finished, removing all tape, plastic, and debris."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Questions</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Frequently Asked</h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden transition-all hover:border-blue-200 scroll-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex justify-between items-center text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-slate-800">{faq.q}</span>
                <i className={`fas fa-chevron-down transition-transform duration-300 text-blue-500 ${openIndex === i ? 'rotate-180' : ''}`}></i>
              </button>
              {openIndex === i && (
                <div className="px-8 pb-6 bg-white animate-fade-in-down">
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-blue-50 p-10 rounded-3xl border border-blue-100 scroll-reveal">
          <h4 className="text-xl font-bold text-slate-900 mb-2">Have another question?</h4>
          <p className="text-slate-600 mb-6 text-sm">Our team is happy to answer any specifics about your unique project.</p>
          <a href="tel:7138845029" className="inline-flex items-center gap-3 text-blue-600 font-extrabold text-lg">
            <i className="fas fa-phone-alt"></i>
            (713) 884-5029
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
