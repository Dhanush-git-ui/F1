const TelemetryHUD = () => (
  <div className="bg-surface-container-lowest/40 backdrop-blur-md p-12 rounded-sm border border-secondary-container/20 relative overflow-hidden mt-20">
    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/5 blur-[100px] pointer-events-none"></div>
    <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
      <div className="lg:w-1/3">
        <h2 className="font-headline text-4xl font-black uppercase tracking-tighter leading-none mb-6">
          Technical <br/><span className="text-secondary-container">Integration</span>
        </h2>
        <p className="font-body text-sm text-on-surface/60 leading-relaxed">
          Analyze live telemetry data and seasonal performance metrics across the entire 2024 grid. 
          Our kinetic precision engine updates every millisecond.
        </p>
      </div>
      <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
        {[
          { label: 'Reliability Index', value: '94.2%', progress: 94, color: 'bg-secondary-container' },
          { label: 'Avg Pit Stop', value: '2.23s', progress: 82, color: 'bg-primary-container' },
          { label: 'Aero Efficiency', value: '8.4 CD', progress: 88, color: 'bg-secondary-container' },
          { label: 'Thermal Load', value: '104°C', progress: 65, color: 'bg-primary-container' },
        ].map((stat) => (
          <div key={stat.label} className="space-y-2">
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface/40">{stat.label}</span>
            <div className="h-1 w-full bg-surface-container-highest">
              <div className={stat.color + " h-full"} style={{ width: `${stat.progress}%` }}></div>
            </div>
            <span className="font-headline text-xl font-bold text-on-surface">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TelemetryHUD;
