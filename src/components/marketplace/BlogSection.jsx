import React from "react";

const blogPosts = [
  {
    title: "5 Essential Tips for Modern Farming",
    excerpt: "Discover proven techniques to increase your yield by up to 40% while improving soil health for sustainable agriculture.",
    date: "March 30, 2025",
    category: "Farming Techniques",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWluZyUyMHRlY2huaXF1ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    readTime: "5 min read",
    author: "Dr. Jane Muthoni",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjBmYXJtZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Mastering Grain Storage: Best Practices",
    excerpt: "Learn professional methods to prevent wastage and maintain grain quality throughout the storage period.",
    date: "March 25, 2025",
    category: "Storage Solutions",
    image: "https://images.unsplash.com/photo-1621956912732-97ba364dc497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JhaW4lMjBzdG9yYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    readTime: "4 min read",
    author: "Samuel Kariuki",
    authorImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "The Complete Guide to Organic Farming",
    excerpt: "Understand the environmental and economic benefits of transitioning to organic farming methods.",
    date: "March 20, 2025",
    category: "Organic Farming",
    image: "https://images.unsplash.com/photo-1610720752661-65b06d6fc857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3JnYW5pYyUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    readTime: "6 min read",
    author: "Prof. James Omondi",
    authorImage: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Irrigation Methods for Arid Regions",
    excerpt: "Explore water-efficient irrigation techniques that can double your production in dry climates.",
    date: "March 15, 2025",
    category: "Water Management",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXJyaWdhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    readTime: "7 min read",
    author: "Dr. Aisha Mohammed",
    authorImage: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Pest Control Without Chemicals",
    excerpt: "Natural methods to protect your crops while maintaining organic certification and soil health.",
    date: "March 10, 2025",
    category: "Sustainable Farming",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVzdCUyMGNvbnRyb2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    readTime: "5 min read",
    author: "Grace Wambui",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjBmYXJtZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
  }
];

const BlogCard = ({ post }) => {
  return (
    <div className="group relative h-[500px] w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <img
        src={post.image}
        alt={post.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
        <div className="absolute bottom-0 left-0 p-6 w-full">
          {/* Category badge */}
          <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm font-bold rounded-full mb-3">
            {post.category}
          </span>
          
          {/* Post title */}
          <h3 className="text-2xl font-bold text-white mb-2">{post.title}</h3>
          
          {/* Post excerpt */}
          <p className="text-gray-200 mb-4">{post.excerpt}</p>
          
          {/* Meta information */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="h-8 w-8 rounded-full object-cover mr-2"
              />
              <span className="text-white text-sm">{post.author}</span>
            </div>
            <div className="text-gray-300 text-sm">
              {post.date} • {post.readTime}
            </div>
          </div>
          
          {/* Read more button */}
          <button className="w-full px-5 py-2 bg-white text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors">
            Read Article
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Farm Knowledge Hub
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Farming Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice and research to help you grow better crops and run a more profitable farm
          </p>
        </div>

        {/* Blog Grid - Full Width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
            Explore All Articles
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

export default BlogSection;