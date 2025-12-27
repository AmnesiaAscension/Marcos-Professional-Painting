
import React from 'react';

const REVIEWS = [
  {
    name: 'David R.',
    location: 'Houston, TX',
    text: 'Marcos and his team were fantastic. They painted my entire downstairs in two days and the lines are perfect. Highly recommended for any interior work!',
    rating: 5
  },
  {
    name: 'Maria S.',
    location: 'Bellaire, TX',
    text: 'Reliable and professional. They fixed a major hole in my drywall and you can\'t even tell it was ever there. Very clean workers.',
    rating: 4
  },
  {
    name: 'Kevin L.',
    location: 'Sharpstown',
    text: 'Fair pricing and great communication. The exterior of our house looks brand new. Best painters we have used in Houston so far.',
    rating: 5
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Reviews</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-4">What Houston Neighbors Say</h3>
          <div className="flex justify-center items-center gap-2 text-yellow-400 text-xl mb-4">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt text-gray-300"></i>
            <span className="text-slate-900 font-bold ml-2">4.4 / 5.0</span>
          </div>
          <p className="text-slate-500">Based on Google Reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-lg transition-all scroll-reveal" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="flex text-yellow-400 mb-6 text-sm">
                {[...Array(review.rating)].map((_, star) => (
                  <i key={star} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
