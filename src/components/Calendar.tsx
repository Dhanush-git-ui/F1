import React, { useEffect, useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Trophy, ChevronRight } from 'lucide-react';

interface Race {
  round: number;
  gp: string;
  date: string;
  winner: string | null;
  status: string;
}

const Calendar: React.FC = () => {
  const [races, setRaces] = useState<Race[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/calendar')
      .then(res => res.json())
      .then(data => setRaces(data))
      .catch(err => console.error('Error fetching calendar:', err));
  }, []);

  if (races.length === 0) return null;

  return (
    <section id="calendar" className="py-20 border-t border-white/5">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <CalendarIcon className="w-10 h-10 text-glow-red" />
          <h2 className="font-headline text-5xl font-black uppercase tracking-tighter">
            2026 <span className="text-secondary-container">Race Calendar</span>
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-white/10">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface/60">Season Underway</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {races.map((race) => (
          <div 
            key={race.round} 
            className={`group flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl transition-all duration-300 border ${
              race.status === 'Completed' 
                ? 'bg-surface-container/20 border-white/5 opacity-80' 
                : 'bg-surface-container/40 border-glow-red/20 hover:border-glow-red/50 shadow-2xl'
            }`}
          >
            <div className="flex items-center gap-8 w-full md:w-auto">
              <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-surface-container-high border border-white/10 font-headline">
                <span className="text-[10px] opacity-40">RND</span>
                <span className="text-2xl font-black">{race.round}</span>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-3 h-3 text-glow-red" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface/40">{race.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-glow-red transition-colors">
                  {race.gp}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-12 mt-6 md:mt-0 w-full md:w-auto justify-between md:justify-end">
              {race.winner ? (
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-yellow-400/60">Winner</p>
                    <p className="font-headline font-black text-sm">{race.winner}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3 opacity-40">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold">TBD</p>
                    <p className="font-headline font-black text-sm">—</p>
                  </div>
                </div>
              )}
              
              <button className={`p-3 rounded-full border transition-all ${
                race.status === 'Upcoming' 
                  ? 'bg-glow-red border-glow-red text-white hover:scale-110' 
                  : 'bg-surface-container-high border-white/10 text-on-surface/40'
              }`}>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Calendar;
