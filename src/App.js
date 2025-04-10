import React, { useEffect, useState } from "react";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Testimonial from "./components/tesimonial/Testimonial";
import SocialButtons from "./SocialButtons";
import ServiceInquiryForm from "./components/contact/ServiceInquiryForm";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Add custom cursor and scrollbar styles to document
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        cursor: none !important; /* Ensure default cursor is always hidden */
      }
      * {
        cursor: none !important; /* Ensure default cursor is always hidden */
      }

      /* Custom scrollbar styling */
      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: #ECCB2F;
        border-radius: 10px;
        transition: all 0.3s ease;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #d9b929;
      }
    `;
    document.head.appendChild(style);

    // Track mouse position
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Fixed handleMouseOver function to handle different className types
    const handleMouseOver = (e) => {
      const target = e.target;
      const tagName = target.tagName.toLowerCase();
      const role = target.getAttribute('role');
      const className = typeof target.className === 'string' ? target.className : '';

      if (tagName === 'a' ||
          tagName === 'button' ||
          role === 'button' ||
          className.includes('clickable')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.head.removeChild(style);
    };
  }, []);

  // Custom cursor component
  const CustomCursor = ({ position, isHovering }) => (
    <div
      className="fixed z-[9999] pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.2s, height 0.2s'
      }}
    >
      <div className="relative">
        {/* Outer ring - expands on hover */}
        <div
          style={{
            width: isHovering ? '40px' : '30px',
            height: isHovering ? '40px' : '30px',
            borderColor: '#ECCB2F',
            transition: 'all 0.2s ease'
          }}
          className="rounded-full border-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        ></div>

        {/* Inner dot */}
        <div
          style={{ backgroundColor: '#ECCB2F' }}
          className="w-2 h-2 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        ></div>

        {/* Show dot trails on movement */}
        <div
          style={{
            backgroundColor: '#ECCB2F',
            opacity: 0.3
          }}
          className="w-1 h-1 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -ml-3"
        ></div>
        <div
          style={{
            backgroundColor: '#ECCB2F',
            opacity: 0.2
          }}
          className="w-1 h-1 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -ml-5"
        ></div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <CustomCursor position={mousePosition} isHovering={isHovering} />
      <Navbar />
      <SocialButtons />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Testimonial />
        <ServiceInquiryForm />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;