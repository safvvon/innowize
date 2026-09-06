import React from 'react';
import { Hero } from '../components/home/Hero';
import { IntroTextLayer } from '../components/home/IntroTextLayer';
import { Intro } from '../components/home/Intro';
import { IntroSection2 } from '../components/home/IntroSection2';
import { IntroSection3 } from '../components/home/IntroSection3';
import { Clients } from '../components/home/Clients';
import { TeamMembers } from '../components/home/TeamMembers';

export const Home: React.FC = () => {
  return (
    <div className="home-page w-full overflow-hidden">
      <Hero />
      <div className="relative w-full">
        <IntroTextLayer />
        <Intro />
        <IntroSection2 />
        <IntroSection3 />
      </div>
      <Clients />
      <TeamMembers />
    </div>
  );
};
