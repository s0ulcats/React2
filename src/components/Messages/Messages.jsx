import React from "react";
import classes from './Messages.module.css';
import { Navigate } from 'react-router-dom';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm";

const Messages = (props) => {
    let dialogsElements = props.messagesPage.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} img={dialog.img} />
    );
    let messagesElements = props.messagesPage.messagesData.map(message =>
        <Message message={message.message} key={message.id} img={message.img} />
    );

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    };

    if (!props.isAuth) {
        return <Navigate to={'/login'} />;
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <AddMessageForm onSubmit={addNewMessage} />
            </div>
        </div>
    );
};

export default Messages;
