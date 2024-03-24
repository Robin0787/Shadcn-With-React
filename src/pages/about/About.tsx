"use client";
import { FieldValues } from "react-hook-form";

import { Button } from "@/components/ui/button";
import MyForm from "@/components/ui/myForm/MyForm";
import MyInput from "@/components/ui/myForm/MyInput";

const About = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="border rounded-md p-6">
      <MyForm onSubmit={onSubmit}>
        <MyInput type="text" name="name" placeholder="Name" />
        <MyInput type="text" name="age" placeholder="Age" />
        <MyInput type="text" name="gender" placeholder="Gender" />
        <div className="mt-3">
          <Button type="submit" variant={"secondary"}>
            Submit
          </Button>
        </div>
      </MyForm>
    </div>
  );
};

export default About;
