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
    <footer className="bg-gray-900 text-white py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4 flex-nowrap overflow-x-auto">
          <div className="min-w-0">
            <h2 className="text-lg font-semibold truncate">Aman</h2>
            <p className="text-gray-400 text-sm truncate">IT Professional</p>
          </div>

          <div className="flex gap-3 flex-shrink-0">
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
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <p className="text-gray-400 text-sm whitespace-nowrap flex-shrink-0">
            © {new Date().getFullYear()} Aman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
