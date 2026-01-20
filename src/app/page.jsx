'use client'

import Hero from '../components/Hero';
import Expressions from '../components/Expressions';
import Variants from '../components/Variants';
import CausesInheritance from '../components/CausesInheritance';
import Diagnosis from '../components/Diagnosis';
import Statistics from '../components/Statistics';
import CurrentResearch from '../components/CurrentResearch';
import Support from '../components/Support';
import Contact from '../components/Contact';
import Sources from '../components/Sources';
import AdBanner from '../components/AdBanner';

export default function Home() {
  return (
    <div className="min-h-screen bg-soft-bg font-sans overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-medical-blue hover:text-blue-700 transition-colors">
            Tubulinopathy Awareness
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#causes" className="text-gray-700 hover:text-medical-blue transition-colors text-sm font-medium">Causes</a>
            <a href="#variants" className="text-gray-700 hover:text-medical-blue transition-colors text-sm font-medium">Variants</a>
            <a href="#expressions" className="text-gray-700 hover:text-medical-blue transition-colors text-sm font-medium">Symptoms</a>
            <a href="#diagnosis" className="text-gray-700 hover:text-medical-blue transition-colors text-sm font-medium">Diagnosis</a>
            <a href="#statistics" className="text-gray-700 hover:text-medical-blue transition-colors text-sm font-medium">Statistics</a>
            <a href="#support" className="text-gray-700 hover:text-medical-blue transition-colors text-sm font-medium">Support</a>
            <a href="#research" className="text-gray-700 hover:text-medical-blue transition-colors text-sm font-medium">Research</a>
            <a href="#contact" className="text-gray-700 hover:text-medical-blue transition-colors text-sm font-medium">Contact</a>
            <a href="#sources" className="text-gray-700 hover:text-medical-blue transition-colors text-sm font-medium">Sources</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero id="home" />
        
        {/* Ad placement after hero */}
        <AdBanner 
          adSlot="YOUR_AD_SLOT_ID_1" 
          className="bg-gray-50 py-4"
        />
        
        <CausesInheritance id="causes" />
        
        {/* Ad placement between sections */}
        <AdBanner 
          adSlot="YOUR_AD_SLOT_ID_2" 
          className="bg-white py-4"
        />
        
        <Variants id="variants" />
        <Expressions id="expressions" />
        
        {/* Ad placement between sections */}
        <AdBanner 
          adSlot="YOUR_AD_SLOT_ID_3" 
          className="bg-gray-50 py-4"
        />
        
        <Diagnosis id="diagnosis" />
        <Statistics id="statistics" />
        <Support id="support" />
        <CurrentResearch id="research" />
        
        {/* Ad placement before footer */}
        <AdBanner 
          adSlot="YOUR_AD_SLOT_ID_4" 
          className="bg-gray-50 py-4"
        />
        
        <Contact id="contact" />
        <Sources id="sources" />
      </main>

      <footer className="bg-gray-950 text-gray-600 py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Tubulinopathy Awareness Project</p>
        <p className="mt-2 text-gray-500">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </footer>
    </div>
  );
}
