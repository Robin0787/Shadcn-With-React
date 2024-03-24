"use client";
import { FieldValues } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import MyForm from "@/components/ui/myForm/MyForm";
import { Controller } from "react-hook-form";

function Home() {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="border rounded-md p-6">
      <MyForm onSubmit={onSubmit}>
        <Controller
          name={"name"}
          render={({ field }) => (
            <FormItem>
              <Input
                {...field}
                type={"text"}
                className={""}
                placeholder="Name"
              />
            </FormItem>
          )}
        />
        <div className="mt-3">
          <Button type="submit" variant={"secondary"}>
            Submit
          </Button>
        </div>
      </MyForm>
    </div>
  );
}

export default Home;
