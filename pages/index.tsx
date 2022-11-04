import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import { ImTwitter as ImMweeter } from "react-icons/im";
import { UseFormField } from "@components/generic";
import { FormField } from "types/data/formField";
import { Magic } from "magic-sdk";
import { API_CONSTANTS } from "@constants/api";

type InputProps = {
    email: string;
};

const initialValues: InputProps = {
    email: "",
};

const formFields: FormField[] = [{ label: "Email address", name: "email" }];

export default function Index() {
    const { push } = useRouter();

    return (
        <section className="flex items-center justify-center flex-col h-screen">
            <ImMweeter className="w-12 h-12 text-main-blue" />
            <h1 className="text-heading-gray font-extrabold text-[1.5rem] leading-[1.65rem] mt-2">
                mweeter
            </h1>

            <div className="mt-4 p-2 text-center max-w-sm w-full">
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    onSubmit={async ({ email }, actions) => {
                        console.log({ email });
                        actions.setSubmitting(false);

                        const magicSecret = String(
                            process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY
                        );
                        const magic = new Magic(magicSecret);
                        const didToken = await magic.auth.loginWithMagicLink({
                            email: email,
                        });

                        const res = await fetch(API_CONSTANTS.login, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${didToken}`,
                            },
                            body: JSON.stringify({ email }),
                        });

                        if (res.status === 200) push("/profile");
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
