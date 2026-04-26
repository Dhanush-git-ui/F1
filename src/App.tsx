import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TelemetryHUD from './components/TelemetryHUD';
import TeamCard from './components/TeamCard';
import DriverCard from './components/DriverCard';
import F1Background from './components/Visuals/F1Background';
import { TEAMS_2026, DRIVERS_2026 } from './data/f1Data';

function App() {
  return (
    <div className="relative min-h-screen text-on-surface bg-background overflow-x-hidden">
      <F1Background />
      <Navbar />

      <main className="relative z-10 pt-10 px-8">
        <div id="home"><Hero /></div>

        <div className="max-w-[1440px] mx-auto pb-20 space-y-32">
          {/* Teams Grid */}
          <section id="teams" className="pt-20 border-t border-white/5">
            <h2 className="font-headline text-5xl font-black uppercase mb-10 text-glow-red">The <span className="text-secondary-container">Constructors</span></h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {TEAMS_2026.map(team => <TeamCard key={team.name} {...team} />)}
            </div>
          </section>

          {/* Drivers Grid */}
          <section id="drivers" className="pt-20 border-t border-white/5">
            <h2 className="font-headline text-5xl font-black uppercase mb-10 text-glow-red">The <span className="text-primary-container">Drivers</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {DRIVERS_2026.map(driver => (
                <DriverCard key={driver.name} name={driver.name} number={driver.number} points={driver.points} image={driver.image} accentColor={driver.accent} />
              ))}
            </div>
          </section>

          <section id="stats"><TelemetryHUD /></section>
        </div>
      </main>
    </div>
  );
}

export default App;
