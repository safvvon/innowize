import React from 'react';

export const Intro: React.FC = () => {
  return (
    <section className="relative h-[90vh] md:h-[80vh] lg:h-[175vh] w-full bg-alpha flex items-center justify-center overflow-hidden">
      <img
        src="/images/introbg.svg"
        alt="Intro Background"
        className="absolute bottom-0 left-0 w-[160%] max-w-none z-[1] pointer-events-none"
      />
      <div className="relative z-10" />
    </section>
  );
};
