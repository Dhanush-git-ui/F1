import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TelemetryHUD from './components/TelemetryHUD';
import TeamCard from './components/TeamCard';
import DriverCard from './components/DriverCard';
import Regulations from './components/Regulations';
import Calendar from './components/Calendar';
import Leaderboard from './components/Leaderboard';
import CircuitDetails from './components/CircuitDetails';
import F1Background from './components/Visuals/F1Background';
import { TEAMS_2026, DRIVERS_2026 } from './data/f1Data';

function App() {
  const [dynamicDrivers, setDynamicDrivers] = useState<any[]>([]);
  const [calendar, setCalendar] = useState<any[]>([]);
  const [selectedRace, setSelectedRace] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/drivers')
      .then(res => res.json())
      .then(data => setDynamicDrivers(data))
      .catch(err => console.error('Error fetching drivers:', err));

    fetch('http://localhost:8000/api/calendar')
      .then(res => res.json())
      .then(data => {
        setCalendar(data);
        setSelectedRace(data[0]);
      })
      .catch(err => console.error('Error fetching calendar:', err));
  }, []);

  return (
    <div className="relative min-h-screen text-on-surface bg-background overflow-x-hidden">
      <F1Background />
      <Navbar />

      <main className="relative z-10 pt-10 px-8">
        <div id="home"><Hero /></div>

        <div className="max-w-[1440px] mx-auto pb-20 space-y-32">
          {/* Real-time Standings & Teams Row */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 pt-20">
            <div id="teams" className="xl:col-span-2">
              <h2 className="font-headline text-5xl font-black uppercase mb-10 text-glow-red">The <span className="text-secondary-container">Constructors</span></h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {TEAMS_2026.slice(0, 4).map(team => <TeamCard key={team.name} {...team} />)}
              </div>
            </div>
            <div className="xl:col-span-1">
              <Leaderboard drivers={dynamicDrivers.length > 0 ? dynamicDrivers : DRIVERS_2026.slice(0, 5)} />
            </div>
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {TEAMS_2026.slice(4).map(team => <TeamCard key={team.name} {...team} />)}
          </section>

          {/* Drivers Grid */}
          <section id="drivers" className="pt-20 border-t border-white/5">
            <h2 className="font-headline text-5xl font-black uppercase mb-10 text-glow-red">The <span className="text-primary-container">Drivers</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {DRIVERS_2026.map(driver => (
                <DriverCard key={driver.name} {...driver} accentColor={driver.accent} />
              ))}
            </div>
          </section>

          {/* Schedule & Map Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-20 border-t border-white/5">
            <div id="schedule">
              <Calendar />
            </div>
            <div id="maps" className="lg:pt-20">
              <h2 className="font-headline text-5xl font-black uppercase mb-10 text-glow-red tracking-tighter">Circuit <span className="text-secondary-container">Insight</span></h2>
              {selectedRace && <CircuitDetails {...selectedRace} />}
              <div className="mt-8 p-6 rounded-2xl bg-surface-container border border-white/5">
                <p className="text-sm font-body text-on-surface/60 italic">
                  * All track maps are rendered using the 2026 LIDAR precision engine. 
                  Madrid Street Circuit layout is based on current homologation data.
                </p>
              </div>
            </div>
          </div>

          {/* Regulations Section */}
          <Regulations />

          <section id="stats" className="pt-20 border-t border-white/5">
            <h2 className="font-headline text-5xl font-black uppercase mb-10 text-glow-red">Live <span className="text-secondary-container">Telemetry</span></h2>
            <TelemetryHUD />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
