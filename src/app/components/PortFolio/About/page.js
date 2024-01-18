'use client'
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import computer from '../../../../../public/images/computer.png';
import { motion } from "framer-motion";

import 'react-tabs/style/react-tabs.css'; 

const About = () => {
  return (
    <div className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div>
        <motion.div
            className='iphone'
            initial={{ y: 10 }}
            animate={{ y: -10 }}
            transition={{ type: 'smooth', repeatType: 'mirror', duration: 2, repeat: Infinity }}
          >
          <Image
            src={computer}
            alt="AboutImg"
            width={400}
            height={400}
            priority 
            style={{ borderRadius: '50%' }}
          />
        </motion.div>

        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="subpixel-antialiased min-h-44 flex flex-col gap-5">
            <h1 className="text-5xl font-bold">About Me</h1>
            <TypeAnimation
              sequence={[
                "I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, MongoDb, Bootstrap, TailWind, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.",
                1000,
                "Building diverse front-end and full-stack applications to showcase my development expertise and passion for crafting innovative solutions.",
                1000,
              ]}
              wrapper="span"
              speed={80}
              style={{ fontSize: '1rem' }}
              repeat={Infinity}
            />
          </div>
          <div>
            <Tabs >
              <TabList className="flex py-4 w-100% justify-between">
                <Tab className='bg-gradient-to-r from-purple-500 py-2 px-6 rounded-md'>Skills</Tab>
                <Tab className='bg-gradient-to-r from-purple-500 py-2 px-5	rounded-md	'>Education</Tab>
                <Tab className='bg-gradient-to-r from-purple-500 py-2 px-5 	rounded-md	'>Certifications</Tab>

              </TabList>
              <TabPanel>
                <ul>
                  <li>1. JavaScript</li>
                  <li>2. React.js</li>
                  <li>3. Node.js</li>
                  <li>4. MongoDB</li>
                  <li>5. Next.js</li>
                </ul>
              </TabPanel>
              <TabPanel>
                <ul>
                  <li>1. Acciojob Fullstack Academy</li>
                  <li>2. Mechanical Engineering</li>
                  <li>3. Ocean Computer Institute</li>
                </ul>
              </TabPanel>
              <TabPanel>
                <ul>
                  <li>1. Full Stack Developer by Acciojob</li>
                  <li>2. AutoCAD Designer</li>
                  <li>3. Option Trader by Udemy</li>
                  <li>4. Full Stack Developer by Udemy</li>
                </ul>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="loader-line"></div>
    </div>
  );
};

export default About;