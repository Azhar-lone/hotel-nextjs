import React from "react";

import { PanelLeft, PanelRight } from "lucide-react";

// importing components
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface SliderTypes {
  children: React.ReactNode;
  side: "left" | "top" | "bottom" | "right";
  className?: string;
}

const Slider: React.FC<SliderTypes> = ({
  children,
  side = "left",
  className,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="md:hidden">
          {side === "left" ? <PanelLeft /> : <PanelRight />}
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={side} className={cn(className)}>
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default Slider;
