import { 
	Droplets,
  Mail,
  MapPin,
  Phone,
 } from 'lucide-react'

type FooterProps = {
  setActiveTab: (tab: string) => void;
};

export default function Footer({ setActiveTab }: FooterProps) {
  return (

    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center">
              <Droplets className="w-5 h-5 text-slate-950" />
            </div>
            <span className="text-lg font-black tracking-wider text-white">HYDROCELL</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Transforming water into reliable, zero-emission hydrogen energy storage for homes, microgrids, and industrial infrastructure.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Technology</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><button onClick={() => setActiveTab('technology')} className="hover:text-cyan-400 transition">Water Electrolysis</button></li>
            <li><button onClick={() => setActiveTab('technology')} className="hover:text-cyan-400 transition">Solid Oxide Stacks</button></li>
            <li><button onClick={() => setActiveTab('simulator')} className="hover:text-cyan-400 transition">Power-to-Gas Cycle</button></li>
            <li><button onClick={() => setActiveTab('technology')} className="hover:text-cyan-400 transition">Oxygen Byproduct Recovery</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><button onClick={() => setActiveTab('products')} className="hover:text-cyan-400 transition">Residential Powerwall</button></li>
            <li><button onClick={() => setActiveTab('products')} className="hover:text-cyan-400 transition">Remote Microgrid Systems</button></li>
            <li><button onClick={() => setActiveTab('products')} className="hover:text-cyan-400 transition">Industrial Grid Storage</button></li>
            <li><button onClick={() => setActiveTab('products')} className="hover:text-cyan-400 transition">Portable Generators</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Global Headquarters</h4>
          <div className="space-y-3 text-sm text-slate-400">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
              <span>Hydrogen Innovation Park, 400 CleanTech Way, Austin, TX 78701</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-500 shrink-0" />
              <span>+1 (800) 555-HYDRO</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-500 shrink-0" />
              <span>inquiries@hydrocell-energy.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
        <p>© 2026 HydroCell Energy Systems Inc. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="#privacy" className="hover:text-slate-400">Privacy Policy</a>
          <a href="#terms" className="hover:text-slate-400">Terms of Service</a>
          <a href="#safety" className="hover:text-slate-400">Safety & Compliance</a>
        </div>
      </div>
    </footer>
  )
}