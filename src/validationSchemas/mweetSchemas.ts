import * as yup from "yup";

export const feedtValidationSchema = yup.object().shape({
    feed: yup
        .string()
        .required("Feed required")
        .min(1, "Too Short!")
        .max(280, "Too Long!"),
});
