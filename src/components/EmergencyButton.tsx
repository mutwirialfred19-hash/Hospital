import React from 'react';
import { AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function EmergencyButton() {
  return (
    <motion.div 
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      className="fixed bottom-24 right-6 z-40"
    >
      <a 
        href="tel:911"
        className="flex items-center gap-3 bg-health-emergency text-white px-5 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform group"
      >
        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
          <AlertCircle size={20} />
        </span>
        <div className="flex flex-col leading-none">
          <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Emergency</span>
          <span className="text-lg font-bold">911</span>
        </div>
      </a>
    </motion.div>
  );
}
