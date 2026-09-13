import React from 'react';

export default function RiskLegend() {
  const levels = [
    { label: 'Low / Normal', range: '0–19', color: 'bg-slate-300', desc: 'Minimal surface runoff' },
    { label: 'Moderate', range: '20–49', color: 'bg-yellow-400', desc: 'Precipitation buildup' },
    { label: 'High', range: '50–74', color: 'bg-orange-500', desc: 'Catchment saturation' },
    { label: 'Critical', range: '75–100', color: 'bg-red-600', desc: 'Severe inundation zone' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
          Spatial Color Scale
        </h4>
        <span className="text-[10px] text-slate-400 font-medium">
          Continuous Flood Risk (0–100)
        </span>
      </div>

      {/* Smooth Gradient Visual Bar */}
      <div className="space-y-1">
        <div className="w-full h-3 rounded-full bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 shadow-inner"></div>
        <div className="flex justify-between text-[10px] font-mono text-slate-400 font-semibold px-0.5">
          <span>0 (Dry)</span>
          <span>30 (Moderate)</span>
          <span>60 (High)</span>
          <span>100 (Critical Peak)</span>
        </div>
      </div>

      {/* Risk Category Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
        {levels.map((lvl) => (
          <div key={lvl.label} className="bg-slate-50 border border-slate-200/80 rounded-xl p-2 flex flex-col">
            <div className="flex items-center space-x-1.5 mb-1">
              <span className={`w-2.5 h-2.5 rounded-full ${lvl.color} shrink-0`}></span>
              <span className="text-xs font-bold text-slate-800">{lvl.label}</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 font-semibold">{lvl.range}</span>
            <span className="text-[9px] text-slate-400 leading-tight mt-0.5">{lvl.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
