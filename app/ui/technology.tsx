import { 
  Cpu,
  Droplets,
	ShieldCheck
 } from 'lucide-react'

export default function Technology() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Advanced Engineering</div>
        <h2 className="text-4xl font-extrabold text-white">The Science of HydroCell Architecture</h2>
        <p className="text-slate-400 text-base leading-relaxed">
          We combine cutting-edge materials science with robust chemical engineering to create appliances that rival lithium-ion batteries in safety, lifespan, and environmental footprint.
        </p>
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
      </div>
    </div>
  );
}