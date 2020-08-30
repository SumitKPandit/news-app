import React from "react";

import classes from "./Search.module.scss";

const Search = ({changeHandler}) => {
    return (
        <div className={classes.Search}>
            <label htmlFor="search">Search</label>
            <input type="text" name="search" placeholder="Search..." onChange={e => changeHandler(e)} />
        </div>
    );
};

export default Search;