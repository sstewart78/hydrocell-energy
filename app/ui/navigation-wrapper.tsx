"use client";

import { useState } from "react";
import TopNav from '@/app/ui/topnav';
import Footer from '@/app/ui/footer';
import Overview from "@/app/ui/overview";

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
      </div>
      <main className="flex-1">
        {children}
      </main>

      <Footer setActiveTab={setActiveTab}/>
    </div>
  );
}