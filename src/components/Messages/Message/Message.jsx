import React from "react";
import classes from './../Messages.module.css'

const Message = (props) => {
    return (
        <div className={classes.message}>
            <img src={props.img}/>
            {props.message}
        </div>
    )
}

export default Message;