import Image from "next/image";
import { assetPath } from "@/app/lib/config";

export default function Applications() {
  const apps = [
    {
      title: 'Residential Energy Independence',
      desc: 'Pair HydroCell with rooftop solar panels to store summer energy as hydrogen, ensuring winter and nighttime power security without toxic lithium batteries.',
      image: assetPath('/residential_energy_independence.avif')
    },
    {
      title: 'Microgrid Communities',
      desc: 'Decentralized neighborhood power systems fueled entirely by water and solar excess, ensuring uninterrupted community resilience.',
      image: assetPath('/hydrocell_microgrid_community.webp')
    },
    {
      title: 'Industrial Electrolysis Facility',
      desc: 'Megawatt-scale green hydrogen production for heavy industries, steel manufacturing, and commercial utility storage.',
      image: assetPath('/hydrocell_electrolysis_facility.webp')
    },
    {
      title: 'Marine & Emergency Deployment',
      desc: 'Zero-emission emergency power generation and marine fuel cell systems delivering reliable off-grid electricity anywhere.',
      image: assetPath('/hydrocell_marine_fuel_system.webp')
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Real-World Deployments</div>
        <h2 className="text-4xl font-extrabold text-white">Where HydroCell Excels</h2>
        <p className="text-slate-400 text-base">
          Hydrogen energy storage shines brightest where traditional batteries fall short—long duration storage, extreme temperatures, and heavy loads.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {apps.map((app, idx) => (
          <div key={idx} className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl space-y-4 hover:border-cyan-500/40 transition-all">
            <div className="h-56 overflow-hidden">
              <Image
                src={app.image} 
                alt={app.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                width={1200}
                height={800}
              />
            </div>
            <div className="p-8 space-y-3">
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Deployment 0{idx + 1}</div>
              <h3 className="text-2xl font-bold text-white">{app.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{app.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}