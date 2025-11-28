import type { NodeKind, NodeMetadata } from "./CreateWorkflow";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const SUPPORTED_TRIGGERS = [{
    id : "timer",
    title : "Timer",
    description : "Runs this trigger after every x seconds/minutes",
},
{
    id : "price-trigger",
    title : "Price-Trigger",
    description : "Runs when price goes above or below certain number for an asset",
}]

export const TriggerSheet =({
    onSelect }: 
    {onSelect: (kind : NodeKind , metadta : NodeMetadata ) => void
}) => {
    return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Select Trigger</SheetTitle>
          <SheetDescription>
            Select the type trigger that you need.
            <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
            {SUPPORTED_TRIGGERS.map(({id , title }) => <>
            <SelectLabel>{title}</SelectLabel>
            <SelectItem onSelect={() =>onSelect(
                id,
                metadata
            )} value={id}>{title}</SelectItem>
            </>)}
          
          <SelectItem value="banana">Banana</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
}