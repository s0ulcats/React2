import React from "react"
import { Field } from "formik"

export const createProfileField = (placeholder, name, validators, component, props = {}, text = "") => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} validators={validators} component={component}
             {...props} /> {text}
        </div>
    );
}
