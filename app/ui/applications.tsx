export default function Applications() {
  const apps = [
    {
      title: 'Residential Energy Independence',
      desc: 'Pair HydroCell with rooftop solar panels to store summer energy as hydrogen, ensuring winter and nighttime power security without toxic lithium batteries.'
    },
    {
      title: 'Remote Telecom & Outposts',
      desc: 'Eliminate diesel fuel delivery trucks in rugged terrain. HydroCell systems run autonomously for months, requiring only rainwater intake.'
    },
    {
      title: 'Utility Peak Shifting',
      desc: 'Wind and solar farms produce surplus power when demand is low. HydroCell converts this surplus into hydrogen gas to feed back into the grid during peak evening hours.'
    },
    {
      title: 'Emergency Disaster Relief',
      desc: 'Provide instant, silent, water-producing backup power during grid blackouts and natural disasters where traditional fuel supply chains collapse.'
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
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
              0{idx + 1}
            </div>
            <h3 className="text-xl font-bold text-white">{app.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{app.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}