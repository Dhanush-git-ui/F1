interface TeamProps {
  name: string;
  image: string;
  location: string;
  powerUnit: string;
  titles: number;
  drivers: string[];
}

const TeamCard = ({ name, image, location, powerUnit, titles, drivers }: TeamProps) => (
  <div className="group relative overflow-hidden bg-surface-container border border-outline-variant/10 rounded-sm hover:border-secondary-container/50 transition-all duration-500">
    <div className="absolute inset-0 carbon-pattern opacity-20 pointer-events-none"></div>
    <div className="flex flex-col md:flex-row h-full">
      <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
        <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" src={image} alt={name} />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container via-transparent to-transparent"></div>
      </div>
      <div className="md:w-1/2 p-8 flex flex-col justify-between relative z-10 text-on-surface">
        <div>
          <div className="w-12 h-1 bg-primary-container mb-4"></div>
          <h2 className="font-headline text-3xl font-black uppercase tracking-tight mb-1">{name}</h2>
          <p className="font-label text-[10px] uppercase tracking-widest opacity-40">{location}</p>
        </div>
        <div className="mt-8 space-y-4">
          <div className="flex justify-between items-end border-b border-outline-variant/20 pb-2">
            <span className="text-[10px] opacity-50 uppercase font-label">Power Unit</span>
            <span className="font-headline font-bold text-sm">{powerUnit}</span>
          </div>
          <div className="flex justify-between items-end border-b border-outline-variant/20 pb-2">
            <span className="text-[10px] opacity-50 uppercase font-label">World Titles</span>
            <span className="font-headline font-bold text-sm text-secondary-container">{titles}</span>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          {drivers.map(d => (
            <div key={d} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></div>
              <span className="font-headline font-bold text-xs uppercase italic">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default TeamCard;
