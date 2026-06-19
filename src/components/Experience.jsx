import React from "react";
import { experiences } from "../data/siteData.js";

function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 border-l-4 border-primary"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-semibold text-lg">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-500 font-medium mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <span className="text-primary mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
