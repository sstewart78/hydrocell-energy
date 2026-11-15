"use client";

import { useState } from "react";
import TopNav from '@/app/ui/topnav';
import Footer from '@/app/ui/footer';
import Overview from "@/app/ui/overview";
import Technology from "@/app/ui/technology";
import Products from "@/app/ui/products";

export default function NavigationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex flex-col min-h-full">
      <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>
        {activeTab === 'overview' && <Overview setActiveTab={setActiveTab} />}
        {activeTab === 'technology' && <Technology />}
        {activeTab === 'products' && <Products />}
        {/* {activeTab === 'applications' && <ApplicationsView />} */}
        {/* {activeTab === 'simulator' && <SimulatorView simulationState={simulationState} setSimulationState={setSimulationState} />} */}
        {/* {activeTab === 'about' && <AboutView />} */}
        {/* {activeTab === 'contact' && <ContactView />} */}
      </div>
      <main className="flex-1">
        {children}
      </main>

      <Footer setActiveTab={setActiveTab}/>
    </div>
  );
}