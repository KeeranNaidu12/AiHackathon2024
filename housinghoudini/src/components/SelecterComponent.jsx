import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelecterComponent(props) {
  return (
    <Select>
      <SelectTrigger id={props.id}>
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem value={props.opt1}>{props.opt1}</SelectItem>
        <SelectItem value={props.opt2}>{props.opt2}</SelectItem>
        <SelectItem value={props.opt3}>{props.opt3}</SelectItem>
        <SelectItem value={props.opt4}>{props.opt4}</SelectItem>
      </SelectContent>
    </Select>
  );
}
