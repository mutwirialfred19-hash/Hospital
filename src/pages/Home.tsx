import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Clock, Users, ArrowRight, Heart, Baby, Brain, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DEPARTMENTS, DOCTORS } from '../constants';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/hospital_hero_1779033546829.png" 
            alt="Modern Hospital" 
            className="w-full h-full object-cover brightness-[0.7]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-health-primary/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
              Trusted Healthcare for <span className="text-health-secondary">You</span> and Your Family
            </h1>
            <p className="text-xl mb-10 opacity-90 leading-relaxed font-light">
              Experience world-class medical excellence with a personal touch. Our specialists are dedicated to providing the highest quality care for your well-being.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/doctors" 
                className="bg-health-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center gap-2"
              >
                Book Appointment <ArrowRight size={20} />
              </Link>
              <Link 
                to="/departments" 
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, label: 'Accredited Care', val: 'JCI Certified' },
              { icon: Award, label: 'Excellence Awards', val: 'Top 5 Hospital' },
              { icon: Clock, label: 'Emergency Support', val: '24/7 Available' },
              { icon: Users, label: 'Satisfied Patients', val: '500k+' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-health-accent rounded-full flex items-center justify-center text-health-primary mb-4">
                  <stat.icon size={24} />
                </div>
                <h4 className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-1">{stat.label}</h4>
                <p className="text-health-primary font-bold text-xl">{stat.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Departments */}
      <section className="py-24 bg-health-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-health-primary font-bold uppercase tracking-widest text-sm">Specialized Care</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-6">Our Top Departments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              We offer a wide range of medical services across various specialties, ensuring comprehensive care for every patient.
            </p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {DEPARTMENTS.slice(0, 4).map((dept) => (
              <motion.div 
                key={dept.id} 
                variants={item}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg hover:shadow-2xl transition-all"
              >
                <img 
                  src={dept.image} 
                  alt={dept.name} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-health-primary via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl mb-2">{dept.name}</h3>
                  <p className="text-sm opacity-80 mb-4 line-clamp-2">{dept.description}</p>
                  <Link to="/departments" className="flex items-center gap-2 text-health-secondary font-bold group">
                    View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Link 
              to="/departments" 
              className="inline-flex items-center gap-2 text-health-primary font-bold border-b-2 border-health-primary pb-1 hover:text-health-secondary hover:border-health-secondary transition-all"
            >
              Discover All Departments <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Appointment CTA Section */}
      <section className="py-24 bg-health-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Heart size={400} className="text-white" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl text-health-primary mb-6">Take the First Step Towards Better Health</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Scheduling an appointment at MediTrust is quick and easy. Our specialists are ready to provide you with the personalized care you deserve.
              </p>
              <ul className="space-y-4 mb-10">
                {['24/7 Online Booking', 'Same-Day Appointments', 'Direct Doctor Connection'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-health-secondary/20 flex items-center justify-center text-health-secondary">
                      <ShieldCheck size={16} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
              <Link 
                to="/doctors" 
                className="inline-block bg-health-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
              >
                Book Your Visit
              </Link>
            </div>
            <div className="hidden lg:block w-72">
               <img 
                  src="/src/assets/images/doctor_team_1779033563883.png" 
                  alt="Doctor" 
                  className="rounded-2xl shadow-xl rotate-3 scale-110" 
                  referrerPolicy="no-referrer"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Insurance */}
      <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-gray-400 font-medium uppercase tracking-[0.3em] mb-12">Accepted Insurance Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
             {/* Mock Insurance Logos */}
             {['HEALTHCARE', 'AETNA', 'CIGNA', 'BLUECROSS', 'UNITED'].map((name) => (
               <div key={name} className="text-2xl font-black text-gray-800 tracking-tighter">
                 {name}
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
