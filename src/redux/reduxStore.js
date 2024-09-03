import {applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import usersReducer from './usersReducer';
import authReducer from './auth-reducer';
import { thunk } from 'redux-thunk';
import appReducer from './app-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;