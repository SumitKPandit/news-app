import React from "react";

import NewsItem from "./NewsItem/NewsItem";

const NewsGroup = ({articles}) => {
    return (
        <div>
            {articles.map(article => {
                return (
                    <NewsItem key={article.url} article={article} />
                );
            })}
        </div>
    );
};

export default NewsGroup;