import { 
  Globe,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Our Mission</div>
        <h2 className="text-4xl font-extrabold text-white">Decarbonizing Energy Storage Through Water</h2>
        <p className="text-slate-400 text-base leading-relaxed">
          Founded in 2021 by a team of electrochemical engineers and renewable energy veterans, HydroCell was born out of a single conviction: chemical energy storage via hydrogen is the ultimate bridge to a fully sustainable global grid.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Global Impact</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            With installations across North America, Europe, and remote research stations in Antarctica, our systems displace thousands of tons of carbon annually.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Uncompromising Safety</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every HydroCell unit undergoes rigorous stress testing exceeding aerospace safety standards, ensuring zero risk of leakage or containment failure.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Continuous Innovation</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Our R&D facility in Austin holds over 42 patents in solid-oxide membrane durability and nanomaterial hydrogen compression.
          </p>
        </div>
      </div>
    </div>
  );
}