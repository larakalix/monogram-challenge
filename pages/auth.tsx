import { useContext } from "react";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import { ImTwitter as ImMweeter } from "react-icons/im";
import { UseFormField } from "@components/generic";
import { FormField } from "types/data/formField";
import AuthContext from "context/AuthContext";

type InputProps = {
    email: string;
};

const initialValues: InputProps = {
    email: "",
};

const formFields: FormField[] = [{ label: "Email address", name: "email" }];

export default function Auth() {
    const { push } = useRouter();
    const { isAuthenticated, setUser } = useContext(AuthContext);

    return (
        <section className="flex items-center justify-center flex-col h-screen">
            <ImMweeter className="w-12 h-12 text-main-blue" />
            <div className="mt-4 p-2 text-center max-w-sm w-full">
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    onSubmit={async ({ email }, actions) => {
                        console.log({ email });
                        actions.setSubmitting(false);

                        const isLogged = await setUser(email);
                        if (isLogged) push("/");
                    }}
                >
                    {({ errors, isSubmitting }) => (
                        <Form className="w-full">
                            {formFields.map(({ label, name }) => (
                                <UseFormField
                                    key={`field_${name}`}
                                    label={label}
                                    name={name}
                                    isSubmitting={isSubmitting}
                                    hideLabel
                                />
                            ))}

                            <button
                                disabled={isSubmitting}
                                className="bg-primary-button text-white rounded-md py-[0.813rem] px-[1.969rem] mt-4 w-full"
                                type="submit"
                            >
                                Login
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}
