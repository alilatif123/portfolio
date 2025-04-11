import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5'; // Close Icon
import { FaWhatsapp, FaLinkedin, FaDiscord, FaTools } from 'react-icons/fa'; // Contact & Theme Icons
// import ConstructionIllustration from '../assets/under-construction.svg'; // Import your SVG

function UnderConstructionModal() {
  const [isOpen, setIsOpen] = useState(true); // Modal is open by default
  const [currentTimePKT, setCurrentTimePKT] = useState('');

  const targetDate = new Date('2025-04-14T02:00:00+05:00'); // April 14th, 2025, 2:00 AM PKT
  const targetDateString = targetDate.toLocaleString('en-PK', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Asia/Karachi', // Pakistan Standard Time
  });

  const whatsappLink = "https://wa.me/923066298090"; // Generated WhatsApp link
  const linkedinLink = "https://www.linkedin.com/in/alilatif123/";
  const discordUsername = "alilatif123";
  const contactNumber = "+92 306 6298090";

  useEffect(() => {
    // Function to update time
    const updateTime = () => {
      const now = new Date();
      setCurrentTimePKT(
        now.toLocaleString('en-PK', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
          timeZone: 'Asia/Karachi', // Explicitly Pakistan Time
          hour12: true, // Use AM/PM
        })
      );
    };

    updateTime(); // Initial call
    const timerId = setInterval(updateTime, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(timerId);
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null; // Don't render anything if the modal is closed
  }

  // Primary color from the requested scheme
  const primaryColor = '#E6C200'; // Yellowish gold

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg p-6 mx-4 bg-white rounded-xl shadow-2xl transform transition-all duration-300 ease-out scale-100">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className={`absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors p-1 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[${primaryColor}] focus:ring-opacity-50`}
          aria-label="Close modal"
        >
          <IoClose size={28} />
        </button>

        {/* Illustration (replace with your actual SVG) */}
        <div className="flex justify-center mb-4">
           {/* Placeholder Icon if no SVG */}
           <FaTools size={60} className={`text-[${primaryColor}]`} />
           {/* If using an SVG illustration: */}
           {/* <img src={ConstructionIllustration} alt="Website Under Construction" className="w-40 h-40" /> */}
        </div>


        {/* Title */}
        <h2 className={`text-2xl font-bold text-center text-gray-800 mb-3`}>
          Website Under Construction!
        </h2>

        {/* Main Message */}
        <p className="text-center text-gray-600 mb-2">
          We're working hard to bring you an amazing new experience.
        </p>
        <p className="text-center text-gray-700 font-semibold mb-4">
          The site will be live on: <br />
          <span className={`text-[${primaryColor}] font-bold`}>{targetDateString}</span>
        </p>

        {/* Current Time Display */}
        <p className="text-center text-xs text-gray-500 mb-5 border-t pt-3">
          Current Time (Pakistan): <br /> {currentTimePKT}
        </p>

        {/* Contact Info */}
        <div className="mb-6 px-4">
            <p className="text-center text-sm font-medium text-gray-700 mb-3">For any queries, please contact:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-sm">
                {/* WhatsApp */}
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-gray-700 hover:text-[${primaryColor}] transition-colors`}>
                    <FaWhatsapp size={20} className="text-green-500" />
                    <span>{contactNumber}</span>
                </a>
                {/* LinkedIn */}
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-gray-700 hover:text-[${primaryColor}] transition-colors`}>
                    <FaLinkedin size={20} className="text-blue-700" />
                    <span>LinkedIn</span>
                </a>
                 {/* Discord */}
                 <div className={`flex items-center gap-2 text-gray-700 cursor-default`}>
                    <FaDiscord size={20} className="text-indigo-600" />
                    <span>{discordUsername}</span>
                </div>
            </div>
        </div>

        {/* Visit Anyway Button */}
        <button
          onClick={closeModal}
          className={`w-full py-3 px-4 bg-[${primaryColor}] text-black font-semibold rounded-lg shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[${primaryColor}] focus:ring-offset-2 focus:ring-offset-white transition-all duration-200`}
        >
          Still want to visit website
        </button>
      </div>
    </div>
  );
}

export default UnderConstructionModal;