import SelectSafeComponent from "@/components/SelectSafeComponent";
import { Button } from "@/components/ui/button";


export default function Landing() {
  return (
    <>
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4 font-timmana font-white">Select an existing SAFE</h1>
        <SelectSafeComponent />
        <Button className="mt-6 bg-[#535353]!">Create New SAFE</Button>
      </div>
    </>
  )
}
