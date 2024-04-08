"use client";
import { FieldValues } from "react-hook-form";

import { Button } from "@/components/ui/button";
import InputSelect, { TOptionItem } from "@/components/ui/myForm/InputSelect";
import InputWithWatch from "@/components/ui/myForm/InputWithWatch";
import MyForm from "@/components/ui/myForm/MyForm";
import MyInput from "@/components/ui/myForm/MyInput";
import { useState } from "react";

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

function Home() {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const [name, setName] = useState("");

  return (
    <div className="border rounded-md p-6">
      <MyForm onSubmit={onSubmit}>
        <div className="space-y-8">
          <InputWithWatch
            type="text"
            name="name"
            placeholder="Name"
            onValueChange={setName}
          />
          <MyInput
            type="text"
            name="desc"
            placeholder="Description"
            disabled={!name}
          />
          <MyInput
            type="number"
            name="age"
            placeholder="Age"
            disabled={!name}
          />
          <InputSelect name="gender" options={genderOptions} />
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
