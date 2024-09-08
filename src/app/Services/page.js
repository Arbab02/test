'use client'

import React from 'react';
import WebPricing from '/src/components/WebPricing.jsx'
import LogoPricing from '/src/components/LogoPricing.jsx'
import { motion } from 'framer-motion';



const Services = () => {
  return (
    <section className="bg-[#0D0214] text-gray-600 body-font">
     <WebPricing/>
     <LogoPricing/>
    </section>
  );
};

export default Services;
