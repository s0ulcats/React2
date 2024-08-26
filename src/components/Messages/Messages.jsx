import React from "react";
import classes from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Messages = (props) => {
    let dialogsElements = props.messagesPage.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} img={dialog.img} />
    );
    let messagesElements = props.messagesPage.messagesData.map(message =>
        <Message message={message.message} key={message.id} img={message.img} />
    );

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage()
    };

    let onMessageChange = () => {
        let newMessage = newMessageElement.current.value;
        props.updateNewMessageText(newMessage )
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea
                        ref={newMessageElement}
                        onChange={onMessageChange}
                        value={props.messagesPage.newMessageText} // Должно отображать текущее состояние
                    />
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Messages;
