import React from 'react';
import { FaHeart } from 'react-icons/fa';

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="w-full py-8 from-transparent to-[#0c0c0c] border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-gray-400 text-sm md:text-base flex items-center flex-wrap justify-center">
            © {currentYear} Ali Latif | 
            <span className="mx-1 text-gray-500">Full-Stack Developer</span> 
            <span className="flex items-center mx-1">
              Made with <FaHeart className="text-designColor mx-1 animate-pulse" size={12} /> in React
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
