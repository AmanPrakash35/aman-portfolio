import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { contactDetails, socialLinks } from "../data/siteData.js";

function Contact() {
  const contactIconMap = {
    email: Mail,
    phone: Phone,
    location: MapPin,
  };

  const socialIconMap = {
    github: Github,
    linkedin: Linkedin,
    email: Mail,
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactDetails.map((item) => {
                const Icon = contactIconMap[item.id];
                return (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{item.label}</p>
                      <p className="text-gray-900 font-medium">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((item) => {
                  const SocialIcon = socialIconMap[item.id];
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${item.style} p-3 rounded-lg transition-colors duration-200`}
                    >
                      <SocialIcon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
