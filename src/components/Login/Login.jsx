import React from "react";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import LoginReduxForm from "./LoginReduxForm";
import { Route, Routes } from 'react-router-dom';

const Login = ({login, isAuth}) => {
    const handleSubmit = (values, { setErrors }) => {
        login(values)
            .catch(error => {
                setErrors({ _error: error });
            });
    };

    if (isAuth) {
        return (
            <Routes>
                <Route path={'/profile'} />
            </Routes>
        );
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={handleSubmit} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
