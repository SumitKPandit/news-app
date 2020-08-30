import React from "react";

import classes from "./NewsItem.module.scss";

const NewsItem = ({article}) => {
    return (
        <section className={classes.NewsItem}>
            <div className={classes.image}>
                <img src={article.urlToImage ? article.urlToImage : "https://via.placeholder.com/250x150?text=NEWS+APP"} />
            </div>
            <div className={classes.text}>
            <h3 className={classes.title}>{article.title}</h3>
            <p className={classes.author}>{article.author}</p>
            <p>{article.description}</p>
            <a target="_blank" href={article.url} className={classes.more}>Read More</a>
            </div>
        </section>
    );
};

export default NewsItem;