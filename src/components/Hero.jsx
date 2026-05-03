import React from "react";
import background from "../assets/bbground.png";

const Hero = () => {
  return (
    <section
      className="w-full pt-20 bg-cover bg-center h-[65vh] md:h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="block px-4 py-12">
        <h1 className="text-white text-3xl font-bold">
          From Local Farms to Global Trade
        </h1>
        <p className="text-white font-sans">
          Connecting you directly to trusted farmers by delivering fresh,
          organic, and high-quality agricultural products carefully harvested,
          hygienically handled, and delivered promptly to ensure you enjoy
          nutritious food at its best.
        </p>
      </div>
    </section>
  );
};

export default Hero;
