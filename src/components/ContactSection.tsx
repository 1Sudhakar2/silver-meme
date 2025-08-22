import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MessageCircle, Shield, HelpCircle, TestTube, Heart } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const footerLinks = [
    { icon: Instagram, label: 'Instagram', url: '#', tooltip: 'Follow us on Instagram' },
    { icon: MessageCircle, label: 'Pinterest', url: '#', tooltip: 'See our Pinterest boards' },
    { icon: Shield, label: 'Privacy Policy', url: '#', tooltip: 'Read our privacy policy' },
    { icon: HelpCircle, label: 'Terms of Service', url: '#', tooltip: 'View terms and conditions' },
    { icon: HelpCircle, label: 'Help Center', url: '#', tooltip: 'Get help and support' },
    { icon: TestTube, label: 'Beta Test', url: '#', tooltip: 'Join our beta testing program' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center px-8 py-16"
      id="contact"
    >
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-textPrimary mb-6">
            Emergency Contact
          </h2>
          <p className="text-xl text-textSecondary">
            Need immediate assistance? We're here to help 24/7
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-lg p-8 text-center"
          >
            <div className="bg-primary/10 p-6 rounded-full inline-block mb-6">
              <Phone className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-textPrimary mb-4">
              Emergency Hotline
            </h3>
            <a
              href="tel:7735973698"
              className="text-3xl font-bold text-primary hover:text-blue-600 transition-colors"
            >
              (773) 597-3698
            </a>
            <p className="text-textSecondary mt-2">Available 24/7</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-lg p-8 text-center"
          >
            <div className="bg-secondary/10 p-6 rounded-full inline-block mb-6">
              <Mail className="h-12 w-12 text-secondary" />
            </div>
            <h3 className="text-2xl font-semibold text-textPrimary mb-4">
              Email Support
            </h3>
            <a
              href="mailto:skincare@rediffmail.com"
              className="text-2xl font-semibold text-secondary hover:text-red-600 transition-colors break-all"
            >
              skincare@rediffmail.com
            </a>
            <p className="text-textSecondary mt-2">Response within 24 hours</p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="bg-primary p-3 rounded-2xl">
                <Heart className="text-white h-8 w-8" />
              </div>
              <span className="ml-3 text-2xl font-bold text-textPrimary">SkinCare</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link, index) => (
                <div key={link.label} className="relative">
                  <a
                    href={link.url}
                    className="flex items-center space-x-2 text-textSecondary hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/5"
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <link.icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </a>
                  
                  {/* Tooltip */}
                  {hoveredLink === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-textPrimary text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-10"
                    >
                      {link.tooltip}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-textPrimary"></div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center text-textSecondary text-sm border-t border-gray-200 pt-6">
            <p>&copy; 2025 SkinCare. All rights reserved. Empowering healthier skin through AI technology.</p>
          </div>
        </div>
      </footer>
    </motion.section>
  );
};

export default ContactSection;