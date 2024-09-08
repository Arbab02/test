'use client'

import { motion } from 'framer-motion';
import { FaBullhorn, FaPencilRuler, FaSearch, FaGlobe, FaPaintBrush, FaFileAlt, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaBullhorn size={40} />,
    title: 'Digital Marketing',
    description: 'In order to improve your online presence and generate results, Synctal Solutions provides a full range of digital marketing services. Our knowledgeable team has expertise in content creation, social media marketing, PPC advertising, SEO, and more. We customize our services to your unique needs, assisting you in productively reaching and engaging your target audience while maximizing your online visibility and return on investment.'
  },
  {
    icon: <FaPencilRuler size={40} />,
    title: 'Animation',
    description: 'At Synctal Solutions, our mission is to create highly effective and tailored animation plans that align with your business goals. Our expertise lies in producing captivating 2D and 3D animations that leave a lasting impression on your audience. From animating existing logos to crafting entirely new ones, our creative solutions ensure your brand stands out.'
  },
  {
    icon: <FaPaintBrush size={40} />,
    title: 'Graphic Designing',
    description: 'Synctal Solutions offers innovative graphic design solutions that elevate your brand\'s visual identity. Our creative team specializes in animated logos that truly make your company stand out. Whether it\'s a fresh logo design or an animated version of your existing one, we ensure your brand resonates with your target audience through captivating visuals.'
  },
  {
    icon: <FaFileAlt size={40} />,
    title: 'Content Writing',
    description: 'Synctal Solutions provides exceptional content writing services that are adapted to your unique requirements. Our talented team of writers produces excellent, compelling, and SEO-optimized content for websites, blogs, social media, and other platforms, encouraging meaningful engagement.'
  },
  {
    icon: <FaSearch size={40} />,
    title: 'SEO',
    description: 'To help your company move up the search engine results pages and increase organic website traffic, Synctal Solutions offers professional SEO services. We conduct in-depth keyword research, optimize on-page content, improve website structure, and create high-quality backlinks.'
  },
  {
    icon: <FaGlobe size={40} />,
    title: 'Web Design & Development',
    description: 'We are your trusted partner for web design and development services. Our mission is to create visually stunning and highly functional websites that leave a lasting impact on your audience, ensuring your website stands out in today\'s competitive digital landscape.'
  },
  {
    icon: <FaChartLine size={40} />,
    title: 'UI / UX Design',
    description: 'Our UI/UX design services focus on understanding your users\' needs and behaviors, ensuring that every interaction is intuitive and delightful. We strive to create user interfaces that look visually appealing, enhance usability, and drive conversions.'
  }
];

const Portfolio = () => {
  return (
    <div className="container mx-auto p-10 bg-[#000319] text-gray-400">
      <h2 className="text-5xl font-bold text-center mb-12">Our Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-[#000522] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4 text-blue-600">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-center">{service.title}</h3>
            <p className="text-gray-400 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
