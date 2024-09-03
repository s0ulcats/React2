import React from "react";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer'
import { connect } from "react-redux";
import Messages from './Messages'
import withAuthRedirect from "../../hoc/WithAuthRedirect.js";
import { compose } from "redux";

let mapStateToProps = (state) => {
    debugger
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    debugger
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages);
