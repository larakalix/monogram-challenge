import * as yup from "yup";

export const userValidationSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("First name is required")
        .min(2, "Too Short!"),
    lasttName: yup
        .string()
        .required("Last name is required")
        .min(2, "Too Short!"),
    userName: yup
        .string()
        .required("Username is required")
        .min(4, "Too Short!"),
    email: yup.string().email().required("Email is required"),
});
