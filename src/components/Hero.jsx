import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-gray-400 bg-[#000319] body-font">
      <div className="container mx-auto flex px-5 pt-20 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="text-5xl font-extrabold mb-6 text-white">
            Empowering Your Business with Cutthing-Edge Solutions!
          </h1>
          <p className="text-2xl leading-relaxed mb-6">
          At Our Company (Virtual Crafters), We know how important it is to get the perfect shot – for you and your clients.
          </p>
          <div className="flex justify-center">
            <button className="ml-4 inline-flex text-black bg-white border-0 py-2 px-12 focus:outline-none  rounded-3xl text-lg">
              Button
            </button>
          </div>
        </div>
        <Image
          className="banner mt-2 lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          src="/images/banner.png"
          width={500}
          height={500}
          alt="Logo"
        />
      </div>
    </section>
  );
};

export default Hero;
