import React from "react";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer'
import Messages from "./Messages";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    debugger
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    debugger
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateNewMessageText: (newMessage) => {
            dispatch(updateNewMessageTextActionCreator(newMessage));
        }
    }
}
let SuperMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default SuperMessagesContainer;
