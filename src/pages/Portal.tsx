import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LogIn, User, FileText, Calendar, CreditCard, Activity, LogOut, Loader2, ShieldCheck } from 'lucide-react';

export default function Portal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 1500);
  };

  if (!isLoggedIn) {
    return (
      <div className="pt-32 pb-24 bg-health-accent min-h-screen flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-md"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-health-accent rounded-2xl flex items-center justify-center text-health-primary mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-3xl mb-2">Patient Portal</h1>
            <p className="text-gray-500 font-light">Securely access your medical records and appointments.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 uppercase tracking-wider ml-1">Email</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="patient@example.com"
                className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus:border-health-primary focus:ring-4 focus:ring-health-primary/5 transition-all outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 uppercase tracking-wider ml-1">Password</label>
              <input 
                type="password" 
                required
                placeholder="••••••••"
                className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus:border-health-primary focus:ring-4 focus:ring-health-primary/5 transition-all outline-none"
              />
            </div>
            <button 
              disabled={isLoading}
              className="w-full bg-health-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-health-primary/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="animate-spin" size={20} /> : <><LogIn size={20} /> Sign In</>}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between text-sm text-health-primary font-medium">
            <button className="hover:underline">Forgot Password?</button>
            <button className="hover:underline">Create Account</button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-health-accent min-h-screen">
      <div className="container mx-auto px-4">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl mb-2">Welcome Back, {email.split('@')[0]}</h1>
            <p className="text-gray-500">How is your health today? Here's an overview of your activity.</p>
          </div>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 text-gray-500 hover:text-health-emergency transition-colors font-bold uppercase tracking-widest text-xs border border-gray-200 px-4 py-2 rounded-full"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: 'Next Appointment', val: 'Tomorrow, 10:00 AM', icon: Calendar, color: 'bg-blue-500' },
                { label: 'Pending Results', val: '2 New Tests', icon: Activity, color: 'bg-green-500' },
                { label: 'Owed Balance', val: '$0.00', icon: CreditCard, color: 'bg-purple-500' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className={`w-10 h-10 ${stat.color} text-white rounded-xl flex items-center justify-center mb-4`}>
                    <stat.icon size={20} />
                  </div>
                  <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</h4>
                  <p className="text-gray-800 font-bold">{stat.val}</p>
                </div>
              ))}
            </div>

            {/* Medical Records */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl">Recent Medical Records</h3>
                <button className="text-health-primary font-bold text-sm hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Annual Health Checkup', date: 'May 12, 2024', type: 'Clinical Summary', size: '1.2 MB' },
                  { title: 'Blood Work Panel', date: 'May 10, 2024', type: 'Lab Result', size: '0.8 MB' },
                  { title: 'X-Ray Chest', date: 'April 28, 2024', type: 'Radiology', size: '4.5 MB' },
                ].map((record, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:border-health-primary/30 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-health-accent rounded-xl flex items-center justify-center text-health-primary">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold group-hover:text-health-primary transition-colors">{record.title}</h4>
                        <p className="text-xs text-gray-400 capitalize">{record.type} • {record.date}</p>
                      </div>
                    </div>
                    <button className="p-3 text-health-primary hover:bg-health-accent rounded-full transition-colors">
                      <ShieldCheck size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
             <div className="bg-health-primary p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl mb-4">Book a Video Consultation</h3>
                  <p className="opacity-80 mb-8 font-light">Talk to our specialists from the comfort of your home. Available 9 AM - 8 PM.</p>
                  <button className="w-full bg-white text-health-primary py-4 rounded-2xl font-bold hover:bg-health-secondary hover:text-white transition-all shadow-lg">
                    Book Telemedicine
                  </button>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 bg-white rounded-full -mr-16 -mt-16" />
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl mb-6">Patient Resources</h3>
                <ul className="space-y-4">
                  {['Pre-visit Guidelines', 'Insurance Help', 'Payment Methods', 'FAQ'].map(item => (
                    <li key={item}>
                      <a href="#" className="flex justify-between items-center text-gray-600 hover:text-health-primary transition-colors text-sm group">
                        {item}
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
