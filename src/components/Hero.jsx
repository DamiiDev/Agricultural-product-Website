import React from "react";
import background from "../assets/bbground.png";

const Hero = () => {
  return (
    <section
      className="relative w-full mt-20 bg-cover bg-center h-[65vh] md:h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 space-y-6  md:space-y-12 md:px-28">
        <h1
          className="text-white text-3xl font-bold drop-shadow-lg md:text-5xl"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          From Local Farms to Global Trade
        </h1>
        <p
          className="text-white text-base drop-shadow-md md:text-2xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          We bridge the gap between you and the farmers who grow your food.
          Every product is organically grown, carefully harvested, and delivered
          fresh to your door because you deserve nothing but the best.
        </p>
        <div>
          <a
            href=""
            className="bg-green-500 hover:bg-green-600 text-white text-xl px-4 py-2 rounded-full md:text-2xl "
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
