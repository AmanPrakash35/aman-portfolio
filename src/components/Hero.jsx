import React from "react";
import { ChevronDown } from "lucide-react";

function Hero({ onSectionClick }) {
  return (
    <section
      id="home"
      className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-primary font-semibold text-lg mb-2">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Aman
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              IT Professional
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Passionate about building innovative solutions and leveraging
              technology to drive business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => onSectionClick("Contact")}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
              <button
                onClick={() => onSectionClick("Projects")}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
              >
                View Projects
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white text-8xl md:text-9xl font-bold">
                A
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button
            onClick={() => onSectionClick("About")}
            className="animate-bounce text-primary"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
