"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutAccordian from "/src/components/AboutAccordian.jsx";
import OurProcess from "/src/components/OurProcess.jsx";

const AboutUs = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="bg-[#000319] text-gray-400 py-8">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            About Us
          </h1>
          {/* <Image
          className="banner mt-2 lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          src="/images/about.gif"
          width={500}
          height={500}
          alt="Logo"
        /> */}
          <p className="text-gray-400 text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto">
            We are Virtual Crafters a Canadian based Software Company, We
            specialize in providing creative digital solutions globally. Our
            services include social media marketing, website development,
            website designing, SEO, and graphic design, all aimed at helping
            your brand thrive online. We are passionate about building visually
            stunning websites, crafting data-driven social media strategies, and
            enhancing your online visibility with tailored SEO services. With a
            focus on collaboration, we work closely with you to create unique,
            impactful designs and strategies that align with your goals, driving
            success in the digital world.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
            Our Process
          </h2>
          <OurProcess />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className="bg-[#023502] text-white p-6 rounded-lg shadow-md"
              >
                <Image
                  src={`https://flowbite.com/docs/images/carousel/carousel-1.svg`}
                  alt={`Team Member ${item}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width={150}
                  height={150}
                />
                <h3 className="text-xl font-bold mb-2">Member Name {item}</h3>
                <p className="text-gray-400">Position {item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        > */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Our Vision
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto">
            Our goal is to be seen as a strong and creative firm with a
            straightforward environment. Expand the market by offering clients
            simple IT solutions and satisfying them with our exceptional
            administrations. Eventually, the execution of exercises with
            seriously convincing programming plans and frameworks.
          </p>
          <div className="mt-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto">
              Our foremost objective is to perfect each outcome the client
              demands by conveying brilliant game plans, describing the
              value-making business sector, and making progress toward the goal.
              We are assured by the warmth of our clients everywhere.
            </p>
          </div>
        </motion.div>
      </div>
      {/* <AboutAccordian/> */}
    </div>
  );
};

export default AboutUs;
