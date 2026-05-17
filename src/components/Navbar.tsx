import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, User } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Departments', path: '/departments' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-health-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
            <span className={cn(
              "font-serif text-2xl font-bold hidden sm:block",
              isScrolled ? "text-health-primary" : "text-health-primary"
            )}>
              MediTrust
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-health-primary',
                  location.pathname === link.path ? 'text-health-primary' : 'text-gray-600'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-health-primary font-semibold mr-4">
              <Phone size={18} />
              <span>+1 (800) 123-4567</span>
            </div>
            <Link 
              to="/portal" 
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
            >
              <User size={20} className="text-gray-600" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link
              to="/doctors"
              className="hidden sm:block bg-health-primary text-white px-6 py-2 rounded-full font-medium hover:bg-health-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-health-primary font-semibold px-3">
                  <Phone size={18} />
                  <span>+1 (800) 123-4567</span>
                </div>
                <Link
                  to="/doctors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-health-primary text-white px-6 py-3 rounded-lg font-medium text-center"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
