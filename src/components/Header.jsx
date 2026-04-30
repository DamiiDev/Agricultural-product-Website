import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full shadow-md">
      <div className="flex justify-between items-center p-6 md:px-10">
        <a href="#" className="text-xl font-bold">
          DF
        </a>

        <nav className="hidden md:flex gap-6">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Products</a>
          <a href="#">Blog</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </nav>
        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu size={24} />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex justify-end p-4">
            <FiX
              size={24}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>

          <div className="flex flex-col px-6 gap-4 text-lg font-medium cursor-pointer">
            {[
              "Home",
              "About",
              "Services",
              "Products",
              "Blog",
              "Gallery",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
