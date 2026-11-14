import Overview from "@/app/ui/overview"

type PageProps = {
  setActiveTab: (tab: string) => void;
}

export default function Page( { setActiveTab }: PageProps ) {
  return <Overview setActiveTab={setActiveTab} />
}