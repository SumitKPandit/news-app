import React from 'react';
import { render } from '@testing-library/react';

import NewsItem from './NewsItem';

const articleData = {
  title: "Price of plastic carrier bags to double to 10p next year - BBC News",
  urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/1134B/production/_104957407_mediaitem104957405.jpg",
  author: "https://www.facebook.com/bbcnews",
  description: "The fee for single-use bags will rise to 10p and be extended to all shops from April 2021.",
  url: "https://www.bbc.com/news/uk-53968502"
};

describe("NewsItem", () => {
  test("renders NewsItem component", () => {
    render(<NewsItem article={articleData} />);
  });
});