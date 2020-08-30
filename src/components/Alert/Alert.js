import React from "react";

import classes from "./Alert.module.scss";

const Alert = () => {
    return (
        <div className={classes.Alert}>
            <p>Oops! Something went wrong. Please check your network connection and try again.</p>
        </div>
    );
};

export default Alert;