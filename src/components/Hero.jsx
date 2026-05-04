import React from "react";
import background from "../assets/bbground.png";

const Hero = () => {
  return (
    <section
      className="relative w-full pt-20 bg-cover bg-center h-[65vh] md:h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      <div
        className="relative z-10 block px-4 py-12 space-y-6 md:max-w-5xl md:space-y-12"
        md:px-6
      >
        <h1
          className="text-white text-3xl font-bold md:text-5xl"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          From Local Farms to Global Trade
        </h1>
        <p
          className="text-white text-base md:text-3xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          We bridge the gap between you and the farmers who grow your food.
          Every product is organically grown, carefully harvested, and delivered
          fresh to your door because you deserve nothing but the best.
        </p>
      </div>
    </section>
  );
};

export default Hero;
