import React from 'react';
import { render } from '@testing-library/react';

import NewsGroup from './NewsGroup';

const articleGroup = [
  {
    title: "Price of plastic carrier bags to double to 10p next year - BBC News",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/1134B/production/_104957407_mediaitem104957405.jpg",
    author: "https://www.facebook.com/bbcnews",
    description: "The fee for single-use bags will rise to 10p and be extended to all shops from April 2021.",
    url: "https://www.bbc.com/news/uk-53968502"
  },
  {
    title: "Lionel Messi's Man City transfer stance after La Liga statement over get-out clause - Mirror Online",
    urlToImage: "https://i2-prod.mirror.co.uk/incoming/article22595197.ece/ALTERNATES/s1200/0_Champions-League-Quarter-Final-FC-Barcelona-v-Bayern-Munich.jpg",
    author: "Gareth Bicknell",
    description: "Messi was dealt a blow in his bid to force through a transfer when La Liga backed Barcelona's stance, but the six-time Ballon d'Or winner is reportedly still determined to move",
    url: "https://www.mirror.co.uk/sport/football/transfer-news/lionel-messi-man-city-transfer-22603137"
  }
];

describe("NewsGroup", () => {
  test("renders NewsGroup component", () => {
    render(<NewsGroup articles={articleGroup} />);
  });
});