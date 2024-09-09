import React from "react";
import { Formik, Form, Field } from "formik";
import classes from './ProfileInfo.module.css';

const ProfileDataForm = ({ profile, handleReset, saveProfile, setEditMode }) => {
    const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false);
    };

    return (
        <Formik
            initialValues={{
                fullName: profile.fullName || "",
                aboutMe: profile.aboutMe || "",
                lookingForAJob: profile.lookingForAJob || false,
                lookingForAJobDescription: profile.lookingForAJobDescription || "",
                ...Object.keys(profile.contacts).reduce((acc, key) => ({
                    ...acc,
                    [key]: profile.contacts[key] || "" // Инициализируйте значения контактов
                }), {})
            }}
            onSubmit={onSubmit}
        >
            {() => (
                <Form>
                    <div>
                        <label htmlFor="fullName">Full name:</label>
                        <Field id="fullName" name="fullName" placeholder="Full name" />
                    </div>
                    <div>
                        <label htmlFor="aboutMe">About Me:</label>
                        <Field id="aboutMe" name="aboutMe" placeholder="About Me" />
                    </div>
                    <div>
                        <label htmlFor="lookingForAJob">Looking For A Job:</label>
                        <Field id="lookingForAJob" name="lookingForAJob" type="checkbox" />
                    </div>
                    <div>
                        <label htmlFor="lookingForAJobDescription">Professional skills:</label>
                        <Field id="lookingForAJobDescription" name="lookingForAJobDescription" placeholder="Professional skills" />
                    </div>
                    <div>
                        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => (
                            <div className={classes.contacts} key={key}>
                                <b>{key}:
                                    <Field id={key} name={key} placeholder={key} />
                                </b>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button type="submit">Save</button>
                        <button type="button" onClick={handleReset}>Cancel</button>
                    </div>
                </Form>
            )}
        </Formik>

    );
};

export default ProfileDataForm;
