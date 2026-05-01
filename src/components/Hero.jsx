import React from "react";
import background from "../assets/bbground.png";

const Hero = () => {
  return (
    <section
      className="w-full pt-20 bg-cover bg-center h-[65vh] md:h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
        <h1>From Local Farms to Global Trade</h1>
    </section>
  );
};

export default Hero;
