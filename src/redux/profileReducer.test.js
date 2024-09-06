import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";
import React from "react";

let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are u?', likesCount: 11 },
        { id: 2, message: 'It\'s my first post', likesCount: 14 },
        { id: 3, message: 'Lorem ipsum', likesCount: 88 }
    ]
}

test('length of post should be incremented', () => {
    let action = addPostActionCreator('biden')

    let newState = profileReducer(initialState, action)
    expect(newState.postData.length).toBe(4);
});

test('message of post should be correct', () => {
    let action = addPostActionCreator('biden')

    let newState = profileReducer(initialState, action)
    expect(newState.postData[3].message).toBe("biden");
});

test('after deliting length of messages should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(initialState, action)
    expect(newState.postData.length).toBe(2);
});

test('after deliting length of messages shouldn`t be decrement if id is incorrect', () => {
    let action = deletePost(100)

    let newState = profileReducer(initialState, action)
    expect(newState.postData.length).toBe(3);
});

