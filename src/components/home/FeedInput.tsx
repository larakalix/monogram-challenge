import { useState } from "react";
import { Field, Form, Formik } from "formik";
import clsx from "clsx";
import { User } from "@components/generic";
import { feedtValidationSchema } from "@validationSchemas/mweetSchemas";
import { useUserStore } from "@store/userStore";
import { InputProps } from "types/data/formField";
import { useFeedInput } from "@hooks/feedInput/useFeedInput";

type Props = {
    refreshFeeds?: () => void;
};

const initialValues: InputProps = { feed: "" };

export const FeedInput = ({ refreshFeeds }: Props) => {
    const { user } = useUserStore((state) => state);
    const { onSubmit } = useFeedInput(user!);

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
                    onSubmit(values, actions, refreshFeeds!);
                }}
            >
                <Form className="w-full ml-3 flex flex-col items-end">
                    <Field name="feed">
                        {({ field, meta }: any) => {
                            const styles = clsx({
                                ["text-red-500"]: meta.touched && meta.error,
                                ["text-sub-label-gray"]: !(
                                    meta.touched && meta.error
                                ),
                            });

                            return (
                                <>
                                    <textarea
                                        className="border border-input-border rounded-md min-h-[5.25rem] max-h-[14rem] w-full bg-white py-2 px-3"
                                        {...field}
                                        placeholder="What’s on your mind..."
                                    />
                                    <span
                                        className={`${styles} font-normal text-[0.7rem] leading-[1.25rem] mb-2`}
                                    >
                                        {field.value.length} / 280
                                    </span>
                                    {meta.touched && meta.error && (
                                        <div className="text-red-500 text-[0.8rem] mb-4">
                                            {meta.error}
                                        </div>
                                    )}
                                </>
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
