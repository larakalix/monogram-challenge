import * as yup from "yup";

export const mweetValidationSchema = yup.object().shape({
    feed: yup.string().required("Feed required").min(1, "Too Short!"),
});
