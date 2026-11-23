"use client"

import { useState } from "react";
import {
  CheckCircle2
} from 'lucide-react';

export default function ContactView() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Get in Touch</div>
        <h2 className="text-4xl font-extrabold text-white">Speak With Our Hydrogen Engineers</h2>
        <p className="text-slate-400 text-base">
          Whether you are designing a net-zero residential home or a utility-scale microgrid, our team is ready to assist.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl">
        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Inquiry Received Successfully</h3>
            <p className="text-slate-400 text-sm">
              Thank you for reaching out to HydroCell Energy Systems. A senior application engineer will review your specifications and contact you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 px-6 py-3 rounded-xl bg-slate-800 text-cyan-400 text-sm font-semibold hover:bg-slate-700 transition"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
                  placeholder="Dr. Jonathan Turner"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Work Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
                  placeholder="jturner@cleanenergy.org"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Application / System Scale</label>
              <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition">
                <option>Residential Powerwall (H-10)</option>
                <option>Remote Microgrid Station</option>
                <option>Utility Grid Storage (1MW+)</option>
                <option>Portable Nomad Generator</option>
                <option>General R&D / Partnership Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Project Details & Requirements</label>
              <textarea
                rows={4}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
                placeholder="Describe your energy requirements, location, and timeline..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-base bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
            >
              Submit Engineering Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}