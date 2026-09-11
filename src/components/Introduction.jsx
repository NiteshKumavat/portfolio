import React from 'react';

const Introduction = () => {
  return (
    <section className="relative min-h-screen bg-[#080808] text-white flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden font-mono select-none">

      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="absolute top-12 right-12 md:right-24">
        <span className="inline-block w-2.5 h-2.5 bg-[#00FF87] rounded-full shadow-[0_0_10px_#00FF87]"></span>
      </div>


      <div className="relative z-10 max-w-4xl space-y-6 my-auto pt-12">
        

        <p className="text-[#00FF87] text-xs md:text-sm tracking-[0.25em] uppercase font-semibold">
          SOFTWARE ENGINEER 
        </p>


        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-extrabold tracking-tight leading-none text-white">
          Nitesh<br />
          Kumavat<span className="text-[#00FF87] inline-block ml-1">.</span>
        </h1>

        {/* Bio / Description */}
        <p className="text-gray-400 font-sans text-lg sm:text-xl md:text-2xl max-w-2xl font-light leading-relaxed pt-2">
          hii! I am a beginner website developer.
        </p>


        <div className="flex flex-wrap items-center gap-4 pt-6">
          <a
            href="#work"
            className="bg-[#00FF87] hover:bg-[#00e077] text-black font-semibold text-xs md:text-sm tracking-widest px-8 py-4 transition-all duration-200 uppercase"
          >
            VIEW WORK
          </a>
          <a
            href="#contact"
            className="border border-zinc-800 hover:border-zinc-600 bg-black/40 text-gray-300 hover:text-white font-semibold text-xs md:text-sm tracking-widest px-8 py-4 transition-all duration-200 uppercase"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 pb-8 pt-12 flex items-center gap-3 text-xs tracking-[0.2em] text-gray-500 uppercase">
        <span className="w-8 h-[1px] bg-gray-600 inline-block"></span>
        <span>SCROLL</span>
      </div>

    </section>
  );
};

export default Introduction;