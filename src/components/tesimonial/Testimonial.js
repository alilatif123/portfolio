import React, { useState, useEffect } from 'react';
import { FaStar, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Title from '../layouts/Title';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      position: "CEO",
      company: "TechVision Inc.",
      image: "/testimonial-avatar-1.jpg",
      project: "Corporate Website Redesign",
      date: "January 2025",
      rating: 5,
      content: "The team delivered exceptional results that exceeded our expectations. Their attention to detail and professional approach made the entire process seamless and efficient. We've seen a 40% increase in user engagement since launch."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "Global Brands",
      image: "/testimonial-avatar-2.jpg",
      project: "Brand Identity Development",
      date: "December 2024",
      rating: 5,
      content: "Working with this team was a pleasure from start to finish. They understood our vision immediately and translated it into a beautiful design that perfectly represents our brand values and appeals to our target audience."
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Product Manager",
      company: "Innovatech Solutions",
      image: "/testimonial-avatar-3.jpg",
      project: "Mobile App UI/UX Design",
      date: "November 2024",
      rating: 5,
      content: "The level of creativity and technical expertise demonstrated throughout our project was impressive. Our app now has an intuitive interface that our users love, resulting in significantly improved retention metrics."
    }
  ];

  // Auto-rotate testimonials with a longer interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 10000); // Increased to 10 seconds for a more professional feel
    
    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  return (
    <section id="testimonial" className="w-full py-24 font-['Poppins',sans-serif]">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <Title 
            title="CLIENT TESTIMONIALS" 
            des="What Clients Say"
          />
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div
            className={`w-full rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-opacity duration-300 ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Client Info - Fixed alignment */}
              <div className="w-full lg:w-2/5 bg-gradient-to-tr from-[#E6C200] to-[#f0d14b] p-8 lg:p-12 flex flex-col items-center justify-center text-center relative">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="mb-8 relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">{testimonials[currentIndex].name}</h3>
                    <p className="text-white text-lg font-medium mb-1">{testimonials[currentIndex].position}</p>
                    <p className="text-white/90 text-sm">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
                
                {/* Subtle decorative elements */}
                <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-white/5"></div>
                <div className="absolute -top-12 -left-12 w-36 h-36 rounded-full bg-white/5"></div>
              </div>
              
              {/* Testimonial Content */}
              <div className="w-full lg:w-3/5 p-8 lg:p-14 flex flex-col justify-between ">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-6 border-b border-gray-200">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-200 mb-1">{testimonials[currentIndex].project}</h4>
                      <p className="text-sm text-gray-400">{testimonials[currentIndex].date}</p>
                    </div>
                    <div className="flex mt-3 sm:mt-0">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} className="text-[#E6C200] text-lg md:text-xl mr-1" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative mb-8">
                    <FaQuoteRight className="absolute -top-4 -left-2 text-[#E6C200]/15 text-6xl" />
                    <p className="text-gray-300 leading-relaxed text-lg  pl-10 pt-4">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="mt-auto pt-6 flex flex-col sm:flex-row justify-between items-center">
                  {/* Navigation Dots */}
                  <div className="flex gap-2 mb-6 sm:mb-0">
                    {testimonials.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex 
                            ? 'bg-[#E6C200] w-8' 
                            : 'bg-gray-300 hover:bg-gray-400 w-2'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Navigation Arrows */}
                  <div className="flex gap-3">
                    <button 
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-[#E6C200] transition-all duration-300"
                      aria-label="Previous testimonial"
                      disabled={isTransitioning}
                    >
                      <FaChevronLeft className="text-lg" />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full bg-[#E6C200] flex items-center justify-center text-white hover:bg-[#d4b100] transition-all duration-300"
                      aria-label="Next testimonial"
                      disabled={isTransitioning}
                    >
                      <FaChevronRight className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;