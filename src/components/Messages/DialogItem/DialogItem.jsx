import React from "react";
import classes from './../Messages.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = '/messages/' + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img src={props.img} />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;