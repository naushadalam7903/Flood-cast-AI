import React, { useEffect } from 'react';
import { Play, Pause, RotateCcw, Calendar, Clock, ChevronRight } from 'lucide-react';

export default function TimelineControl({
  timeline = [],
  currentStepIndex,
  onSelectStepIndex,
  isPlaying,
  onTogglePlay,
  onReset
}) {
  // Auto-play interval effect
  useEffect(() => {
    let interval = null;
    if (isPlaying && timeline.length > 0) {
      interval = setInterval(() => {
        onSelectStepIndex((prev) => (prev + 1) % timeline.length);
      }, 2400);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, timeline.length, onSelectStepIndex]);

  if (!timeline.length) return null;
  const currentStep = timeline[currentStepIndex] || timeline[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
        {/* Step Info & Description */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onTogglePlay}
            className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
            title={isPlaying ? 'Pause Replay' : 'Play Timeline Replay'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>

          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                {currentStep.step}
              </span>
              <span className="text-sm font-semibold text-slate-800">
                {currentStep.date}
              </span>
              <span className="text-xs text-slate-500">
                ({currentStep.lead_time_days > 0 ? `${currentStep.lead_time_days} days before peak` : 'Peak Event'})
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {currentStep.description}
            </p>
          </div>
        </div>

        {/* Observation time & data lag */}
        <div className="flex items-center space-x-4 text-xs text-slate-500 border-t md:border-t-0 pt-2 md:pt-0 border-slate-100">
          <div className="flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Satellite Obs: <span className="font-medium text-slate-700">{currentStep.satellite_observation_time?.slice(0, 16).replace('T', ' ')}Z</span></span>
          </div>
        </div>
      </div>

      {/* Timeline Steps Buttons & Slider */}
      <div className="space-y-2">
        <div className="grid grid-cols-6 gap-1.5">
          {timeline.map((item, idx) => {
            const isSelected = idx === currentStepIndex;
            return (
              <button
                key={item.step}
                onClick={() => onSelectStepIndex(idx)}
                className={`py-2 px-1 rounded-xl text-center transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 font-semibold shadow-xs scale-102'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 font-medium'
                }`}
              >
                <div className="text-xs tracking-tight">{item.step}</div>
                <div className="text-[10px] opacity-80">{item.date.slice(5)}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
