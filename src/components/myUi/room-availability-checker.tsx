"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
interface RoomAvailabilityCheckerProps {
  className?: string;
}

export function RoomAvailabilityChecker({
  className,
}: RoomAvailabilityCheckerProps) {
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });
  const [guests, setGuests] = useState("2");

  const handleCheckAvailability = () => {
    if (!dateRange.from || !dateRange.to) {
      toast("Please select dates", {
        description: "You need to select both check-in and check-out dates.",
      });
      return;
    }

    toast("Checking availability", {
      description: `Checking rooms for ${guests} guests from ${format(
        dateRange.from,
        "PPP"
      )} to ${format(dateRange.to, "PPP")}.`,
    });

    // Here you would typically redirect to a search results page or fetch availability data
  };

  return (
    <Card className={cn("border-gold/20 shadow-gold-sm", className)}>
      <CardHeader className="bg-gold/5 border-b border-gold/10">
        <CardTitle className="font-serif text-xl">Check Availability</CardTitle>
        <CardDescription>Find your perfect room for your stay</CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Check-in Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !dateRange.from && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.from
                    ? format(dateRange.from, "PPP")
                    : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange.from}
                  selected={dateRange}
                  onSelect={() => setDateRange}
                  numberOfMonths={1}
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Check-out Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !dateRange.to && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.to ? format(dateRange.to, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange.from}
                  selected={dateRange}
                  onSelect={() => setDateRange}
                  numberOfMonths={1}
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Guests</label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select number of guests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Guest</SelectItem>
              <SelectItem value="2">2 Guests</SelectItem>
              <SelectItem value="3">3 Guests</SelectItem>
              <SelectItem value="4">4 Guests</SelectItem>
              <SelectItem value="5">5+ Guests</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="bg-gold/5 border-t border-gold/10 p-6">
        <Button onClick={handleCheckAvailability} className="w-full btn-luxury">
          Check Availability
        </Button>
      </CardFooter>
    </Card>
  );
}
