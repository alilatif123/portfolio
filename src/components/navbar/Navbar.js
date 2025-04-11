import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index"; // Make sure logo path is correct
import { navLinksdata } from '../../constants'; // Make sure navLinksdata path is correct

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Define bannerIcon style here if not defined globally or imported
  // Example: (Adjust styles as needed)
  const bannerIconStyle = "w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300";


  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-4"> {/* Added px-4 for padding */}
      <div>
        {/* Consider making the logo a link to the top/home */}
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
          <img src={logo} alt="logo" className="w-28 md:w-32 cursor-pointer" /> {/* Adjusted size slightly */}
        </Link>
      </div>
      <div>
        {/* Desktop Navigation */}
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active" // Ensure you have styles for .active class
                to={link}
                spy={true}
                smooth={true}
                offset={-70} // Adjust offset based on your sticky navbar height
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <span
          onClick={() => setShowMenu(true)} // Changed to only open
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>

        {/* Mobile Menu Overlay - Redesigned */}
        {showMenu && (
          <div
            // Overlay Container: Full screen, flex center, background, transition
            className={`w-full h-screen fixed top-0 left-0 bg-black bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} // Use fixed positioning
            // onClick={() => setShowMenu(false)} // Optional: Close menu when clicking overlay background
          >
            {/* Close Button */}
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-designColor duration-300 text-3xl cursor-pointer" // Increased size
            >
              <MdClose />
            </span>

            {/* Menu Content Container */}
            <div className="flex flex-col items-center gap-10"> {/* Increased gap */}
                {/* Logo inside menu */}
                 <Link to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setShowMenu(false)}>
                     <img className="w-32 mb-4" src={logo} alt="logo" /> {/* Centered by parent flex */}
                 </Link>

              {/* Navigation Links */}
              <ul className="flex flex-col gap-6 text-center"> {/* Increased gap */}
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-xl font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" // Increased text size
                  >
                    <Link
                      onClick={() => setShowMenu(false)} // Close menu on link click
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links Section */}
              <div className="flex flex-col items-center gap-4 mt-6"> {/* Added margin-top */}
                <h2 className="text-base uppercase font-titleFont mb-2 text-gray-400"> {/* Adjusted margin */}
                  Find me in
                </h2>
                <div className="flex gap-4">
                    {/* Applied the example style directly, replace with your 'bannerIcon' class if defined elsewhere */}
                  <span className={bannerIconStyle}>
                     <a href="YOUR_FACEBOOK_URL" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                  </span>
                  <span className={bannerIconStyle}>
                     <a href="YOUR_TWITTER_URL" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                  </span>
                  <span className={bannerIconStyle}>
                     <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;