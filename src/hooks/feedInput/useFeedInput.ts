import { FormikHelpers } from "formik";
import { UserProps } from "types/data/user";
import { FeedProps } from "types/data/feed";
import { InputProps } from "types/data/formField";
import { API_CONSTANTS } from "@constants/api";

export const useFeedInput = (user: UserProps) => {
    const onSubmit = (
        values: InputProps,
        actions: FormikHelpers<InputProps>
    ) => {
        actions.setSubmitting(false);

        const feed: Omit<FeedProps, "id" | "createdAt"> = {
            content: values.feed,
            user,
        };

        console.log("onSubmit", { feed });

        fetch(API_CONSTANTS.newFeed, {
            method: "POST",
            body: JSON.stringify({ feed }),
        });
    };

    return {
        onSubmit,
    };
};
