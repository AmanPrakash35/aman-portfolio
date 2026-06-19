import React, { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ChevronDown, ExternalLink } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact']

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">Aman</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <p className="text-primary font-semibold text-lg mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Aman</h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">IT Professional</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-xl">
                Passionate about building innovative solutions and leveraging technology to drive business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection('Contact')}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => scrollToSection('Projects')}
                  className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  View Projects
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white text-8xl md:text-9xl font-bold">A</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button
              onClick={() => scrollToSection('About')}
              className="animate-bounce text-primary"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I am a dedicated IT professional with extensive experience in developing and implementing technology solutions. 
                My expertise spans across various domains including software development, system administration, and project management.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I thrive in challenging environments and am committed to continuous learning and professional growth. 
                My goal is to leverage technology to create impactful solutions that drive organizational success.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-600">Experience</span>
                  <span className="font-semibold text-gray-900">X+ Years</span>
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

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Programming Languages',
                skills: ['JavaScript', 'Python', 'Java', 'SQL', 'TypeScript']
              },
              {
                title: 'Frameworks & Tools',
                skills: ['React', 'Node.js', 'Git', 'Docker', 'AWS']
              },
              {
                title: 'Soft Skills',
                skills: ['Problem Solving', 'Team Leadership', 'Communication', 'Project Management', 'Agile/Scrum']
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Work Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Senior IT Professional',
                company: 'Company Name',
                period: '2020 - Present',
                description: 'Leading technology initiatives and managing complex IT projects. Responsible for system architecture, team coordination, and delivering high-quality solutions.',
                achievements: [
                  'Led a team of 5 developers in delivering enterprise applications',
                  'Implemented cloud infrastructure reducing costs by 30%',
                  'Developed automated testing frameworks improving code quality'
                ]
              },
              {
                title: 'IT Specialist',
                company: 'Previous Company',
                period: '2017 - 2020',
                description: 'Developed and maintained software applications, provided technical support, and collaborated with cross-functional teams.',
                achievements: [
                  'Developed 10+ web applications using modern technologies',
                  'Reduced system downtime by 25% through proactive monitoring',
                  'Mentored junior team members on best practices'
                ]
              }
            ].map((exp, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 border-l-4 border-primary">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 font-medium mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2 text-gray-600">
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Enterprise Management System',
                description: 'A comprehensive business management solution with real-time analytics and reporting capabilities.',
                technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
                link: '#'
              },
              {
                title: 'Cloud Migration Project',
                description: 'Successfully migrated legacy systems to cloud infrastructure with zero downtime.',
                technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
                link: '#'
              },
              {
                title: 'Data Analytics Dashboard',
                description: 'Interactive dashboard for visualizing complex business data and generating insights.',
                technologies: ['Python', 'D3.js', 'PostgreSQL', 'Redis'],
                link: '#'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">{project.title[0]}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors duration-200"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-gray-900 font-medium">your.email@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <p className="text-gray-900 font-medium">+1 234 567 8900</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="text-gray-900 font-medium">Your City, Country</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className="bg-primary text-white p-3 rounded-lg hover:bg-secondary transition-colors duration-200"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Aman</h2>
              <p className="text-gray-400">IT Professional</p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Aman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
