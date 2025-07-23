import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    learning: {
      title: "Learning Paths",
      links: [
        { name: "React Fundamentals", href: "#" },
        { name: "MERN Stack", href: "#" },
        { name: "Next.js Mastery", href: "#" },
        { name: "Node.js Backend", href: "#" },
        { name: "Express.js APIs", href: "#" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Code Examples", href: "#" },
        { name: "Project Templates", href: "#" },
        { name: "Best Practices", href: "#" },
        { name: "Cheat Sheets", href: "#" }
      ]
    },
    community: {
      title: "Community",
      links: [
        { name: "Discussion Forum", href: "#" },
        { name: "Discord Server", href: "#" },
        { name: "Study Groups", href: "#" },
        { name: "Code Reviews", href: "#" },
        { name: "Success Stories", href: "#" }
      ]
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Mission", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Blog", href: "#" }
      ]
    }
  };

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", href: "#", color: "hover:text-blue-400" },
    { name: "GitHub", icon: "Github", href: "#", color: "hover:text-gray-900" },
    { name: "LinkedIn", icon: "Linkedin", href: "#", color: "hover:text-blue-600" },
    { name: "YouTube", icon: "Youtube", href: "#", color: "hover:text-red-500" },
    { name: "Discord", icon: "MessageSquare", href: "#", color: "hover:text-indigo-500" }
  ];

  const technologies = [
    "React", "Node.js", "Express.js", "MongoDB", "Next.js", "TypeScript", 
    "Tailwind CSS", "GraphQL", "PostgreSQL", "Docker"
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Stay Updated with{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Latest Tutorials
              </span>
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get weekly updates on new courses, coding tips, and exclusive content 
              delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <Button
                variant="primary"
                size="lg"
                iconName="Send"
                iconPosition="right"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-3 font-semibold whitespace-nowrap"
                onClick={() => console.log('Subscribe to newsletter')}
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-slate-400 mt-4">
              Join 25,000+ developers already subscribed. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <Link to="/homepage-premium-developer-learning-platform" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl font-mono">K</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">KeshavDovs</span>
                  <div className="text-sm text-slate-400 font-medium">Developer Academy</div>
                </div>
              </Link>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Elevating developers through beautiful code and comprehensive learning experiences. 
                Master the craft, not just the code.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-300 hover:bg-slate-700 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([key, section], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-800"
        >
          <h4 className="text-lg font-semibold text-white mb-6 text-center">
            Technologies We Teach
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm font-medium hover:bg-slate-700 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} KeshavDovs Developer Academy. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
All Rights Reserved by              {""}
             <a className='text-zinc-50' href="https://portfolio-testing-five.vercel.app/">Keshav Docs</a>
              {""}    
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <Icon name="ChevronUp" size={20} />
      </motion.button>
    </footer>
  );
};

export default FooterSection;