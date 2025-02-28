"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputWithLabel } from "./InputWithLabel";
import { StoreSchema, storeSchema } from "@/app/schemas/StoreSchema";
import { SwitchWithLabel } from "./SwitchWithLabel";

type Props = {
  store: StoreSchema;
};

export default function StoreFormPage({ store }: Props) {
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const form = useForm<StoreSchema>({
    mode: "onBlur",
    resolver: zodResolver(storeSchema),
    defaultValues: { ...store },
  });

  useEffect(() => {
    // boolean value to indicate form has not been saved
    localStorage.setItem("userFormModified", form.formState.isDirty.toString());
  }, [form.formState.isDirty]);

  async function onSubmit() {
    setMessage('')
    setErrors({})
    console.log(`onSubmit id:${store.id} city:${store.city}`);
    console.log(`onSubmit id:${form.getValues().city}`);
    console.log(`onSubmit id:${form.getValues().isTemporarilyClosed}`);
    // Handle your form submission here
  }

  const childToParent = (childData: string) => {
    console.log(`childData:${childData}`);
  };

  return (
    <div>
      {message ? (
        <h2 className="text-2xl">{message}</h2>
      ) : null}

      {errors ? (
        <div className="mb-10 text-red-500">
          {Object.keys(errors).map(key => (
            <p key={key}>{`${key}: ${errors[key as keyof typeof errors]}`}</p>
          ))}
        </div>
      ) : null}

      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit(onSubmit)();
          }}
          className="flex flex-col gap-4"
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <InputWithLabel
                fieldTitle="First Name1"
                nameInSchema="city"
                readOnly={false}
              />
              <SwitchWithLabel
                fieldTitle="Store Status"
                nameInSchema="isTemporarilyClosed"
                readOnly={false}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input id="password" type="password" className="col-span-3" />
            </div>
            <Button className="w-full mt-6" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>

  );
}
