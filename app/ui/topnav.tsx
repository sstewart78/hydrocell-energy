"use client";

import { useState } from "react";
import { 
	Droplets,
	Menu,
	X,
 } from 'lucide-react'

type TopNavProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function TopNav({ activeTab, setActiveTab }: TopNavProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'technology', label: 'Technology' },
    { id: 'products', label: 'Products' },
    { id: 'applications', label: 'Applications' },
    { id: 'simulator', label: 'Live Simulator' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('overview')}>
          <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <Droplets className="w-6 h-6 text-slate-950 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-xl font-black tracking-wider bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              HYDROCELL
            </span>
            <span className="block text-[10px] tracking-widest text-cyan-500 uppercase font-semibold">
              Energy Systems  
            </span>
					</div>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
					{navLinks.map((link) => (
						<button
							key={link.id}
							onClick={() => setActiveTab(link.id)}
							className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
									activeTab === link.id
									? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm shadow-cyan-500/20'
									: 'text-slate-300 hover:text-white hover:bg-slate-900/60'
							}`}
						>
							{link.label}
						</button>
					))}
				</nav>

				<div className="hidden md:flex items-center space-x-4">
					<button
						onClick={() => setActiveTab('contact')}
						className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/20 active:scale-95"
					>
						Request Quote
					</button>
				</div>

        {/* Mobile Menu Button */}
        <button
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
					>
					{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
      </div>

			{/* Mobile Menu Dropdown */}
			{mobileMenuOpen && (
				<div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-4 pt-2 pb-6 space-y-2">
					{navLinks.map((link) => (
						<button
							key={link.id}
							onClick={() => {
									setActiveTab(link.id);
									setMobileMenuOpen(false);
							}}
							className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
									activeTab === link.id
									? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
									: 'text-slate-300 hover:bg-slate-900'
							}`}
						>
							{link.label}
						</button>
					))}
          <div className="pt-4">
            <button
							onClick={() => {
								setActiveTab('contact');
								setMobileMenuOpen(false);
							}}
							className="w-full py-3 rounded-xl font-semibold text-sm bg-cyan-500 text-slate-950 text-center shadow-lg shadow-cyan-500/20"
							>
							Request Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}