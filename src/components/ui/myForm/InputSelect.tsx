import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";
import { FormItem } from "../form";

export type TOptionItem = {
  value: string;
  label: string;
};

export type TInputSelectProps = {
  name: string;
  options: TOptionItem[];
};

const InputSelect = ({ name, options }: TInputSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <FormItem className="relative">
          <Select
            {...field}
            onValueChange={(value) => {
              console.log(value);
            }}
          >
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>North America</SelectLabel>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default InputSelect;
