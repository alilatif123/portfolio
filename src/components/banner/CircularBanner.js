import { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaStripe } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiBootstrap, SiExpress, SiSocketdotio, SiPostgresql, SiPrisma, SiMongodb, SiRedux, SiAmazonaws, SiNetlify, SiHeroku, SiChartdotjs } from 'react-icons/si';
import { TbBrandNextjs, TbBrandSvelte, TbApi, TbBrandGraphql } from 'react-icons/tb';
import { BiGitBranch } from 'react-icons/bi';
import { GrActions } from 'react-icons/gr';
import { IoMdGitNetwork } from 'react-icons/io';
import { MdSecurity } from 'react-icons/md';
import { BsMap } from 'react-icons/bs';

export default function SkillsRoundel() {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    setAnimateIn(false);
    const timer = setTimeout(() => setAnimateIn(true), 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);
  
  const goldColor = '#E6C200';
  
  const skillCategories = [
    {
      name: 'Frontend',
      icon: <FaReact className="w-6 h-6" />,
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Svelte', icon: <TbBrandSvelte /> },
        { name: 'Next.js', icon: <TbBrandNextjs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> }
      ]
    },
    {
      name: 'Backend',
      icon: <FaNodeJs className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'REST API', icon: <TbApi /> },
        { name: 'GraphQL', icon: <TbBrandGraphql /> },
        { name: 'Socket.io', icon: <SiSocketdotio /> }
      ]
    },
    {
      name: 'Database',
      icon: <FaDatabase className="w-6 h-6" />,
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Prisma', icon: <SiPrisma /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Mongoose', icon: <IoMdGitNetwork /> },
        { name: 'Supabase', icon: <FaDatabase /> }
      ]
    },
    {
      name: 'State',
      icon: <SiRedux className="w-6 h-6" />,
      skills: [
        { name: 'Redux Toolkit', icon: <SiRedux /> },
        { name: 'Context API', icon: <IoMdGitNetwork /> },
        { name: 'React Query', icon: <IoMdGitNetwork /> }
      ]
    },
    {
      name: 'DevOps',
      icon: <SiAmazonaws className="w-6 h-6" />,
      skills: [
        { name: 'AWS (EC2, S3)', icon: <SiAmazonaws /> },
        { name: 'Netlify', icon: <SiNetlify /> },
        { name: 'Heroku', icon: <SiHeroku /> },
        { name: 'PM2', icon: <IoMdGitNetwork /> },
        { name: 'Git', icon: <BiGitBranch /> },
        { name: 'GitHub Actions', icon: <GrActions /> }
      ]
    },
    {
      name: 'Other',
      icon: <FaGithub className="w-6 h-6" />,
      skills: [
        { name: 'JWT', icon: <MdSecurity /> },
        { name: 'OAuth', icon: <MdSecurity /> },
        { name: 'Stripe', icon: <FaStripe /> },
        { name: 'Razorpay', icon: <FaStripe /> },
        { name: 'OneSignal', icon: <IoMdGitNetwork /> },
        { name: 'Chart.js', icon: <SiChartdotjs /> },
        { name: 'Recharts', icon: <SiChartdotjs /> },
        { name: 'Leaflet.js', icon: <BsMap /> }
      ]
    }
  ];

  // Get skills to display based on active category
  const visibleSkills = 
//   activeCategory === 'all'
//     ? skillCategories.flatMap(category => category.skills)
//     : 
    skillCategories.find(category => category.name === activeCategory)?.skills || [];

  return (
    <div className="hidden w-full lg:block pt-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {/* <button
            onClick={() => setActiveCategory('all')}
            className={`px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300 ease-in-out
              ${activeCategory === 'all' 
              ? 'text-gray-900 scale-105' 
              : 'text-white hover:text-[#E6C200] hover:scale-105'}`}
            style={{ 
              backgroundColor: activeCategory === 'all' ? goldColor : 'transparent',
              borderWidth: '2px',
              borderColor: goldColor,
            }}
          >
            All Skills
          </button> */}
          
          {skillCategories.map(category => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300 ease-in-out flex items-center gap-3
                ${activeCategory === category.name 
                ? 'text-gray-900 scale-105' 
                : 'text-white hover:text-[#E6C200] hover:scale-105'}`}
              style={{ 
                backgroundColor: activeCategory === category.name ? goldColor : 'transparent',
                borderWidth: '2px',
                borderColor: goldColor,
              }}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills Visualization Area */}
        <div className="relative w-full h-[28rem] mt-[-60px] ">
          {/* Center Circle */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full flex items-center justify-center z-20 border-4 shadow-xl"
            style={{ backgroundColor: '#1a1a1a', borderColor: goldColor }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{activeCategory === 'all' ? 'Skills' : activeCategory}</div>
              {/* <div className="text-base text-white opacity-80">{visibleSkills.length} Technologies</div> */}
            </div>
          </div>
          
          {/* Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-dashed z-10 border-opacity-30 animate-spin-slow" style={{ borderColor: goldColor }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-dashed z-10 border-opacity-20 animate-spin-slower" style={{ borderColor: goldColor }}></div>
          
          {/* Skills */}
          {visibleSkills.map((skill, index) => {
            const total = visibleSkills.length;
            const angleStep = (2 * Math.PI) / total;
            const angle = index * angleStep;
            
            const radius = total <= 8 ? 150 : total <= 12 ? 180 : 210;
            
            const x = 50 + 35 * Math.cos(angle);
            const y = 50 + 35 * Math.sin(angle);
            
            return (
              <div
                key={skill.name}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-5 py-3 rounded-xl shadow-2xl z-10
                  ${animateIn ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  backgroundColor: '#1a1a1a',
                  border: `2px solid ${goldColor}`,
                  transitionDelay: `${index * 50}ms`,
                  transform: `translate(-50%, -50%) ${animateIn ? 'scale(1)' : 'scale(0.8)'}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#E6C200] text-xl">{skill.icon}</span>
                  <span className="text-white font-medium text-base whitespace-nowrap">{skill.name}</span>
                </div>
              </div>
            );
          })}
          
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
            {visibleSkills.map((skill, index) => {
              const total = visibleSkills.length;
              const angleStep = (2 * Math.PI) / total;
              const angle = index * angleStep;
              
              const x = 50 + 35 * Math.cos(angle);
              const y = 50 + 35 * Math.sin(angle);
              
              const viewportWidth = 100;
              const viewportHeight = 100;
              
              const centerX = viewportWidth / 2;
              const centerY = viewportHeight / 2;
              
              return (
                <line
                  key={`line-${skill.name}`}
                  x1={`${centerX}%`}
                  y1={`${centerY}%`}
                  x2={`${x}%`}
                  y2={`${y}%`}
                  stroke={goldColor}
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  strokeDasharray="4 4"
                  className={`${animateIn ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}