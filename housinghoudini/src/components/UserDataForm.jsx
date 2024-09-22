import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import SelecterComponent from "./SelecterComponent";
import Image from "next/image";

const labelStyle = {
  fontSize: "1.1rem",
  fontWeight: "bold",
};

const toggleStyleOn = {
  border: "1px solid #000",
};

const toggleStyleOff = {
  border: "1px solid #ccc",
};

const textAreaStyle = {
  marginTop: "1em",
  width: "100%",
  height: "100px",
};

function UserDataForm() {
  const [toggles, setToggles] = useState({
    electricity: false,
    water: false,
    wifi: false,
  });

  const handleToggleChange = (name) => (event) => {
    setToggles({
      ...toggles,
      [name]: event.target.checked,
    });
  };
  
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
        <CardHeader></CardHeader> {/* Added for default padding */}
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-row gap-4 items-center">
                <Label style={labelStyle} htmlFor="beds">
                  Beds
                </Label>
                <SelecterComponent
                  id="beds"
                  opt1="S"
                  opt2="1"
                  opt3="2"
                  opt4="3+"
                />
                <Label style={labelStyle} htmlFor="bathrooms">
                  Bathrooms
                </Label>
                <SelecterComponent
                  id="bathrooms"
                  opt1="1"
                  opt2="1.5"
                  opt3="2"
                  opt4="2.5+"
                />
                <Label style={labelStyle} htmlFor="roommates">
                  Roommates
                </Label>
                <SelecterComponent
                  id="roommates"
                  opt1="0"
                  opt2="1"
                  opt3="2"
                  opt4="3+"
                />
              </div>

              <div className="flex flex-row gap-4 items-center">
                <Label style={labelStyle} htmlFor="laundry">
                  Laundry
                </Label>
                <SelecterComponent
                  id="laundry"
                  opt1="In-unit"
                  opt2="On-site-shared"
                  opt3="Laundromat nearby"
                  opt4="None"
                />
                <Label style={labelStyle} htmlFor="pets">
                  Pets
                </Label>
                <SelecterComponent
                  id="pets"
                  opt1="Dog"
                  opt2="Car"
                  opt3="Small pets"
                  opt4="None"
                />
                <Label style={labelStyle} htmlFor="gym">
                  Gym
                </Label>
                <SelecterComponent
                  id="gym"
                  opt1="On-site"
                  opt2="Nearby"
                  opt3="None"
                  opt4="No preference"
                />
              </div>

              <div className="flex gap-4 items-center justify-between w-full">
                <div className="flex gap-4 items-center w-full">
                  <Label style={labelStyle} htmlFor="utilities">
                    I want _______ included in rent
                  </Label>
                  <Toggle
                    style={toggles.electricity ? toggleStyleOn : toggleStyleOff}
                    checked={toggles.electricity}
                    onChange={handleToggleChange("electricity")}
                  >
                    Electricity
                  </Toggle>
                  <Toggle
                    style={toggles.water ? toggleStyleOn : toggleStyleOff}
                    checked={toggles.water}
                    onChange={handleToggleChange("water")}
                  >
                    Water
                  </Toggle>
                  <Toggle
                    style={toggles.wifi ? toggleStyleOn : toggleStyleOff}
                    checked={toggles.wifi}
                    onChange={handleToggleChange("wifi")}
                  >
                    Wifi
                  </Toggle>
                </div>
                <div className="flex gap-4 items-center w-full"></div>
              </div>
            </div>
            <Textarea
              style={textAreaStyle}
              placeholder="Enter any other keywords... (Female roommate, bus route, etc.)"
            />
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleClick}>Find me a match with AI!</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default UserDataForm;
