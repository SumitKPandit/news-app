import React from "react";

import classes from "./Header.module.scss";

const Header = () => {
    return (
        <header className={classes.header}> 
            <div>
                <p>NEWS<span>APP</span></p>
            </div>
        </header>
    );
};

export default Header;