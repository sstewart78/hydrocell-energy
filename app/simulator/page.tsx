"use client";

import { useState } from "react";
import Simulator, { Sim, type Simulation } from "@/app/ui/simulator";

export default function Page() {
  const [simulationState, setSimulationState] = useState<Simulation>(Sim);

  return <Simulator simulationState={simulationState} setSimulationState={setSimulationState} />
}