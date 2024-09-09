import axios from "axios";
import { profileAPI, usersAPI } from "../api/api";
import { logout } from './auth-reducer'; // Импортируйте функцию logout

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are u?', likesCount: 11 },
        { id: 2, message: 'It\'s my first post', likesCount: 14 },
        { id: 3, message: 'Lorem ipsum', likesCount: 88 }
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postData.length + 1,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profileData) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    try {
        const response = await profileAPI.saveProfile(profileData);
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId));
            return true;
        } else if (response.data.resultCode === 1 && response.data.messages[0] === 'Unauthorized') {
            dispatch(logout()); // Используем импортированную функцию logout
        }
    } catch (error) {
        console.error('Request failed:', error);
        return false;
    }
};

export default profileReducer;
