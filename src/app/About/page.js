"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaRocket, FaHandshake } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { BsGlobe, BsGraphUp } from "react-icons/bs";
import Image from "next/image";
import AboutUs from "/src/components/AboutUs.jsx";
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
      
<AboutUs/>
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
           
            Our Vision 
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Our goal is to be seen as a strong and creative firm with a
            straightforward environment 💡. Expand the market by offering clients simple IT
            solutions and satisfying them with our exceptional services 💻.
            We aim to execute activities with compelling software designs
            and frameworks 🛠️.
          </p>
        </motion.div>

        {/* Our Mission Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
           
            Our Mission 
          </h2>
           <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6">
        
           Our foremost objective is to perfect each outcome the client
            demands by delivering brilliant solutions 🌟, defining the
            value-creating market 💼, and striving to meet every goal 🎯. We
            are committed to creating long-lasting relationships with our clients
            based on trust and excellence 🤝.
           
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
