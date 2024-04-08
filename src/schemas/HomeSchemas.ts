import z from "zod";

export const HomeFormSchema = z.object({
  name: z
    .string({ required_error: "This field is required!" })
    .refine((value) => value.length > 0, {
      message: "This field is required!",
    }),
  desc: z
    .string({ required_error: "This field is required!" })
    .refine((value) => value.length > 0, {
      message: "This field is required!",
    }),
  age: z.number({ required_error: "This field is required!" }),
});
