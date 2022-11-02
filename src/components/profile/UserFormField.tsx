import { ErrorMessage, Field } from "formik";

type Props = {
    label: string;
    name: string;
    isSubmitting: boolean;
};

export const UseFormField = ({ label, name, isSubmitting }: Props) => {
    return (
        <div className="flex flex-col">
            <label
                htmlFor={name}
                className="text-label-gray text-[0.875rem] font-medium leading-[1.25rem] mb-2"
            >
                {label}
            </label>
            <Field name={name}>
                {({ field, meta }: any) => (
                    <div>
                        <input
                            disabled={isSubmitting}
                            placeholder={label}
                            {...field}
                            className="border border-input-border rounded-md w-full bg-white py-2 px-3"
                        />
                        {meta.touched && meta.error && (
                            <div className="text-red-400 text-[0.8rem] font-medium leading-[1.25rem] mt-2">
                                {meta.error}
                            </div>
                        )}
                    </div>
                )}
            </Field>
        </div>
    );
};
