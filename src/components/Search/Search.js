import React from "react";

import classes from "./Search.module.scss";

const Search = ({query, changeHandler}) => {
    return (
        <form className={classes.Search}>
            <label htmlFor="search">Search</label>
            <input type="text" name="search" placeholder="Search..." value={query} onChange={changeHandler} />
        </form>
    );
};

export default Search;