import React from "react";
import PropTypes from "prop-types";

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

NewsGroup.propTypes = {
    articles: PropTypes.array
};

export default NewsGroup;