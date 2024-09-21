import React from "react";
import { Button } from "@/components/ui/button";
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

function UserDataForm({clickHandler}) {
  const handleClick = async () => {
    const studentPreferences = "21, male. Budget: $1200 a month. Prefers furnished room and likes movies";
    const listingDesc = "A cozy 2-bedroom apartment with a beautiful view near a movie theatre";

    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          studentPreferences,
          listingDesc
        })
      });

      const data = await res.json();
      // TODO: pass to results pages
    } catch (error) {
      console.error('Error:', error);
    }
    console.log( "Button clicked" );
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
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
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
