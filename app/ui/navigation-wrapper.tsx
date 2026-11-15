"use client";

import { useState } from "react";
import TopNav from '@/app/ui/topnav';
import Footer from '@/app/ui/footer';
import Overview from "@/app/ui/overview";
import Technology from "@/app/ui/technology";
import Products from "@/app/ui/products";
import Applications from "@/app/ui/applications";
import Simulator, { Sim, type Simulation} from "./simulator";

export default function NavigationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("overview");
  const [simulationState, setSimulationState] = useState<Simulation>(Sim);

  return (
    <div className="flex flex-col min-h-full">
      <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>
        {activeTab === 'overview' && <Overview setActiveTab={setActiveTab} />}
        {activeTab === 'technology' && <Technology />}
        {activeTab === 'products' && <Products />}
        {activeTab === 'applications' && <Applications />}
        {activeTab === 'simulator' && <Simulator simulationState={simulationState} setSimulationState={setSimulationState} />}
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