"use client";

import Image from 'next/image';

import { 
  ArrowRight,
  Info,
	Sparkles
 } from 'lucide-react'

type OverviewProps = {
  setActiveTab: (tab: string) => void;
}

export default function Overview({ setActiveTab }: OverviewProps) {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide">
              <Sparkles className="w-4 h-4" />
              <span>Next-Gen Water-Based Hydrogen Energy Storage</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
              Power from <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Water</span>. <br />
              Energy for Life.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              HydroCell converts excess electricity and pure water into clean hydrogen energy storage. Zero emissions, infinite scalability, absolute reliability.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <button
                onClick={() => setActiveTab('simulator')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/20 flex items-center justify-center space-x-2 transition-all active:scale-95"
              >
                <span>Launch Interactive Cycle</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setActiveTab('technology')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base bg-slate-900 text-slate-200 border border-slate-800 hover:bg-slate-800 hover:text-white flex items-center justify-center space-x-2 transition-all"
              >
                <Info className="w-5 h-5 text-cyan-400" />
                <span>Explore Technology</span>
              </button>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-slate-900">
                <Image
                  src="/hydrocell_hc-r1_residential_energy_unit.avif"
                  width={1200}
                  height={800}
                  className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                  alt="HydroCell HC-R1 Residential Unit & Innovation Lab"
                />
                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-slate-950 via-slate-950/70 to-transparent p-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-1">Flagship Installation</div>
                  <div className="text-white font-bold text-lg">HydroCell HC-R1 Residential Energy Unit & R&D Lab</div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-slate-900">
              <div className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-black text-cyan-400 mb-1">82%</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Electrolysis Efficiency</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-black text-cyan-400 mb-1">0g</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Carbon Emissions</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-black text-cyan-400 mb-1">100%</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Recyclable H₂O Loop</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-black text-cyan-400 mb-1">24/7</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">All-Weather Backup</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Cycle Explanation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">The Power-to-Gas-to-Power Cycle</h2>
          <p className="text-slate-400 text-base">
            Water is not an energy source; it is the ultimate secure chemical storage medium. Here is how HydroCell harnesses it safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl relative group hover:border-cyan-500/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
              01
            </div>
            <h3 className="text-xl font-bold text-white mb-3">1. Water Electrolysis</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Using excess solar or wind electricity, our advanced solid-oxide electrolyzer splits purified water ($2H_2O$) into high-purity hydrogen and oxygen.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl relative group hover:border-cyan-500/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
              02
            </div>
            <h3 className="text-xl font-bold text-white mb-3">2. Compact Storage</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Hydrogen is securely compressed in nanomaterial-lined tanks. Byproduct oxygen is either safely vented or recycled internally to boost overall system efficiency.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl relative group hover:border-cyan-500/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
              03
            </div>
            <h3 className="text-xl font-bold text-white mb-3">3. Fuel Cell Generation</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              When power is needed, hydrogen recombines with oxygen in our proton-exchange membrane fuel cell, generating electricity, pure heat, and clean water output.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}