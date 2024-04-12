/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormField, FormItem } from "../form";
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
    <FormField
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className="relative">
          {error && (
            <small className="absolute -top-5 right-1 text-red-600">
              {error?.message}
            </small>
          )}
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
