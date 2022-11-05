import { Field, Form, Formik } from "formik";
import { User } from "@components/generic";
import { feedtValidationSchema } from "@validationSchemas/mweetSchemas";
import { useUserStore } from "@store/userStore";

type InputProps = {
    feed: string;
};

const initialValues: InputProps = { feed: "" };

export const FeedInput = () => {
    const { user } = useUserStore((state) => state);

    if (!user) return null;

    return (
        <div className="flex items-start w-full mb-10">
            <User
                id={user.id}
                name={user.name}
                lastname={user.lastname}
                email={user.email}
                username={user.username}
                thumbnail={user.thumbnail}
                onlyThumbnail
            />

            <Formik
                enableReinitialize
                validationSchema={feedtValidationSchema}
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                <Form className="w-full ml-3 flex flex-col items-end">
                    <Field name="feed">
                        {({ field, form, meta }: any) => {
                            return (
                                <textarea
                                    className="border border-input-border rounded-md min-h-[5.25rem] w-full bg-white py-2 px-3 mb-4"
                                    // value={field.value}
                                    // onChange={field.onChange}
                                    placeholder="What’s on your mind..."
                                />
                            );
                        }}
                    </Field>
                    <button
                        className="bg-primary-button text-white rounded-md py-[0.813rem] px-[1.969rem]"
                        type="submit"
                    >
                        Send mweet
                    </button>
                </Form>
            </Formik>
        </div>
    );
};
