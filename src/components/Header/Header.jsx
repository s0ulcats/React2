import React from "react";
import classes from './Header.module.css'
import { NavLink } from "react-router-dom";
import loginIMG from '../../assets/images/unknownUser.png'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png' />

            <div className={classes.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>
                        <img src={loginIMG} alt="" />
                    </NavLink>
                }
            </div>
        </header>
    )
}

export default Header;