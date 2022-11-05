import * as yup from "yup";

export const userValidationSchema = yup.object().shape({
    name: yup.string().required("First name is required").min(2, "Too Short!"),
    lastname: yup
        .string()
        .required("Last name is required")
        .min(2, "Too Short!"),
    username: yup
        .string()
        .required("Username is required")
        .min(4, "Too Short!"),
    email: yup.string().email().required("Email is required"),
});
