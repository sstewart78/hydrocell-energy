import Simulator, {type SimulatorProps}  from "@/app/ui/simulator"

type PageProps = SimulatorProps

export default function Page({simulationState, setSimulationState}: PageProps ) {
  return <Simulator simulationState={simulationState} setSimulationState={setSimulationState} />
}