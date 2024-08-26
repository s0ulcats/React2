import React, { useState } from "react";
import classes from './Settings.module.css';

const Settings = () => {
    const [theme, setTheme] = useState('lightTheme');

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme');
    };

    return (
        <div className={`${classes.themeContainer} ${classes[theme]}`}>
            <h2>Settings</h2>
        </div>
    );
}

export default Settings;
