
import React from 'react';

const ServiceAreas: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Serving All of Southwest Houston</h3>
              <p className="text-slate-600 text-lg mb-8">
                We are proud to be a locally owned Houston business. We provide painting services across the following neighborhoods and beyond:
              </p>
              
              <div className="grid grid-cols-2 gap-y-4">
                {['Sharpstown', 'Bellaire', 'Southwest Houston', 'Midtown', 'Sugar Land', 'West University'].map((area, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-slate-700">
                    <i className="fas fa-check-circle text-blue-500"></i>
                    {area}
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <p className="font-bold text-slate-900 mb-2">Visit Our Shop:</p>
                <address className="not-italic text-slate-600">
                  8282 Bellaire Blvd #125,<br/>
                  Houston, TX 77036
                </address>
              </div>
            </div>

            <div className="h-[400px] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.111833772277!2d-95.5309328243572!3d29.716110275088915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c31327f6e021%3A0xc39f88d75608b8d0!2s8282%20Bellaire%20Blvd%20%23125%2C%20Houston%2C%20TX%2077036!5e0!3m2!1sen!2sus!4v1715800000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Marcos Painting Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
