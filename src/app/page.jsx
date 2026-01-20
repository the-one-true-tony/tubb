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
import { usePageStyles } from '../styles/pageStyles';

export default function Home() {
  const classes = usePageStyles();
  
  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        <div className={classes.navContent}>
          <a href="#home" className={classes.logo}>
            Tubulinopathy Awareness
          </a>
          <div className={classes.navLinks}>
            <a href="#causes" className={classes.navLink}>Causes</a>
            <a href="#variants" className={classes.navLink}>Variants</a>
            <a href="#expressions" className={classes.navLink}>Symptoms</a>
            <a href="#diagnosis" className={classes.navLink}>Diagnosis</a>
            <a href="#statistics" className={classes.navLink}>Statistics</a>
            <a href="#support" className={classes.navLink}>Support</a>
            <a href="#research" className={classes.navLink}>Research</a>
            <a href="#contact" className={classes.navLink}>Contact</a>
            <a href="#sources" className={classes.navLink}>Sources</a>
          </div>
        </div>
      </nav>

      <main className={classes.main}>
        <Hero id="home" />
        
        {/* Ad placement after hero */}
        <AdBanner 
          adSlot="YOUR_AD_SLOT_ID_1" 
          className="bg-gray-50"
        />
        
        <CausesInheritance id="causes" />
        
        {/* Ad placement between sections */}
        <AdBanner 
          adSlot="YOUR_AD_SLOT_ID_2" 
          className="bg-white"
        />
        
        <Variants id="variants" />
        <Expressions id="expressions" />
        
        {/* Ad placement between sections */}
        <AdBanner 
          adSlot="YOUR_AD_SLOT_ID_3" 
          className="bg-gray-50"
        />
        
        <Diagnosis id="diagnosis" />
        <Statistics id="statistics" />
        <Support id="support" />
        <CurrentResearch id="research" />
        
        {/* Ad placement before footer */}
        <AdBanner 
          adSlot="YOUR_AD_SLOT_ID_4" 
          className="bg-gray-50"
        />
        
        <Contact id="contact" />
        <Sources id="sources" />
      </main>

      <footer className={classes.footer}>
        <p>&copy; {new Date().getFullYear()} Tubulinopathy Awareness Project</p>
        <p className={classes.footerText}>
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </footer>
    </div>
  );
}
