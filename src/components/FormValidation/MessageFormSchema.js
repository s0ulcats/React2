import * as Yup from "yup";

const messageFormSchema = Yup.object().shape({
    newMessageText: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .max(100, "Must be shorter than 100 characters")
        .required("Required")
});

export default messageFormSchema;
