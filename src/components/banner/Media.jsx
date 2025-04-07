import React from 'react'
import {FaLinkedinIn, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiUpwork, SiPostgresql } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
            <span className="bannerIcon">
            <SiUpwork />
            </span>
           
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
            <FaNodeJs />
            </span>
            <span className="bannerIcon">
            <SiPostgresql />
            </span>
          </div>
        </div> */}
      </div>
  )
}

export default Media