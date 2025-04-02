import React from "react";

const blogPosts = [
  {
    title: "5 Tips for Better Farming",
    excerpt: "Learn the best practices for increasing your yield and improving soil health.",
    date: "March 30, 2025",
    category: "Techniques",
    image: "https://images.unsplash.com/photo-1718119700306-3df3efc606ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDUlMjBUaXBzJTIwZm9yJTIwQmV0dGVyJTIwRmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D",
    readTime: "5 min read"
  },
  {
    title: "How to Store Grains Properly",
    excerpt: "Avoid wastage and preserve quality by following these professional storage methods.",
    date: "March 25, 2025",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1621956912732-97ba364dc497?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SG93JTIwdG8lMjBTdG9yZSUyMEdyYWlucyUyMFByb3Blcmx5fGVufDB8fDB8fHww",
    readTime: "4 min read"
  },
  {
    title: "Organic Farming Benefits",
    excerpt: "Discover the environmental and economic advantages of transitioning to organic methods.",
    date: "March 20, 2025",
    category: "Organic",
    image: "https://images.unsplash.com/photo-1610720752661-65b06d6fc857?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8T3JnYW5pYyUyMEZhcm1pbmclMjBCZW5lZml0c3xlbnwwfHwwfHx8MA%3D%3D",
    readTime: "6 min read"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header with decorative elements */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Our Knowledge Base
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from Our Blog</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Expert insights and practical advice to help you succeed in sustainable farming
          </p>
        </div>

        {/* Blog grid with enhanced cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Featured image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="font-bold text-xl mb-3 text-gray-800 hover:text-green-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <button className="inline-flex items-center text-green-600 font-medium hover:text-green-800 transition-colors">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 font-bold rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300">
            View All Articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;