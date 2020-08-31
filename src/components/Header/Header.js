import React from "react";
import PropTypes from "prop-types";

import classes from "./Header.module.scss";
import Search from "../Search/Search";

const Header = ({changeHandler}) => {
    return (
        <header className={classes.Header}> 
            <div className={classes.container}>
                <h3>NEWS<span>APP</span></h3>
                <Search changeHandler={changeHandler} />
            </div>
        </header>
    );
};

Header.propTypes = {
    changeHandler: PropTypes.func
};

export default Header;