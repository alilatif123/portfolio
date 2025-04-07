import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full Stack Developer.", "MERN Expert.","React.js Developer.","Node.js Developer.","Next.js Developer.","Svelte Developer.","PostgreSQL Expert.","MongoDB Expert.",],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full  flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Solving problems with code</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ali Latif</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="rgb(230 194 0 / var(--tw-text-opacity, 1))"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        With over 4+ years of experience as a full-stack developer, I'm passionate about building practical web solutions. I enjoy the process of bringing ideas to life online and am always ready to take on new and interesting challenges.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner