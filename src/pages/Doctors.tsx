import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Star, Calendar, ArrowRight } from 'lucide-react';
import { DOCTORS } from '../constants';

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const specialties = ['All', ...new Set(DOCTORS.map(d => d.specialty))];

  const filteredDoctors = DOCTORS.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="pt-32 pb-24 bg-health-accent min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6">Our Medical Specialists</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            We have assembled a team of world-class medical professionals committed to providing expert care and exceptional outcomes.
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-sm border border-transparent focus:border-health-primary focus:ring-4 focus:ring-health-primary/5 transition-all text-lg"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {specialties.map(specialty => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedSpecialty === specialty
                    ? 'bg-health-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor, i) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-yellow-500 font-bold text-sm">
                  <Star size={14} fill="currentColor" />
                  {doctor.rating}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl mb-1">{doctor.name}</h3>
                  <p className="text-health-primary font-bold text-sm uppercase tracking-wider">{doctor.specialty}</p>
                </div>
                
                <div className="space-y-4 mb-8 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-health-accent flex items-center justify-center text-health-primary">
                      <Award size={16} />
                    </div>
                    <span>{doctor.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-health-accent flex items-center justify-center text-health-primary">
                      <Filter size={16} />
                    </div>
                    <span>{doctor.education}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-health-accent flex items-center justify-center text-health-primary">
                      <Calendar size={16} />
                    </div>
                    <span>Availability: {doctor.availability.join(', ')}</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <button className="w-full bg-health-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-health-primary/90 transition-all shadow-lg hover:shadow-xl">
                    Book Appointment <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-400 text-xl font-light">No doctors found matching your criteria. Please try another search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}
