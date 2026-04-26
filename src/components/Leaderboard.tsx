const Leaderboard = ({ drivers }: { drivers: any[] }) => (
  <div className="bg-surface-container p-6 overflow-hidden relative group">
    <h2 className="font-headline text-lg font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-on-surface">
      <span className="w-1 h-4 bg-primary-container"></span>
      Real-Time Standings
    </h2>
    <div className="space-y-1">
      {drivers.map((driver, idx) => (
        <div key={driver.name} className="grid grid-cols-12 items-center p-3 bg-surface-container-high hover:bg-surface-bright transition-colors border-l-4 border-secondary-container text-on-surface">
          <div className="col-span-1 font-headline font-black text-xl italic opacity-30">
            {String(idx + 1).padStart(2, '0')}
          </div>
          <div className="col-span-4 font-headline font-bold text-sm uppercase">
            {driver.name}
            <p className="text-[10px] opacity-40 font-label">{driver.team}</p>
          </div>
          <div className="col-span-3 text-right font-headline font-bold text-sm">
            {idx === 0 ? 'INTERVAL' : `+${(idx * 1.4).toFixed(3)}`}
          </div>
          <div className="col-span-4 text-right font-headline font-bold text-sm text-secondary-container">
            1:32.{400 + idx}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Leaderboard;
