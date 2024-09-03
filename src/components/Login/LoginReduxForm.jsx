import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";

const LoginReduxForm = (props) => {
    return (
        <Formik
            initialValues={{ email: "", password: "", rememberMe: false }}
            validationSchema={loginFormSchema}
            onSubmit={props.onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field type="text" name="email" placeholder="e-mail" />
                        <ErrorMessage name="email" component="div" />
                    </div>

                    <div>
                        <Field type="password" name="password" placeholder="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>

                    <div>
                        <Field type="checkbox" name="rememberMe" />
                        <label htmlFor="rememberMe"> remember me </label>
                    </div>

                    <ErrorMessage name="_error" component="div" />

                    <button type="submit" disabled={isSubmitting}>Log in</button>
                </Form>
            )}
        </Formik>
    );
}

export default LoginReduxForm;
