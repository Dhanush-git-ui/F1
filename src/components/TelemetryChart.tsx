import React from 'react';
// Note: You will need to run 'npm install recharts' for this to work
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TelemetryChart: React.FC = () => {
  return (
    <div className="bg-f1-black p-6 rounded-xl border border-f1-grey min-h-[400px] flex flex-col justify-center items-center">
      <div className="text-f1-grey uppercase tracking-widest text-sm font-bold mb-4">Telemetry Visualization Output</div>
      <div className="w-full h-64 bg-f1-carbon/50 rounded flex items-center justify-center border border-dashed border-f1-grey">
        <p className="text-f1-grey text-center px-8">
          [Telemetry Data Stream: Speed, Gear, Brake, Throttle]
          <br />
          <span className="text-xs italic">Install 'recharts' to enable multi-metric charting.</span>
        </p>
      </div>
      <div className="mt-6 flex gap-4">
        <label className="flex items-center gap-2 text-xs">
          <input type="checkbox" checked readOnly className="accent-f1-red" /> SPEED
        </label>
        <label className="flex items-center gap-2 text-xs">
          <input type="checkbox" checked readOnly className="accent-f1-red" /> THROTTLE
        </label>
        <label className="flex items-center gap-2 text-xs">
          <input type="checkbox" checked readOnly className="accent-f1-red" /> BRAKE
        </label>
      </div>
    </div>
  );
};

export default TelemetryChart;
