import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import SkillsRoundel from './CircularBanner';
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20  grid lg:grid-cols-2 gap-10 xl:gap-0 items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner />
     {/* <RightBanner /> */}
     <SkillsRoundel />
    </section>
  );
}

export default Banner