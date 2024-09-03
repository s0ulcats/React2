import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    password: Yup.string()
        .min(8, "Must be longer than 8 characters")
        .required("Required"),
    rememberMe: Yup.boolean()
});

export default loginFormSchema;
