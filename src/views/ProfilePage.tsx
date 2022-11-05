import { Form, Formik } from "formik";
import { ViewWrappperColSplitType } from "types/generic/generic";
import { FormField } from "types/data/formField";
import { userValidationSchema } from "@validationSchemas/profileValidationSchema";
import { ViewContentWrapper, UseFormField } from "@components/generic";
import { useUserStore } from "@store/userStore";
import { UserProps } from "types/data/user";

const initialValues: Omit<UserProps, "id" | "thumbnail"> = {
    name: "",
    lastname: "",
    username: "",
    email: "",
};

const formFields: FormField[] = [
    { label: "First Name", name: "name" },
    { label: "Last Name", name: "lastname" },
    { label: "Your handle (username)", name: "username" },
    { label: "Email address", name: "email" },
];

export const ProfilePage = () => {
    const { user } = useUserStore((state) => state);

    return (
        <ViewContentWrapper
            title="Your profile"
            splitType={ViewWrappperColSplitType.NotEquals}
        >
            <Formik
                enableReinitialize
                validationSchema={userValidationSchema}
                initialValues={user || initialValues}
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
