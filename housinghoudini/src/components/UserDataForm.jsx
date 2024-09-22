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
import logo from "@/public/logo.png";
//import { useRouter } from "next/router";

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

function UserDataForm({ setApiResults }) {
  //const router = useRouter();

  const [toggles, setToggles] = useState({
    electricity: false,
    water: false,
    furnished: false,
    wifi: false,
  });

  const [preferences, setPreferences] = useState({
    beds: "",
    bathrooms: "",
    roommates: "",
    laundry: "",
    pets: "",
    budget: "",
    electricity: "Electricity/Utilities not Included",
    water: "Water not Included",
    wifi: "Wifi not Included",
    furnished: "Furnished not Included",
    other: "",
  });

  const handleToggleChange = (name) => (event) => {
    const newToggles = {
      ...toggles,
      [name]: !toggles[name], // Correctly invert the value
    };
    setToggles(newToggles);

    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: newToggles[name]
        ? `${name.charAt(0).toUpperCase() + name.slice(1)} Included`
        : `${name.charAt(0).toUpperCase() + name.slice(1)} not Included`,
    }));
  };

  const handleSelectChange = (name) => (value) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    const studentPreferences = `Beds: ${
      preferences.beds.length > 0 ? preferences.beds : "Not specifified"
    }, \nBathrooms: ${
      preferences.bathrooms.length > 0
        ? preferences.bathrooms
        : "Not specifified"
    }, \nRoommates: ${
      preferences.roommates.length > 0
        ? preferences.roommates
        : "Not specifified"
    }, \nLaundry: ${
      preferences.laundry.length > 0 ? preferences.laundry : "Not specifified"
    }, \nPets: ${
      preferences.pets.length > 0 ? preferences.pets : "Not specifified"
    }, \nBudget: ${
      preferences.budget.length > 0 ? preferences.budget : "Not specifified"
    }, \nElectricity: ${preferences.electricity},\nWater: ${
      preferences.water
    }, \nWifi: ${preferences.wifi}, \nFurnished: ${
      preferences.furnished
    },\nOther preferences: ${
      preferences.other.length > 0 ? preferences.other : "Not specified"
    } `;
    console.log(studentPreferences);
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
      const results = data.result;
      setApiResults(results);

      router.push("/results");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="w-[80%]">
        <CardHeader>
          <div className="flex items-center justify-center gap-4">
            <Image
             className="p-20px"
              style={{ width: "200px", height: "200px" }}
              src={logo}
              alt="logo"
            />
            <p className="p-20px text-lg">
              Settle saves time and stress of students who are travelling long
              distances for their education by finding the right place to stay
              for the upcoming academic year in a couple of clicks. It takes
              their preferences and matches them to listings sourced from
              websites like Facebook Marketplace and Places4Students. AI
              compares info about the listings to see if they are a good fit. It
              gives a custom fit rating, summary and a link to the listing to
              take the next step in applying for that rental!
            </p>
          </div>
          <hr style={{ backgroundColor: "#000" }} />
        </CardHeader>{" "}
        {/* Added for default padding */}
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-row gap-4 items-center">
                <Label style={labelStyle} htmlFor="beds">
                  Beds
                </Label>
                <SelecterComponent
                  handleChange={handleSelectChange("beds")}
                  id="beds"
                  opt1="Studio/Suite"
                  opt2="1"
                  opt3="2"
                  opt4="3+"
                />
                <Label style={labelStyle} htmlFor="bathrooms">
                  Bathrooms
                </Label>
                <SelecterComponent
                  handleChange={handleSelectChange("bathrooms")}
                  id="bathrooms"
                  opt1="1"
                  opt2="1.5"
                  opt3="2"
                  opt4="2.5+"
                />
                <Label style={labelStyle} htmlFor="budget">
                  Budget
                </Label>
                <SelecterComponent
                  handleChange={handleSelectChange("budget")}
                  id="budget"
                  opt1="$0-$750"
                  opt2="$750-$1250"
                  opt3="$1250-$1750"
                  opt4="$1750+"
                />
              </div>

              <div className="flex flex-row gap-4 items-center">
                <Label style={labelStyle} htmlFor="roommates">
                  Roommates
                </Label>
                <SelecterComponent
                  handleChange={handleSelectChange("roommates")}
                  id="roommates"
                  opt1="None"
                  opt2="1"
                  opt3="2"
                  opt4="3+"
                />
                <Label style={labelStyle} htmlFor="laundry">
                  Laundry
                </Label>
                <SelecterComponent
                  handleChange={handleSelectChange("laundry")}
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
                  handleChange={handleSelectChange("pets")}
                  id="pets"
                  opt1="Dog"
                  opt2="Cat"
                  opt3="Small pets"
                  opt4="None"
                />
              </div>

              <div className="flex gap-4 items-center justify-between w-full">
                <div className="flex gap-4 items-center w-full">
                  <Label style={labelStyle} htmlFor="utilities">
                    Other features included:
                  </Label>
                  <Toggle
                    style={toggles.electricity ? toggleStyleOn : toggleStyleOff}
                    checked={toggles.electricity}
                    onClick={handleToggleChange("electricity")}
                  >
                    Electricity
                  </Toggle>
                  <Toggle
                    style={toggles.water ? toggleStyleOn : toggleStyleOff}
                    checked={toggles.water}
                    onClick={handleToggleChange("water")}
                  >
                    Water
                  </Toggle>
                  <Toggle
                    style={toggles.wifi ? toggleStyleOn : toggleStyleOff}
                    checked={toggles.wifi}
                    onClick={handleToggleChange("wifi")}
                  >
                    Wifi
                  </Toggle>
                  <Toggle
                    style={toggles.furnished ? toggleStyleOn : toggleStyleOff}
                    checked={toggles.furnished}
                    onClick={handleToggleChange("furnished")}
                  >
                    Furnished
                  </Toggle>
                </div>
                <div className="flex gap-4 items-center w-full"></div>
              </div>
            </div>
            <Textarea
              style={textAreaStyle}
              placeholder="Enter any other keywords... (Female roommate, bus route, etc.)"
              onChange={(e) =>
                setPreferences((prevPreferences) => ({
                  ...prevPreferences,
                  other: e.target.value,
                }))
              }
            />
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleClick}>Match me!</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default UserDataForm;
