import React from "react";

const testimonials = [
  { 
    name: "John Doe", 
    review: "Great platform for farmers!", 
    location: "Nairobi, Kenya" 
  },
  { 
    name: "Jane Wanjiku", 
    review: "I found quality farm tools here.", 
    location: "Eldoret, Kenya" 
  },
  { 
    name: "Peter Otieno", 
    review: "The customer service is excellent!", 
    location: "Kisumu, Kenya" 
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header with decorative elements */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Customer Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with our platform.
          </p>
        </div>
        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6"
            >
              <p className="italic text-gray-700">"{testimonial.review}"</p>
              <h3 className="font-bold text-lg mt-4 text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
        {/* View more testimonials button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
            View More Testimonials
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
