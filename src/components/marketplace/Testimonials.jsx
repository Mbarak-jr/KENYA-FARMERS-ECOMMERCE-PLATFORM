import React from "react";

const testimonials = [
  { 
    name: "John Doe", 
    review: "This platform has transformed how I manage my farm. The resources provided are practical and have helped me increase my yield by 30% in just one season. I'm grateful for the support and knowledge I've gained.",
    location: "Nairobi, Kenya",
    rating: 5,
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    occupation: "Maize Farmer",
    farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFybSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  { 
    name: "Jane Wanjiku", 
    review: "I've been searching for quality farm tools at reasonable prices for years. This platform connected me with reliable suppliers who delivered durable equipment that has improved our efficiency tremendously.",
    location: "Eldoret, Kenya",
    rating: 4,
    image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    occupation: "Dairy Farmer",
    farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFybSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  { 
    name: "Peter Otieno", 
    review: "The customer service team went above and beyond to address my concerns. They provided personalized solutions for my small-scale farm operation and followed up consistently to ensure everything was working well.",
    location: "Kisumu, Kenya",
    rating: 5,
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    occupation: "Vegetable Grower",
    farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFybSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  { 
    name: "Mary Akinyi", 
    review: "As a woman in agriculture, I've found incredible support through this platform. The training programs have empowered me to expand my poultry business beyond what I imagined possible.",
    location: "Nakuru, Kenya",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjBmYXJtZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    occupation: "Poultry Farmer",
    farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFybSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  { 
    name: "James Mwangi", 
    review: "The market access provided through this platform has been life-changing. I can now sell my produce directly to buyers at fair prices without middlemen taking most of the profit.",
    location: "Meru, Kenya",
    rating: 5,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    occupation: "Tea Farmer",
    farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFybSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="group relative h-96 w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <img
        src={testimonial.farmImage}
        alt={testimonial.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
        <div className="absolute bottom-0 left-0 p-6 w-full">
          {/* Quote icon */}
          <svg 
            className="w-10 h-10 text-white opacity-30 mb-4" 
            fill="currentColor" 
            viewBox="0 0 32 32"
          >
            <path d="M10.722 6.419c-5.849 0-10.611 4.824-10.611 10.766 0 5.939 4.762 10.766 10.611 10.766 5.846 0 10.611-4.826 10.611-10.766 0-5.942-4.764-10.766-10.611-10.766zM14.267 21.5l-3.756 3.717-7.681-7.596 3.756-3.717 3.926 3.878 5.317-5.255 3.756 3.717-5.317 5.255zM29.505 8.634l-3.756 3.717-5.317-5.255-3.756 3.717 5.317 5.255-3.756 3.717 3.756 3.717 7.511-7.434-3.756-3.717 3.756-3.717z"></path>
          </svg>
          
          {/* Rating */}
          <StarRating rating={testimonial.rating} />
          
          {/* Review text */}
          <p className="text-white italic mb-6">
            "{testimonial.review}"
          </p>
          
          {/* Author info */}
          <div className="flex items-center">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="h-12 w-12 rounded-full border-2 border-white object-cover mr-3"
            />
            <div>
              <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
              <p className="text-gray-200 text-sm">{testimonial.occupation}</p>
              <p className="text-gray-300 text-xs">{testimonial.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Farmers Who Thrived With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our community of successful farmers across Kenya
          </p>
        </div>

        {/* Testimonials Grid - Full Width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
            Read More Stories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;