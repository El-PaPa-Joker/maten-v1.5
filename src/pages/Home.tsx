import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Team from '../components/Team';
import Reviews from '../components/Reviews';
import Achievements from '../components/Achievements';
import Packages from '../components/Packages';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Team />
      <Achievements />
      <Reviews />
      <Packages />
      <Contact />
    </>
  );
}

export default Home;