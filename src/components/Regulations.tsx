import React, { useEffect, useState } from 'react';
import { Shield, Zap, Wind, Minimize2 } from 'lucide-react';

interface RegSection {
  title: string;
  description: string;
  specs: string[];
}

interface Regulations {
  power_unit: RegSection;
  aerodynamics: RegSection;
  chassis: RegSection;
}

const Regulations: React.FC = () => {
  const [regs, setRegs] = useState<Regulations | null>(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/regulations')
      .then(res => res.json())
      .then(data => setRegs(data))
      .catch(err => console.error('Error fetching regulations:', err));
  }, []);

  if (!regs) return null;

  const icons = {
    power_unit: <Zap className="w-8 h-8 text-yellow-400" />,
    aerodynamics: <Wind className="w-8 h-8 text-blue-400" />,
    chassis: <Minimize2 className="w-8 h-8 text-purple-400" />
  };

  return (
    <section id="regulations" className="py-20">
      <div className="flex items-center gap-4 mb-12">
        <Shield className="w-10 h-10 text-glow-red" />
        <h2 className="font-headline text-5xl font-black uppercase tracking-tighter">
          2026 <span className="text-secondary-container">Technical Regulations</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(regs).map(([key, section]) => (
          <div key={key} className="group relative p-8 rounded-3xl bg-surface-container/30 border border-white/10 backdrop-blur-xl hover:border-glow-red/50 transition-all duration-500">
            <div className="absolute -top-6 left-8 p-4 rounded-2xl bg-surface-container-high border border-white/10 shadow-2xl group-hover:scale-110 transition-transform">
              {icons[key as keyof typeof icons]}
            </div>
            
            <h3 className="text-2xl font-bold mt-6 mb-4 text-white group-hover:text-glow-red transition-colors">
              {section.title}
            </h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              {section.description}
            </p>
            
            <ul className="space-y-3">
              {section.specs.map((spec, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-on-surface/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-glow-red shadow-[0_0_8px_rgba(255,59,48,0.8)]" />
                  {spec}
                </li>
              ))}
            </ul>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-glow-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Regulations;
