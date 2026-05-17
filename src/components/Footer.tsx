import React from 'react';
import { Phone, MapPin, Mail, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-health-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <span className="font-serif text-2xl font-bold text-white">MediTrust</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Providing exceptional healthcare with compassion and expertise. Your well-being is our top priority since 1995.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-health-primary hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Our Doctors', 'Departments', 'Services', 'Patient Portal', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-health-primary flex items-center gap-2 group transition-all">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Medical Services</h3>
            <ul className="space-y-4">
              {['Emergency Care', 'Cardiology', 'Pediatrics', 'Neurology', 'Diagnostics', 'Pharmacy'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-health-primary transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-health-primary shrink-0" size={20} />
                <p>123 Medical Center Way,<br />North Springs, NY 12345</p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-health-primary shrink-0" size={20} />
                <p>+1 (800) 123-4567<br /><span className="text-sm text-health-emergency font-bold">24/7 Emergency Hotline</span></p>
              </div>
              <div className="flex gap-4">
                <Mail className="text-health-primary shrink-0" size={20} />
                <p>info@meditrust.hospital</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} MediTrust Hospital. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
