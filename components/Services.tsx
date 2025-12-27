
import React from 'react';

const SERVICES = [
  {
    title: 'Interior Painting',
    desc: 'From bedrooms to custom cabinetry, we use premium low-VOC paints for a flawless finish.',
    icon: 'fa-couch',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Exterior Painting',
    desc: 'Weather-ready protection that withstands the Houston humidity and boosts curb appeal.',
    icon: 'fa-house',
    image: 'https://images.unsplash.com/photo-1518605336347-4850d42177cc?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Commercial Projects',
    desc: 'Large-scale painting for offices, retail, and warehouses. Efficient and on-schedule.',
    icon: 'fa-building',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Drywall Repair',
    desc: 'Patching, sanding, and texturing. We fix holes and water damage before we paint.',
    icon: 'fa-hammer',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 italic-shadow">Comprehensive Painting Solutions</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Professional results for every surface. We handle the prep, the painting, and the cleanup.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 scroll-reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="relative h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-blue-600 p-3 rounded-xl shadow-lg">
                  <i className={`fas ${service.icon} text-white text-xl`}></i>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h4>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                <a href="tel:7138845029" className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Get Pricing <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
