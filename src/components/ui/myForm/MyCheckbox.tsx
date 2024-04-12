import { Checkbox } from "@radix-ui/react-checkbox";
import { FormControl, FormField, FormItem } from "../form";

export type TCheckBoxProps = {
  name: string;
};

const MyCheckbox = ({ name }: TCheckBoxProps) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className="flex items-center space-x-2 space-y-0">
          <FormControl>
            <Checkbox
              ref={field.ref}
              checked={field.value}
              onCheckedChange={field.onChange}
              className={`size-5 border border-gray-400 rounded ${
                field.value ? "bg-blue-500 border-blue-500" : "bg-white"
              }  duration-300`}
            />
          </FormControl>
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </FormItem>
      )}
    />
  );
};

export default MyCheckbox;
