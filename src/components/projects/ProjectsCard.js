import React, { useState } from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import ProjectModal from './ProjectModal';

const ProjectsCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, shortDescription, thumbnail, technologies } = project;

  return (
    <>
      <div 
        className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-700 cursor-pointer font-['Poppins',sans-serif]"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
          <img
            className="w-full h-60 object-cover group-hover:scale-110 duration-300"
            src={thumbnail}
            alt={title}
          />
        </div>
        <div className="w-full mt-5 flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base uppercase text-designColor font-medium tracking-wider">
                {title}
              </h3>
              <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                {project.githubLink && (
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 hover:transform hover:scale-110"
                  >
                    <BsGithub />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 hover:transform hover:scale-110"
                  >
                    <FaGlobe />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 text-gray-400">
              {shortDescription}
            </p>
            
            {/* Tech preview - just showing the first few */}
            <div className="flex flex-wrap gap-2 mt-4">
              {technologies && technologies.slice(0, 3).map((tech, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-1 bg-black bg-opacity-60 px-2 py-1 rounded-full"
                >
                  <span className="text-sm text-designColor">{tech.icon}</span>
                </div>
              ))}
              {technologies && technologies.length > 3 && (
                <div className="flex items-center px-2 py-1 rounded-full bg-black bg-opacity-40">
                  <span className="text-xs text-gray-400">+{technologies.length - 3} more</span>
                </div>
              )}
            </div>
            
            <div className="mt-5">
              <button
                className="text-sm text-designColor flex items-center gap-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectsCard;