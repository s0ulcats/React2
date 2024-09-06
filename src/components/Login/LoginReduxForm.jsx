import React from "react";
import { Formik, Form } from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import { createField, errorInField } from "../../utils/FormHelper";

const LoginReduxForm = ({onSubmit}) => {
    return (
        <Formik
            initialValues={{ email: "", password: "", rememberMe: false }}
            validationSchema={loginFormSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                        {createField("text", "email", "e-mail")}
                        {errorInField("email", "div")}

                        {createField("password", "password", "password")}
                        {errorInField("password", "div")}

                        {createField("checkbox", "rememberMe", null)}
                        <label htmlFor="rememberMe"> remember me </label>
                        

                    {errorInField("_error", "div")} 

                    <button type="submit" disabled={isSubmitting}>Log in</button>
                </Form>
            )}
        </Formik>
    );
}

export default LoginReduxForm;
