import React from 'react';
import { motion } from 'motion/react';
import { Heart, Baby, Brain, Stethoscope, Users, Radiation, Shield, Activity, ArrowRight } from 'lucide-react';
import { DEPARTMENTS } from '../constants';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Heart, Baby, Brain, Stethoscope, Users, Radiation, Shield, Activity
};

export default function Departments() {
  return (
    <div className="pt-32 pb-24 bg-health-accent min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6">Medical Departments</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Comprehensive care across all major medical specialties, powered by advanced technology and compassionate experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {DEPARTMENTS.map((dept, i) => {
            const Icon = iconMap[dept.icon] || Stethoscope;
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 aspect-square md:aspect-auto relative overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-health-primary/20" />
                </div>
                
                <div className="p-8 flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-health-accent rounded-2xl flex items-center justify-center text-health-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-3xl">{dept.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-8 font-light leading-relaxed">
                    {dept.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Core Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.services.map(service => (
                        <span key={service} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-700">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/doctors"
                    className="inline-flex items-center gap-2 text-health-primary font-bold group"
                  >
                    Find a Specialist <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
