import { Field, Form, Formik, ErrorMessage } from "formik";
import messageFormSchema from "../FormValidation/MessageFormSchema";
import classes from './Messages.module.css';

const AddMessageForm = (props) => {
    return (
        <Formik
            initialValues={{ newMessageText: '' }}
            onSubmit={(values, { resetForm }) => {
                props.onSubmit(values);
                resetForm();
            }}
            validationSchema={messageFormSchema}
        >
            {({ errors, touched }) => (
                <Form>
                    <div>
                        <Field
                            name="newMessageText"
                            component='textarea'
                            placeholder="Enter text"
                            className={`${classes.textarea} ${errors.newMessageText && touched.newMessageText ? classes.errorTextarea : ''}`}
                        />
                        <ErrorMessage name="newMessageText" component="div" className={classes.error} />
                    </div>
                    <button type="submit">Send</button>
                </Form>
            )}
        </Formik>
    );
};


export default AddMessageForm