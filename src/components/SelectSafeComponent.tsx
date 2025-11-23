import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"


export default function SelectSafeComponent() {
  return (
    <>
      <Card className="w-full max-w-md mx-auto border-2 border-white bg-black">
        <CardContent className="bg-black">
          {/* badge with multisig threshold - input with address and chains deployed to - action button "open safe" */}
          <div className="flex flex-row gap-2">
            <div><Badge>2/4</Badge></div>
            <div><span className="rounded-md bg-white">0xecb...6e05</span></div>
            <div><Button className="bg-[#535353]!">Open Safe</Button></div>
          </div>
          <div className="flex flex-row gap-2">
            <div><Badge>2/4</Badge></div>
            <div><span className="rounded-md bg-white">0xhie...6099</span></div>
            <div><Button className="bg-[#535353]!">Open Safe</Button></div>
          </div>
          <div className="flex flex-row gap-2">
            <div><Badge>2/4</Badge></div>
            <div><span className="rounded-md bg-white">0xabc...nb34</span></div>
            <div><Button className="bg-[#535353]!">Open Safe</Button></div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
