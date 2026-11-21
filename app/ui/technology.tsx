"use client";

import { useState, useEffect } from 'react';
import { 
  Cpu,
  Droplets,
	ShieldCheck
 } from 'lucide-react'
 import Image from 'next/image';
 import { assetPath } from "@/app/lib/config";

export default function Technology() {
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [activeStage, setActiveStage] = useState('electrolysis');
  const [canvasActive, setCanvasActive] = useState(true);

  // Canvas animation effect for hydrogen/oxygen particles
  useEffect(() => {
    const canvas = document.getElementById('energyCanvas') as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number | null = null;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      type: 'H2' | 'O2';
    }> = [];

    // Initialize particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * animationSpeed,
        vy: (Math.random() - 0.5) * 2 * animationSpeed,
        radius: Math.random() * 3 + 2,
        type: Math.random() > 0.5 ? 'H2' : 'O2'
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.type === 'H2' ? '#06b6d4' : '#3b82f6';
        ctx.fill();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.font = '10px sans-serif';
        ctx.fillText(p.type, p.x + 6, p.y + 3);
      });

      if (canvasActive) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [animationSpeed, canvasActive]);


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Advanced Engineering</div>
        <h2 className="text-4xl font-extrabold text-white">The Science of HydroCell Architecture</h2>
        <p className="text-slate-400 text-base leading-relaxed">
          We combine cutting-edge materials science with robust chemical engineering to create appliances that rival lithium-ion batteries in safety, lifespan, and environmental footprint.
        </p>
      </div>
  
      {/* Interactive Animated SVG & Canvas Energy Schematic */}
      <div className="bg-slate-900/90 border border-cyan-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Interactive Energy Cycle Schematic</h3>
            <p className="text-sm text-slate-400">Inspect real-time molecular dissociation and gas pressure conversion.</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xs text-slate-400">Particle Speed:</span>
            <button 
              onClick={() => setAnimationSpeed(animationSpeed === 1 ? 2 : 1)}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-semibold hover:bg-cyan-500 hover:text-slate-950 transition cursor-pointer"
            >
              {animationSpeed}x Speed
            </button>
            <button 
              onClick={() => setCanvasActive(!canvasActive)}
              className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold hover:bg-slate-700 transition cursor-pointer"
            >
              {canvasActive ? 'Pause Animation' : 'Resume Animation'}
            </button>
          </div>
        </div>

        {/* Schematic Stage Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => setActiveStage('electrolysis')}
            className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
              activeStage === 'electrolysis' 
                ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-500/20' 
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="text-xs font-semibold text-cyan-400 mb-1">Stage 01</div>
            <div className="text-lg font-bold text-white mb-2">Water Electrolysis</div>
            <p className="text-xs leading-relaxed">2H₂O + Electricity → 2H₂ + O₂</p>
          </button>

          <button
            onClick={() => setActiveStage('storage')}
            className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
              activeStage === 'storage' 
                ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-500/20' 
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="text-xs font-semibold text-cyan-400 mb-1">Stage 02</div>
            <div className="text-lg font-bold text-white mb-2">Nanomaterial Storage</div>
            <p className="text-xs leading-relaxed">Triple-redundant carbon nanotube tanks at 700 bar</p>
          </button>

          <button
            onClick={() => setActiveStage('generation')}
            className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
              activeStage === 'generation' 
                ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-500/20' 
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="text-xs font-semibold text-cyan-400 mb-1">Stage 03</div>
            <div className="text-lg font-bold text-white mb-2">Fuel Cell Generation</div>
            <p className="text-xs leading-relaxed">2H₂ + O₂ → Electricity + Heat + Pure H₂O Vapor</p>
          </button>
        </div>

        {/* Visual Architectural Schematic Diagram */}
        <div className="bg-slate-950 border border-cyan-500/30 rounded-2xl p-6 mb-6 overflow-x-auto">
          <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4 text-center">
            Interactive Engineering Piping & Instrumentation Diagram (P&ID)
          </div>
          
          <svg viewBox="0 0 900 260" className="w-full min-w-175 h-auto select-none">
            <defs>
              <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
              <marker id="arrowCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#06b6d4" />
              </marker>
              <marker id="arrowBlue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6" />
              </marker>
              <marker id="arrowIndigo" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#6366f1" />
              </marker>
            </defs>

            {/* Background Grid */}
            <pattern id="pidGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(6, 182, 212, 0.06)" strokeWidth="1" />
            </pattern>
            <rect width="900" height="260" fill="url(#pidGrid)" rx="12" />

            {/* Connecting Pipes */}
            {/* Tank to Electrolyzer */}
            <path d="M 170 110 L 245 110" stroke="#06b6d4" strokeWidth="4" strokeDasharray={activeStage === 'electrolysis' ? '6,4' : 'none'} markerEnd="url(#arrowCyan)" />
            <text x="207" y="98" fill="#06b6d4" fontSize="10" textAnchor="middle" fontWeight="bold">H₂O Feed</text>

            {/* Electrolyzer to H2 Storage */}
            <path d="M 410 95 L 490 95" stroke="#3b82f6" strokeWidth="4" strokeDasharray={activeStage === 'storage' ? '6,4' : 'none'} markerEnd="url(#arrowBlue)" />
            <text x="450" y="83" fill="#3b82f6" fontSize="10" textAnchor="middle" fontWeight="bold">2H₂ Gas</text>

            {/* Electrolyzer O2 Bypass to Fuel Cell */}
            <path d="M 330 175 L 330 220 L 745 220 L 745 180" fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="4,4" markerEnd="url(#arrowCyan)" />
            <text x="540" y="212" fill="#10b981" fontSize="10" textAnchor="middle" fontWeight="bold">Closed-Loop O₂ Recovery Line (+14% Efficiency)</text>

            {/* H2 Storage to Fuel Cell */}
            <path d="M 620 110 L 680 110" stroke="#6366f1" strokeWidth="4" strokeDasharray={activeStage === 'generation' ? '6,4' : 'none'} markerEnd="url(#arrowIndigo)" />
            <text x="650" y="98" fill="#818cf8" fontSize="10" textAnchor="middle" fontWeight="bold">700 Bar</text>

            {/* Water Return Loop */}
            <path d="M 760 55 L 760 25 L 105 25 L 105 55" fill="none" stroke="#06b6d4" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowCyan)" />
            <text x="440" y="18" fill="#67e8f9" fontSize="10" textAnchor="middle">Pure H₂O Condensate Return Loop</text>

            {/* COMPONENT 1: WATER RESERVOIR */}
            <g className="cursor-pointer" onClick={() => setActiveStage('electrolysis')}>
              <rect x="40" y="60" width="130" height="110" rx="12" fill={activeStage === 'electrolysis' ? '#083344' : '#0f172a'} stroke={activeStage === 'electrolysis' ? '#22d3ee' : '#1e293b'} strokeWidth="2.5" />
              <rect x="48" y="105" width="114" height="57" rx="6" fill="rgba(6, 182, 212, 0.25)" />
              <text x="105" y="84" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">1. H₂O Tank</text>
              <text x="105" y="135" fill="#22d3ee" fontSize="10" textAnchor="middle">Deionized Water</text>
              <text x="105" y="150" fill="#94a3b8" fontSize="9" textAnchor="middle">RO Filtered</text>
            </g>

            {/* COMPONENT 2: SOLID-OXIDE ELECTROLYZER */}
            <g className="cursor-pointer" onClick={() => setActiveStage('electrolysis')}>
              <rect x="250" y="55" width="160" height="120" rx="12" fill={activeStage === 'electrolysis' ? '#083344' : '#0f172a'} stroke={activeStage === 'electrolysis' ? '#22d3ee' : '#1e293b'} strokeWidth="2.5" />
              {/* Internal Cell Plates */}
              {[275, 295, 315, 335, 355, 375].map((xPos, idx) => (
                <line key={idx} x1={xPos} y1="88" x2={xPos} y2="145" stroke="#06b6d4" strokeWidth="3" opacity="0.7" />
              ))}
              <text x="330" y="77" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">2. Electrolyzer Stack</text>
              <text x="330" y="162" fill="#22d3ee" fontSize="9" textAnchor="middle">2H₂O → 2H₂ + O₂ (82% Eff.)</text>
            </g>

            {/* COMPONENT 3: NANOTUBE H2 STORAGE */}
            <g className="cursor-pointer" onClick={() => setActiveStage('storage')}>
              <rect x="495" y="60" width="125" height="110" rx="28" fill={activeStage === 'storage' ? '#172554' : '#0f172a'} stroke={activeStage === 'storage' ? '#60a5fa' : '#1e293b'} strokeWidth="2.5" />
              <text x="557" y="92" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">3. H₂ Vessel</text>
              <text x="557" y="115" fill="#60a5fa" fontSize="11" fontWeight="bold" textAnchor="middle">700 BAR</text>
              <text x="557" y="135" fill="#94a3b8" fontSize="9" textAnchor="middle">Carbon Nanotube</text>
              <text x="557" y="148" fill="#94a3b8" fontSize="9" textAnchor="middle">Containment</text>
            </g>

            {/* COMPONENT 4: PEM FUEL CELL */}
            <g className="cursor-pointer" onClick={() => setActiveStage('generation')}>
              <rect x="685" y="55" width="165" height="120" rx="12" fill={activeStage === 'generation' ? '#1e1b4b' : '#0f172a'} stroke={activeStage === 'generation' ? '#818cf8' : '#1e293b'} strokeWidth="2.5" />
              <circle cx="767" cy="115" r="24" fill="rgba(99, 102, 241, 0.2)" stroke="#818cf8" strokeWidth="1.5" />
              <text x="767" y="119" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">⚡ kW</text>
              <text x="767" y="77" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">4. PEM Fuel Cell</text>
              <text x="767" y="162" fill="#a5b4fc" fontSize="9" textAnchor="middle">2H₂ + O₂ → Power + H₂O</text>
            </g>
          </svg>
        </div>

        {/* Embedded HTML5 Canvas & Particle Animation Area */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 relative overflow-hidden min-h-55 flex flex-col items-center justify-center">
          <canvas id="energyCanvas" width="800" height="200" className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
            Active Molecular Simulation: Generation
          </canvas>
          <div className="relative z-10 text-center space-y-2 bg-slate-950/75 backdrop-blur-sm px-6 py-4 rounded-2xl border border-slate-800">
            <div className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Active Molecular Simulation: {activeStage.toUpperCase()}
            </div>
            <p className="text-sm text-slate-300 max-w-md">
              {activeStage === 'electrolysis' && 'Visualizing catalytic dissociation of water molecules into diatomic hydrogen (cyan) and oxygen (blue) gas streams.'}
              {activeStage === 'storage' && 'Visualizing high-density hydrogen molecular compression inside carbon-nanotube reinforced pressure vessels.'}
              {activeStage === 'generation' && 'Visualizing proton-exchange recombination generating clean electrical current and pure water vapor.'}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-start space-x-4 p-6 bg-slate-900/60 border border-slate-800 rounded-2xl">
            <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Solid-Oxide Electrolysis Stacks</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Operating at high electrical density without precious metal catalysts, our proprietary electrode membranes achieve an industry-leading 82% conversion efficiency.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-slate-900/60 border border-slate-800 rounded-2xl">
            <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Multi-Layer Nanomaterial Storage</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Hydrogen embrittlement is eliminated through carbon-nanotube interior linings and triple-redundant pressure relief valves tested to 700 bar.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-slate-900/60 border border-slate-800 rounded-2xl">
            <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl shrink-0">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Oxygen Loop Optimization</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Rather than waste oxygen, our systems route high-purity $O_2$ directly into the fuel cell cathode chamber, increasing peak generation output by 14%.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br from-slate-900 to-slate-950 border border-cyan-500/30 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl font-bold text-white mb-6">Technical Specification Benchmark</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Electrolysis Efficiency</span>
                <span className="text-cyan-400 font-bold">82%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[82%] h-full bg-cyan-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Fuel Cell Generation Efficiency</span>
                <span className="text-cyan-400 font-bold">60%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[60%] h-full bg-cyan-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Total System Round-Trip Efficiency</span>
                <span className="text-cyan-400 font-bold">50%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[50%] h-full bg-cyan-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Byproduct Oxygen Purity</span>
                <span className="text-cyan-400 font-bold">99.8%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[99.8%] h-full bg-cyan-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-slate-900">
            <Image
              src={assetPath("/HydroCell_R_D_Testing.avif")} 
              alt="Engineers at HydroCell Innovation Lab" 
              className="w-full h-64 object-cover"
              width={1200}
              height={800}
            />
            <div className="p-4 bg-slate-950 border-t border-slate-900 text-xs text-slate-400 flex items-center justify-between">
              <span>HydroCell R&D Testing Laboratory, Austin TX</span>
              <span className="text-cyan-400 font-semibold">ISO-9001 Certified</span>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-slate-900">
            <Image 
              src={assetPath("/industrial_scale_green_hydrogen.avif")}
              alt="HydroCell Industrial Electrolysis Facility" 
              className="w-full h-64 object-cover"
              width={1200}
              height={800}
            />
            <div className="p-4 bg-slate-950 border-t border-slate-900 text-xs text-slate-400 flex items-center justify-between">
              <span>Industrial Scale Green Hydrogen Electrolysis</span>
              <span className="text-cyan-400 font-semibold">Automated Monitoring</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}