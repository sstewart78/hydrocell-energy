"use client";

import { useState } from "react";
import TopNav from '@/app/ui/topnav'

export default function NavigationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="flex flex-col min-h-full">
      <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1">
        {children}
      </main>

    </div>
  );
}