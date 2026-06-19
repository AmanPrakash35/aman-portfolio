import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../data/siteData.js";

function Footer() {
  const socialIconMap = {
    github: Github,
    linkedin: Linkedin,
    email: Mail,
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Aman</h2>
            <p className="text-gray-400">IT Professional</p>
          </div>
          <div className="flex gap-6">
            {socialLinks.map((item) => {
              const Icon = socialIconMap[item.id];
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Aman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
