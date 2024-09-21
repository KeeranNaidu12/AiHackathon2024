import React from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const labelStyle = {
  fontSize: "1.1rem",
  fontWeight: "bold",
};

function UserDataForm() {
  const handleClick = async () => {
    const studentPreferences =
      "21, male. Budget: $1200 a month. Prefers furnished room and likes movies";
    const listingDesc =
      "A cozy 2-bedroom apartment with a beautiful view near a movie theatre";

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentPreferences,
          listingDesc,
        }),
      });

      const data = await res.json();
      // TODO: pass to results pages
    } catch (error) {
      console.error("Error:", error);
    }
    console.log("Button clicked");
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="w-[80%]">
        {/* Commented out, will add if feel needed */}
        {/* <CardHeader>
          <CardTitle>Edit your </CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader> */}
        <CardHeader></CardHeader> {/* Added for default padding */}
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-row gap-4 items-center">
                <Label style={labelStyle} htmlFor="beds">
                  Beds
                </Label>
                <Select>
                  <SelectTrigger id="beds">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="Studio">Studio</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                  </SelectContent>
                </Select>

                <Label style={labelStyle} htmlFor="bathrooms">
                  Bathrooms
                </Label>
                <Select>
                  <SelectTrigger id="bathrooms">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="1.5">1.5</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="2.5+">2.5+</SelectItem>
                  </SelectContent>
                </Select>
                <Label style={labelStyle} htmlFor="roommates">
                  Roommates
                </Label>
                <Select>
                  <SelectTrigger id="roommates">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-4 items-center justify-between w-full">
                <div className="flex flex-row gap-10">
                  <Label style={labelStyle} htmlFor="Parking">
                    Parking
                  </Label>
                  <RadioGroup defaultValue="yes">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">No</Label>
                      <RadioGroupItem
                        value="no-preference"
                        id="no-preference"
                      />
                      <Label htmlFor="no-preference">No Preference</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex flex-row gap-10">
                  <Label style={labelStyle} htmlFor="Furnished">
                    Furnished
                  </Label>
                  <RadioGroup defaultValue="yes">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">No</Label>
                      <RadioGroupItem
                        value="no-preference"
                        id="no-preference"
                      />
                      <Label htmlFor="no-preference">No Preference</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleClick}>Show me some bedder rentals!</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default UserDataForm;
