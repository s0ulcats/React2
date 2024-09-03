import * as Yup from "yup";

const postFormSchema = Yup.object().shape({
    newPostText: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .max(100, "Must be shorter than 100 characters")
        .required("Required")
    });

export default postFormSchema;
