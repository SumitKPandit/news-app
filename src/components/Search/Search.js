import React from "react";
import PropTypes from "prop-types";

import classes from "./Search.module.scss";

const Search = ({changeHandler}) => {
    return (
        <div className={classes.Search}>
            <label htmlFor="search">Search</label>
            <input type="text" name="search" placeholder="Search..." onChange={e => changeHandler(e)} />
        </div>
    );
};

Search.propTypes = {
    changeHandler: PropTypes.func
};

export default Search;