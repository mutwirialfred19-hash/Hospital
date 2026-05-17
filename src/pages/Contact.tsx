import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-health-accent min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl mb-6">Get In Touch</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Have questions about our services or need to book an appointment? Our team is here to help you 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info Cards */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-health-primary text-white rounded-2xl flex items-center justify-center mb-6">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4 font-light">Available 24/7 for emergency and inquiries.</p>
                <p className="text-health-primary font-bold text-xl">+1 (800) 123-4567</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-health-secondary text-white rounded-2xl flex items-center justify-center mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4 font-light">We usually reply within 24 hours.</p>
                <p className="text-health-primary font-bold text-xl">care@meditrust.hospital</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-health-emergency text-white rounded-2xl flex items-center justify-center mb-6">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl mb-2">Visit Us</h3>
                <p className="text-gray-600 font-light">123 Medical Center Way, North Springs, NY 12345</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-3xl mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 uppercase tracking-wider ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus:border-health-primary focus:ring-4 focus:ring-health-primary/5 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 uppercase tracking-wider ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus:border-health-primary focus:ring-4 focus:ring-health-primary/5 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 uppercase tracking-wider ml-1">Subject</label>
                  <select className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus:border-health-primary focus:ring-4 focus:ring-health-primary/5 transition-all outline-none appearance-none">
                    <option>Appointment Inquiry</option>
                    <option>General Question</option>
                    <option>Billing Inquiry</option>
                    <option>Departmental Question</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 uppercase tracking-wider ml-1">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="How can we help you today?"
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus:border-health-primary focus:ring-4 focus:ring-health-primary/5 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button className="w-full md:w-auto px-12 py-4 bg-health-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
