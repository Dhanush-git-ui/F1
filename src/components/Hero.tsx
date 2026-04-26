import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-start pt-20 f1-grid-bg overflow-hidden p-8">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/10 border border-primary-container/20 text-primary-container font-label text-[0.6875rem] uppercase tracking-widest font-bold">
            Peak Aerodynamics Active
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-glow-red text-on-surface">
            Experience <br/> The <span className="text-primary-container">Speed</span> <br/> Of F1
          </h1>
          <p className="font-body text-lg text-on-surface/70 max-w-lg">
            Dive into the high-frequency world of elite engineering. Track real-time telemetry and witness every millisecond.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary-container text-white px-10 py-4 font-headline font-black uppercase text-sm tracking-widest hover:brightness-110 transition-all">
              Start Tracking
            </button>
          </div>
        </div>

        {/* Live Countdown HUD */}
        <div className="glass-panel p-8 rounded-sm relative overflow-hidden group">
          <div className="space-y-6">
            <div className="flex justify-between items-end border-b border-white/10 pb-4">
              <div>
                <h3 className="text-[0.6875rem] uppercase tracking-widest text-on-surface/40 mb-1">Upcoming Event</h3>
                <p className="font-headline font-bold text-2xl uppercase text-on-surface">Abu Dhabi Grand Prix</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 text-center">
              {[ {v: '02', l:'Days'}, {v: '14', l:'Hours'}, {v: '36', l:'Mins'}, {v: '52', l:'Secs'} ].map(t => (
                <div key={t.l} className="bg-surface-container-low p-4 rounded-sm border-l-2 border-primary-container">
                  <div className="font-headline text-4xl font-black text-on-surface">{t.v}</div>
                  <div className="text-[0.625rem] uppercase tracking-widest text-on-surface/40">{t.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
