"use client";

import { useFormContext } from "react-hook-form";
import { FormField, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

type Props = {
    fieldTitle: string;
    nameInSchema: string;
    placeholder?: string;
    labelLeft?: boolean;
    readOnly?: boolean;
};

export function SwitchWithLabel({
    fieldTitle,
    nameInSchema,
    placeholder,
    labelLeft,
    readOnly,
}: Props) {
    const form = useFormContext();

    const fieldTitleNoSpaces = fieldTitle.replaceAll(" ", "-");

    return (
        <FormField
            control={form.control}
            name={nameInSchema}
            render={({ field }) => (
                <FormItem className={labelLeft ? "w-full flex items-center gap-2" : ""}>
                    <FormLabel
                        className={`text-base ${labelLeft ? "w-1/3 mt-2" : ""}`}
                        htmlFor={fieldTitleNoSpaces}
                    >
                        {fieldTitle}
                    </FormLabel>

                    <div className={`flex items-center gap-2 ${labelLeft ? "w-2/3" : "w-full max-w-xs"}`}>
                        <div>
                            <FormControl>
                                <Switch
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    disabled={readOnly}
                                />
                            </FormControl>
                        </div>
                    </div>

                    <FormMessage />
                </FormItem>
            )}
        />


    );
}
