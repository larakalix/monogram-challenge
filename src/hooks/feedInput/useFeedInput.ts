import { FormikHelpers } from "formik";
import { UserProps } from "types/data/user";
import { FeedProps } from "types/data/feed";
import { InputProps } from "types/data/formField";
import { API_CONSTANTS } from "@constants/api";
import { useFeedStore } from "@store/feedStore";

export const useFeedInput = (user: UserProps) => {
    const onSubmit = (
        values: InputProps,
        actions: FormikHelpers<InputProps>,
        refreshFeeds: () => void
    ) => {
        const feed: Omit<FeedProps, "id" | "createdAt"> = {
            content: values.feed,
            user,
        };

        fetch(API_CONSTANTS.newFeed, {
            method: "POST",
            body: JSON.stringify({ feed, user }),
        }).then((res) => {
            actions.resetForm();
            if (refreshFeeds) refreshFeeds();
        });
    };

    return {
        onSubmit,
    };
};
