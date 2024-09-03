import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import postFormSchema from "../../FormValidation/PostFormSchema";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let messageElements = props.postData.map(post =>
        <Post message={post.message} key={post.id} likes={post.likesCount} />
    );

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost} />
            <div className={classes.posts}>
                {messageElements}
            </div>
        </div>
    );
};

const AddNewPostForm = (props) => {
    return (
        <Formik
            initialValues={{ newPostText: '' }}
            onSubmit={(values, { resetForm }) => {
                props.onSubmit(values);
                resetForm();
            }}
            validationSchema={postFormSchema}>
            {({ errors, touched }) => (
                <Form>
                    <div>
                        <Field
                            name="newPostText"
                            as="textarea"
                            placeholder="Enter text"
                            className={`${classes.textarea} ${errors.newPostText && touched.newPostText ? classes.errorTextarea : ''}`}
                        />
                        <ErrorMessage name="newPostText" component="div" className={classes.error} />
                    </div>
                    <div>
                        <button type="submit">Add post</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default MyPosts;
