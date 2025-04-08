import React from 'react';
import ProjectsCard from './ProjectsCard';
import { FaReact, FaNodeJs, FaDatabase, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiTypescript, SiFirebase, SiRedux, SiAwslambda } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import Title from '../layouts/Title';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      shortDescription: "A full-featured online shopping platform with user authentication and payment.",
      description: "A comprehensive e-commerce solution that allows businesses to showcase their products, manage inventory, and process payments. Features include user authentication, product categorization, shopping cart, secure checkout, and order tracking.",
      thumbnail: "/images/project1-thumb.jpg",
      images: [
        "/images/project1-slide1.jpg",
        "/images/project1-slide2.jpg",
        "/images/project1-slide3.jpg",
      ],
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "REST API", icon: <TbApi /> }
      ],
      features: [
        "User authentication and profile management",
        "Product search and filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment processing",
        "Order history and tracking",
        "Admin dashboard for inventory management"
      ],
      testimonial: {
        text: "The e-commerce platform completely transformed our online business. Sales increased by 40% in the first quarter after launch.",
        name: "Sarah Johnson",
        position: "CEO, Fashion Boutique",
        avatar: "/images/testimonial1.jpg"
      },
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      liveLink: "https://example-ecommerce.com"
    },
    {
      id: 2,
      title: "Task Management App",
      shortDescription: "Productivity application for organizing personal and team tasks.",
      description: "A powerful task management application designed to help individuals and teams organize their workflow, set priorities, and meet deadlines. The app includes features like task creation, assignment, categorization, progress tracking, and notifications.",
      thumbnail: "/images/project2-thumb.jpg",
      images: [
        "/images/project2-slide1.jpg",
        "/images/project2-slide2.jpg"
      ],
      technologies: [
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> }
      ],
      features: [
        "Task creation and assignment",
        "Project organization and categorization",
        "Due date tracking and reminders",
        "Team collaboration features",
        "Progress visualization with charts",
        "Mobile-responsive design"
      ],
      testimonial: {
        text: "This task management tool has significantly improved our team's productivity. The intuitive interface makes it easy for everyone to stay organized.",
        name: "Michael Chen",
        position: "Project Manager, Tech Innovations",
        avatar: "/images/testimonial2.jpg"
      },
      githubLink: "https://github.com/yourusername/task-manager",
      liveLink: "https://taskmgr-example.com"
    },
    {
      id: 3,
      title: "Cloud Microservices",
      shortDescription: "Scalable cloud-based microservices architecture for enterprise applications.",
      description: "A serverless microservices platform designed for enterprise applications with high availability and scalability requirements. The system employs containerization and serverless functions to process workloads efficiently.",
      thumbnail: "/images/project3-thumb.jpg",
      images: [
        "/images/project3-slide1.jpg",
        "/images/project3-slide2.jpg",
        "/images/project3-slide3.jpg",
        "/images/project3-slide4.jpg"
      ],
      technologies: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS Lambda", icon: <SiAwslambda /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <FaDatabase /> }
      ],
      features: [
        "Containerized microservices architecture",
        "Serverless functions for on-demand processing",
        "Auto-scaling capabilities",
        "Multi-database integration",
        "Comprehensive logging and monitoring",
        "CI/CD pipeline integration"
      ],
      testimonial: {
        text: "The microservices architecture delivered exceptional performance under heavy load. Our system uptime improved to 99.9% and operational costs decreased by 30%.",
        name: "Alex Rodriguez",
        position: "CTO, Enterprise Solutions Inc.",
        avatar: "/images/testimonial3.jpg"
      },
      githubLink: "https://github.com/yourusername/cloud-microservices",
      liveLink: "https://microservices-demo.example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-bodyColor">
      <div className="container mx-auto px-4">
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check out some of the projects I've built"
          des="My Recent Projects"
        />
      </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;