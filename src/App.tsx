import React from 'react';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { Navbar } from './components/layout/Navbar.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { Hero } from './components/sections/Hero.tsx';
import { Services } from './components/sections/Services.tsx';
import { WhyChooseUs } from './components/sections/WhyChooseUs.tsx';
import { Portfolio } from './components/sections/Portfolio.tsx';
import { Process } from './components/sections/Process.tsx';
import { About } from './components/sections/About.tsx';
import { FAQ } from './components/sections/FAQ.tsx';
import { Contact } from './components/sections/Contact.tsx';

export default function App(): React.ReactElement {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white text-[#17165E] selection:bg-[#1685F7]/15 selection:text-[#17165E]">
        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 px-4 py-2 bg-[#0F6FD9] text-white text-xs font-semibold rounded-md shadow-md focus-visible:outline-2 focus-visible:outline-white"
        >
          Skip to main content
        </a>

        {/* A. Fixed Top Navbar with Language Switcher */}
        <Navbar />

        {/* Main Single-Page Anchor Content */}
        <main id="main-content" className="flex-1 flex flex-col">
          {/* B. Hero Section */}
          <Hero />

          {/* C. Services Section */}
          <Services />

          {/* D. Why Work With Wecrafty? Section */}
          <WhyChooseUs />

          {/* E. Portfolio Section */}
          <Portfolio />

          {/* F. Process Section */}
          <Process />

          {/* G. About Section */}
          <About />

          {/* H. FAQ Section */}
          <FAQ />

          {/* I. Contact / CTA Section */}
          <Contact />
        </main>

        {/* J. Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
