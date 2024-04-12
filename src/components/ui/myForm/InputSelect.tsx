import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField, FormItem } from "../form";

export type TOptionItem = {
  value: string;
  label: string;
};

export type TInputSelectProps = {
  name: string;
  options: TOptionItem[];
  placeholder?: string;
};

const InputSelect = ({ name, options, placeholder }: TInputSelectProps) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange}>
            <SelectTrigger className="w-[280px]">
              <SelectValue
                placeholder={placeholder || `Select a ${name}`}
                className="capitalize"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
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
