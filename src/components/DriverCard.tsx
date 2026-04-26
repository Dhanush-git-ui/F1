import React from 'react';

interface DriverProps {
  name: string;
  number: number;
  points: number;
  image: string;
  accentColor: string; // e.g., 'primary-container' or 'secondary-container'
}

const DriverCard = ({ name, number, points, image, accentColor }: DriverProps) => {
  return (
    <div className={`driver-card group relative aspect-[3/4] bg-surface-container-low overflow-hidden rounded-sm cursor-pointer border border-transparent hover:border-${accentColor}/30 transition-all duration-300`}>
      <img 
        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
        src={image} 
        alt={name} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <span className={`font-headline text-4xl font-black text-on-surface/20 group-hover:text-${accentColor}/40 transition-colors`}>
          {String(number).padStart(2, '0')}
        </span>
        <h3 className="font-headline font-black text-xl uppercase tracking-tighter leading-none mt-[-10px] text-on-surface">
          {name}
        </h3>
        <div className="h-0 group-hover:h-12 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100 mt-2">
          <div className={`flex justify-between items-center text-[10px] font-label uppercase text-${accentColor}`}>
            <span>Points: {points}</span>
            <span>Status: Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
