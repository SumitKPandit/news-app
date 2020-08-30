import React from "react";

import classes from "./Header.module.scss";
import Search from "../Search/Search";

const Header = () => {
    return (
        <header className={classes.Header}> 
            <div>
                <p>NEWS<span>APP</span></p>
                <Search />
            </div>
        </header>
    );
};

export default Header;