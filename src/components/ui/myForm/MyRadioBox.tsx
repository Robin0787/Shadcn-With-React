import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type MyRadioBoxProps = {
  name: string;
  options: TRadioBoxData[];
};

export type TRadioBoxData = {
  value: string;
  label: string;
};

const MyRadioBox = ({ name, options }: MyRadioBoxProps) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Notify me about...</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              {options?.map((data) => (
                <FormItem
                  key={data.value}
                  className="flex items-center space-x-3 space-y-0"
                >
                  <FormControl>
                    <RadioGroupItem value={data.value} />
                  </FormControl>
                  <FormLabel className="font-normal">{data.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MyRadioBox;
