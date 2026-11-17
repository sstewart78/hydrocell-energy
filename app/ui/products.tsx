"use client"

import { useState } from "react";
import { ChevronRight, X } from 'lucide-react';
import Image from "next/image";

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: Record<string, string>;
};

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


  const products: Product[] = [
    {
      id: 'hc-residence',
      name: 'HydroCell Home H-10',
      category: 'Residential Power',
      description: 'The world’s first integrated water electrolysis and hydrogen fuel storage unit designed for residential solar pairing.',
      image: '/hydrocell_home_h-10.avif',
      specs: {
        capacity: '30 kWh equivalent',
        output: '5 kW continuous',
        waterInput: '12L / cycle (filtered tap or rainwater)',
        footprint: 'Standard refrigerator size'
      }
    },
    {
      id: 'hc-remote',
      name: 'HydroCell Remote Station X',
      category: 'Remote Infrastructure',
      description: 'Robust, zero-maintenance autonomous power system engineered for telecom towers, mining camps, and research outposts.',
      image: '/hydrocell_remote_station_x.avif',
      specs: {
        capacity: '150 kWh equivalent',
        output: '15 kW continuous',
        operatingTemp: '-40°C to 55°C',
        redundancy: 'Triple-redundant telemetry'
      }
    },
    {
      id: 'hc-industrial',
      name: 'HydroCell Utility Grid-Box',
      category: 'Industrial Grid Storage',
      description: 'Megawatt-scale containerized power-to-gas storage unit for utility providers and renewable wind/solar farms.',
      image: '/hydrocell_utility_gridbox.avif',
      specs: {
        capacity: '1.2 MWh equivalent',
        output: '250 kW - 1 MW modular',
        oxygenRecovery: 'Commercial medical grade bypass',
        efficiency: 'Optimized co-generation'
      }
    },
    {
      id: 'hc-portable',
      name: 'HydroCell Nomad Generator',
      category: 'Portable Power',
      description: 'A silent, zero-emission replacement for diesel generators in emergency relief, film production, and outdoor construction.',
      image: '/hydrocell_nomad.avif',
      specs: {
        capacity: '5 kWh cartridge',
        output: '3 kW AC / DC output',
        weight: '38 kg with composite tanks',
        exhaust: 'Pure water vapor'
      }
    }
  ];

  return (
    <>
    {/* Product Detail Modal */}
    {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl shadow-cyan-500/10">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-semibold mb-4">
              {selectedProduct.category}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{selectedProduct.name}</h3>
            <p className="text-slate-400 text-sm mb-6">{selectedProduct.description}</p>
            
            <div className="space-y-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-6">
              <div className="text-xs font-semibold uppercase text-cyan-400 tracking-wider">Specifications</div>
              {Object.entries(selectedProduct.specs).map(([key, val]) => (
                <div key={key} className="flex justify-between text-sm py-1 border-b border-slate-900 last:border-0">
                  <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <span className="font-medium text-white">{val}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                alert(`Inquiry submitted for ${selectedProduct.name}. Our engineering team will contact you shortly.`);
                setSelectedProduct(null);
              }}
              className="w-full py-3.5 rounded-xl font-semibold bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all"
            >
              Request Specification Sheet & Quote
            </button>
          </div>
        </div>
      )}

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Product Lineup</div>
        <h2 className="text-4xl font-extrabold text-white">Engineered for Every Scale</h2>
        <p className="text-slate-400 text-base">
          From single-family homes to utility-scale renewable energy storage, discover our modular hydrogen power solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 p-8 rounded-3xl flex flex-col justify-between transition-all group shadow-xl"
          >
            <div>
              <div className="h-48 overflow-hidden relative">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={1200}
                  height={800}
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-cyan-500/30 text-xs font-semibold">
                  {product.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">Modular Configuration</span>
              <button
                onClick={() => setSelectedProduct(product)}
                className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 transition-all flex items-center space-x-2"
              >
                <span>View Specs</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  </>
)}