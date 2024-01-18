"use client"
import React, { useRef } from 'react'
import CartProject from './CartProject';
import { motion,useInView } from "framer-motion";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const projectsData = [
        {
          id: 1,
          title: "Next js Portfolio Website",
          description: "A Next.js Portfolio Website is a dynamic and efficient web platform built using the Next.js framework",
          image: "/images/projects/project2.jpg",
          gitUrl: "https://github.com/Sankugarud/MyPortfolio",
          previewUrl: "https://spiffy-biscochitos-e79f5b.netlify.app/",
        },
        {
          id: 2,
          title: "Crypto React Application",
          description: "A Crypto React Application is a web-based platform developed with React.js, providing real-time information and features related to cryptocurrencies, such as live price tracking, charts.",
          image: "/images/projects/project3.jpg",
          gitUrl: "https://github.com/Sankugarud/crypto-tracker-react",
          previewUrl: "https://zingy-flan-e2580b.netlify.app/",
        },
        {
          id: 3,
          title: "Full Stack E-commerce Website",
          description: "A MERN Stack E-commerce Website with admin panel leverages MongoDB, Express.js, React.js, and Node.js to create a feature-rich online shopping experience, complemented by an intuitive admin interface for efficient store management.",
          image: "/images/projects/project4.jpg",
          gitUrl: "https://github.com/Sankugarud/fullStackEcomm",
          previewUrl: "https://shiny-fenglisu-bbdc8d.netlify.app/",
        },
        {
          id: 4,
          title: "Full Stack Medicine Reminder",
          description: "A MERN Stack Medicine Reminder is a web application utilizing MongoDB, Express.js, React.js, and Node.js to help users manage and receive timely reminders for their medication schedule.",
          image: "/images/projects/project5.jpg",
          gitUrl: "https://github.com/Sankugarud/reminderFrontEnd",
          previewUrl: "https://resonant-moxie-ec7166.netlify.app/",
        },
        {
          id: 5,
          title: "React Netflix clone",
          description: "A React Netflix Clone is a web application replicating the Netflix user interface, built using React.js to showcase movie and TV show content with responsive design and interactive features.",
          image: "/images/projects/project6.jpg",
          gitUrl: "https://github.com/Sankugarud/netflix-clone",
          previewUrl: "https://illustrious-elf-bef8d8.netlify.app/",
        },
        {
          id: 6,
          title: "React Current Location Tracker",
          description: "A React Current Location Tracker is a web application developed with React.js to display and track the real-time geographical location of a user.",
          image: "/images/projects/project1.jpg",
          gitUrl: "https://github.com/Sankugarud/locationapp",
          previewUrl: "https://stellular-bienenstitch-4aaae3.netlify.app/ipfolder/index.html",
        },
      ];

      const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };
  return (
    <div>
            <div>
                <h1 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Project</h1>
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData.map((project, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <CartProject
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.li>
            ))}
          </ul>
      
    </div>
  )
}

export default Projects
