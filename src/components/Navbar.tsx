

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl border-b border-[#E10600]/10 shadow-[0_4px_20px_rgba(0,210,255,0.1)]">
      <div className="flex justify-between items-center px-8 py-4 w-full max-w-[1440px] mx-auto">
        <div className="text-2xl font-black text-[#E10600] tracking-tighter font-headline cursor-pointer">F1 KINETIC</div>
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Teams', 'Drivers', 'Schedule', 'Maps', 'Regulations', 'Stats'].map((item) => (
            <a 
              key={item}
              className="font-headline uppercase tracking-[0.05em] text-sm font-bold text-[#E5E2E1] hover:text-[#00D2FF] transition-colors duration-300" 
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </div>
        <button className="bg-[#E10600] text-white px-6 py-2 font-headline font-bold uppercase tracking-widest text-xs rounded-sm hover:scale-105 active:scale-95 transition-all">
          Live Timing
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
