import React from 'react';
import { Activity, Navigation, Maximize, Gauge } from 'lucide-react';

interface CircuitProps {
  gp: string;
  circuit: string;
  length: string;
  turns: number;
  mapImage: string;
}

const CircuitDetails: React.FC<CircuitProps> = ({ gp, circuit, length, turns, mapImage }) => {
  return (
    <div className="bg-surface-container/60 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden group">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={mapImage} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40" 
          alt={circuit}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
        
        <div className="absolute bottom-8 left-8">
          <h3 className="text-[10px] uppercase tracking-widest font-bold text-glow-red mb-2">Circuit Layout</h3>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white">{gp}</h2>
          <p className="text-on-surface/60 font-medium">{circuit}</p>
        </div>
      </div>

      <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-on-surface/40">
            <Maximize className="w-3 h-3" />
            <span className="text-[10px] uppercase font-bold tracking-widest">Track Length</span>
          </div>
          <p className="text-xl font-bold text-white">{length}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-on-surface/40">
            <Navigation className="w-3 h-3" />
            <span className="text-[10px] uppercase font-bold tracking-widest">Number of Turns</span>
          </div>
          <p className="text-xl font-bold text-white">{turns}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-on-surface/40">
            <Gauge className="w-3 h-3" />
            <span className="text-[10px] uppercase font-bold tracking-widest">Top Speed Est.</span>
          </div>
          <p className="text-xl font-bold text-secondary-container">342 km/h</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-on-surface/40">
            <Activity className="w-3 h-3" />
            <span className="text-[10px] uppercase font-bold tracking-widest">Aero Mode</span>
          </div>
          <p className="text-xl font-bold text-primary-container">X-MODE BALANCED</p>
        </div>
      </div>

      <div className="px-8 pb-8">
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-glow-red w-2/3 shadow-[0_0_12px_rgba(255,59,48,0.6)]" />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[9px] uppercase font-bold text-on-surface/30 tracking-widest">Circuit Intensity</span>
          <span className="text-[9px] uppercase font-bold text-glow-red tracking-widest">68% Kinetic Load</span>
        </div>
      </div>
    </div>
  );
};

export default CircuitDetails;
