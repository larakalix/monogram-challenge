import { Field, Form, Formik } from "formik";
import { ViewContentWrapper } from "@components/generic/ViewContentWrapper";
import { ViewWrappperColSplitType } from "types/generic/generic";
import { FormField } from "types/data/formField";
import { userValidationSchema } from "@validationSchemas/profileValidationSchema";
import { UseFormField } from "@components/profile/UserFormField";

type InputProps = {
    firstName: string;
    lasttName: string;
    userName: string;
    email: string;
};

const initialValues: InputProps = {
    firstName: "",
    lasttName: "",
    userName: "",
    email: "",
};

const formFields: FormField[] = [
    { label: "First Name", name: "firstName" },
    { label: "Last Name", name: "lasttName" },
    { label: "Your handle (username)", name: "userName" },
    { label: "Email address", name: "email" },
];

export const ProfilePage = () => {
    return (
        <ViewContentWrapper
            title="Your profile"
            splitType={ViewWrappperColSplitType.NotEquals}
        >
            <Formik
                enableReinitialize
                validationSchema={userValidationSchema}
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                {({ errors, isSubmitting }) => (
                    <Form className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {formFields.map(({ label, name }) => (
                            <UseFormField
                                key={`field_${name}`}
                                label={label}
                                name={name}
                                isSubmitting={isSubmitting}
                            />
                        ))}

                        <button
                            disabled={isSubmitting}
                            className="bg-primary-button text-white rounded-md py-[0.813rem] px-[1.969rem]"
                            type="submit"
                        >
                            Update info
                        </button>
                    </Form>
                )}
            </Formik>
        </ViewContentWrapper>
    );
};
