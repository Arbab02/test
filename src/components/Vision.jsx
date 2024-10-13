import React from 'react';

const Vision = () => {
  return (
    <section className="text-gray-400 bg-[#000319] body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img className="object-cover object-center rounded" alt="hero" src="/images/vision.jpg" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
            Our Vision
          
          </h1>
          <p className="mb-8 leading-relaxed">
          Our goal is to be seen as a strong and creative firm with a
            straightforward environment 💡. Expand the market by offering clients simple IT
            solutions and satisfying them with our exceptional services 💻.
            We aim to execute activities with compelling software designs
            and frameworks 🛠️.
          </p>
          <div className="flex justify-center">
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
