"use client"

import {
  type Dispatch, 
  type SetStateAction,
  useEffect,
} from "react";
import { ChevronRight } from 'lucide-react';

export type Simulation = {
  waterLevel: number,
  hydrogenPressure: number,
  oxygenFlow: number,
  powerOutput: number,
  isOperating: boolean,
  mode: string
};

export const Sim: Simulation = { 
    waterLevel: 85,
    hydrogenPressure: 45,
    oxygenFlow: 8.2,
    powerOutput: 5.2,
    isOperating: true,
    mode: 'storage'
}



export type SimulatorProps = {
  simulationState: Simulation;
  setSimulationState: Dispatch<SetStateAction<Simulation>>;
};

export default function Simulator({simulationState, setSimulationState}: SimulatorProps) {
  
  // Interactive simulation loop
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (simulationState.isOperating) {
      interval = setInterval(() => {
        setSimulationState(prev => ({
          ...prev,
          waterLevel: prev.mode === 'storage' ? Math.max(20, prev.waterLevel - 0.2) : Math.min(95, prev.waterLevel + 0.3),
          hydrogenPressure: prev.mode === 'storage' ? Math.min(70, prev.hydrogenPressure + 0.5) : Math.max(15, prev.hydrogenPressure - 0.7),
          powerOutput: prev.mode === 'storage' ? 0 : +(3.5 + Math.random() * 3).toFixed(1)
        }));
      }, 1000);
    }
    return () => {
      if (interval !== undefined) clearInterval(interval);
    }
  }, [setSimulationState, simulationState.isOperating, simulationState.mode]);

  const toggleMode = () => {
    setSimulationState(prev => ({
      ...prev,
      mode: prev.mode === 'storage' ? 'generation' : 'storage'
    }));
  };

  const togglePower = () => {
    setSimulationState(prev => ({
      ...prev,
      isOperating: !prev.isOperating
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Interactive Dashboard</div>
        <h2 className="text-4xl font-extrabold text-white">HydroCell Live System Simulator</h2>
        <p className="text-slate-400 text-base">
          Test drive our power-to-gas-to-power cycle in real-time. Toggle between hydrogen storage mode and electricity generation mode.
        </p>
      </div>

      <div className="bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Control Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-8 mb-8 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${simulationState.isOperating ? 'bg-emerald-400 animate-pulse' : 'bg-rose-500'}`} />
            <span className="text-sm font-semibold text-slate-300">
              System Status: {simulationState.isOperating ? (simulationState.mode === 'storage' ? 'Electrolysis Active (Storing H₂)' : 'Fuel Cell Active (Generating Power)') : 'System Standby'}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMode}
              className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-slate-800 text-cyan-400 border border-cyan-500/30 hover:bg-slate-700 transition-all"
            >
              Mode: {simulationState.mode === 'storage' ? '⚡ Storing Energy' : '💡 Generating Power'}
            </button>
            <button
              onClick={togglePower}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm ${
                simulationState.isOperating ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
              }`}
            >
              {simulationState.isOperating ? 'Pause System' : 'Start System'}
            </button>
          </div>
        </div>

        {/* Live Gauges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Water Reservoir Level</div>
            <div className="text-3xl font-black text-white mb-2">{simulationState.waterLevel.toFixed(1)}%</div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 transition-all duration-500" style={{ width: `${simulationState.waterLevel}%` }} />
            </div>
          </div>

          <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Hydrogen Tank Pressure</div>
            <div className="text-3xl font-black text-cyan-400 mb-2">{simulationState.hydrogenPressure.toFixed(1)} <span className="text-sm font-normal text-slate-400">bar</span></div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${(simulationState.hydrogenPressure / 70) * 100}%` }} />
            </div>
          </div>

          <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Oxygen Recovery Rate</div>
            <div className="text-3xl font-black text-emerald-400 mb-2">{simulationState.oxygenFlow} <span className="text-sm font-normal text-slate-400">L/min</span></div>
            <span className="text-xs text-slate-400">Recycled internally to boost efficiency</span>
          </div>

          <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Net Power Output</div>
            <div className="text-3xl font-black text-indigo-400 mb-2">{simulationState.powerOutput} <span className="text-sm font-normal text-slate-400">kW</span></div>
            <span className="text-xs text-slate-400">{simulationState.mode === 'storage' ? 'Consuming surplus solar/wind' : 'Supplying home microgrid'}</span>
          </div>
        </div>

        {/* Visual Schematic Diagram */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center space-y-4">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Live System Flowchart</div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium">
            <div className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
              💧 Pure Water Reservoir ({simulationState.waterLevel.toFixed(0)}%)
            </div>
            <ChevronRight className="w-5 h-5 text-cyan-400 hidden md:block" />
            <div className="px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              ⚡ Solid-Oxide Electrolyzer
            </div>
            <ChevronRight className="w-5 h-5 text-cyan-400 hidden md:block" />
            <div className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
              🔋 $H_2$ Storage ({simulationState.hydrogenPressure.toFixed(0)} bar)
            </div>
            <ChevronRight className="w-5 h-5 text-cyan-400 hidden md:block" />
            <div className="px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
              💡 Fuel Cell Power Output
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}