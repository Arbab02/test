"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaRocket, FaHandshake } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { BsGlobe, BsGraphUp } from "react-icons/bs";
import Image from "next/image";
import AboutUs from "/src/components/AboutUs.jsx";
import Vision from "/src/components/Vision.jsx";
import Mission from "/src/components/Mission.jsx";
import OurProcess from "/src/components/OurProcess.jsx";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-[#000319] text-gray-200 py-8">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* About Us Section */}
       <h1 className="text-7xl font-bold text-center my-12">About <span className='text-blue-500'>Us</span></h1>
<AboutUs/>
<Vision/>
<Mission/>
        {/* Our Process Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            
            ⚙️ Our Process ⚙️
          </h2>
          <OurProcess />
        </motion.div>

        {/* Our Vision Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
         
        </motion.div>

        {/* Our Mission Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
           
            
          </h2>
           <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6">
        
         
           
          </p>
          <motion.div
            variants={iconVariants}
            className="inline-block text-[#1E90FF] mt-4"
          >
            <FaHandshake size={50} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
