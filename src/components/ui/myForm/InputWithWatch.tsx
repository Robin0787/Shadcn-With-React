/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { FormItem } from "../form";
import { Input } from "../input";

interface TInputProps {
  name: string;
  type: string;
  className?: string;
  placeholder?: string;
  value?: any;
  disabled?: boolean;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
}

const InputWithWatch = ({
  type,
  className,
  name,
  placeholder,
  value,
  disabled,
  onValueChange,
}: TInputProps) => {
  const { control } = useFormContext();
  const inputValue = useWatch({
    control,
    name,
  });
  useEffect(() => {
    onValueChange(inputValue);
  }, [inputValue]);
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="relative">
          {error && (
            <small className="absolute -top-5 right-1 text-red-600">
              {error?.message}
            </small>
          )}
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
        </div>
      )}
    />
  );
};

export default InputWithWatch;
