import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmergencyButton from './components/EmergencyButton';
import HealthAssistant from './components/HealthAssistant';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <EmergencyButton />
      <HealthAssistant />
    </div>
  );
}
