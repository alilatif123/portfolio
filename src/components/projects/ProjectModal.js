import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  
  // Handle image navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };
  
  if (!isOpen || !project) return null;
  
  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 font-['Poppins',sans-serif]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-b from-gray-900 to-bodyColor rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-300 hover:text-designColor z-50 bg-black bg-opacity-50 rounded-full p-2"
          >
            <IoClose className="text-2xl" />
          </button>
          
          {/* Image slider */}
          <div className="relative h-64 md:h-96 w-full">
            {project.images && project.images.length > 0 && (
              <>
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover rounded-t-xl"
                />
                
                {/* Image navigation buttons */}
                {project.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
                    >
                      <IoIosArrowBack className="text-xl" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
                    >
                      <IoIosArrowForward className="text-xl" />
                    </button>
                    
                    {/* Image pagination dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full ${
                            index === currentImageIndex ? 'bg-designColor' : 'bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Project title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
              {project.title}
            </h2>
            
            {/* Description */}
            <div className="mb-6">
              <h3 className="text-sm uppercase tracking-wider text-designColor mb-2">Description</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
            
            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-sm uppercase tracking-wider text-designColor mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies && project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2 bg-black bg-opacity-40 px-3 py-2 rounded-lg">
                    <span className="text-designColor text-lg">{tech.icon}</span>
                    <span className="text-sm text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Key Features */}
            <div className="mb-6">
              <h3 className="text-sm uppercase tracking-wider text-designColor mb-3">Key Features</h3>
              <ul className="space-y-2 text-gray-300">
                {project.features && project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-designColor mr-2 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Client Testimonial */}
            {project.testimonial && (
              <div className="mb-4">
                <h3 className="text-sm uppercase tracking-wider text-designColor mb-3">Client Testimonial</h3>
                <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                  <p className="text-gray-300 italic">"{project.testimonial.text}"</p>
                  <div className="mt-3 flex items-center">
                    {project.testimonial.avatar && (
                      <img 
                        src={project.testimonial.avatar} 
                        alt={project.testimonial.name}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                    )}
                    <div>
                      <p className="text-designColor font-medium">{project.testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{project.testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Links */}
            <div className="pt-4 flex gap-4 border-t border-gray-700 mt-6">
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-designColor hover:bg-opacity-80 text-black font-medium px-6 py-2 rounded-lg flex items-center gap-2 transition-all"
                >
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-2 rounded-lg flex items-center gap-2 transition-all"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;