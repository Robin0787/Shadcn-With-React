/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from "react-hook-form";
import { FormItem } from "../form";
import { Input } from "../input";

interface TInputProps {
  name: string;
  type: string;
  className?: string;
  placeholder?: string;
  value?: any;
  disabled?: boolean;
}

const MyInput = ({
  type,
  className,
  name,
  placeholder,
  value,
  disabled,
}: TInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <FormItem>
          <Input
            {...field}
            type={type}
            id={name}
            value={value}
            className={className}
            placeholder={placeholder}
            disabled={disabled}
          />
        </FormItem>
      )}
    />
  );
};

export default MyInput;
