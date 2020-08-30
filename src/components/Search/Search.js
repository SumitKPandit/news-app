import React from "react";

import classes from "./Search.module.scss";

const Search = ({handleChange}) => {
    return (
        <form className={classes.Search}>
            <label for="search">Search</label>
            <input type="text" name="search" placeholder="Search..." />
        </form>
    );
};

export default Search;