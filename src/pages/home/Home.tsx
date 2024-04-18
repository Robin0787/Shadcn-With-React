"use client";
import { FieldValues } from "react-hook-form";

import { Button } from "@/components/ui/button";
import InputSelect, { TOptionItem } from "@/components/ui/myForm/InputSelect";
import MyCheckbox from "@/components/ui/myForm/MyCheckbox";
import MyDatePicker from "@/components/ui/myForm/MyDatePicker";
import MyForm from "@/components/ui/myForm/MyForm";
import MyInput from "@/components/ui/myForm/MyInput";
import MyRadioBox, { TRadioBoxData } from "@/components/ui/myForm/MyRadioBox";

const genderOptions: TOptionItem[] = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];
const typeOptions: TRadioBoxData[] = [
  {
    value: "all",
    label: "All new messages",
  },
  {
    value: "mentions",
    label: "Direct messages and mentions",
  },
  {
    value: "none",
    label: "Nothing",
  },
];

function Home() {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="border rounded-md p-6">
      <MyForm onSubmit={onSubmit}>
        <div className="space-y-8">
          <MyInput type="text" name="name" placeholder="Name" />
          <MyInput type="number" name="age" placeholder="Age" />
          <InputSelect name="gender" options={genderOptions} />
          <MyCheckbox name="terms" />
          <MyRadioBox name="notification" options={typeOptions} />
          <MyDatePicker name="date" />
        </div>
        <div className="mt-6">
          <Button type="submit" variant={"secondary"}>
            Submit
          </Button>
        </div>
      </MyForm>
    </div>
  );
}

export default Home;
