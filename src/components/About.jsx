import React from "react";
import { Mail, MapPin } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I am a dedicated IT professional with extensive experience in
              developing and implementing technology solutions. My expertise
              spans across various domains including software development,
              system administration, and project management.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I thrive in challenging environments and am committed to
              continuous learning and professional growth. My goal is to
              leverage technology to create impactful solutions that drive
              organizational success.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={20} className="text-primary" />
                <span>Your Location</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail size={20} className="text-primary" />
                <span>your.email@example.com</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Quick Facts
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-gray-600">Experience</span>
                <span className="font-semibold text-gray-900">9+ Years</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-gray-600">Projects Completed</span>
                <span className="font-semibold text-gray-900">20+</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-gray-600">Technologies</span>
                <span className="font-semibold text-gray-900">15+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Certifications</span>
                <span className="font-semibold text-gray-900">5+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
