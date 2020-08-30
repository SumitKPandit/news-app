import React, {useState, useEffect, useRef} from 'react';
import _ from "lodash";

import classes from './App.module.scss';
import Header from "./components/Header/Header";
import NewsGroup from './components/NewsGroup/NewsGroup';
import Spinner from "./components/Spinner/Spinner";
import Alert from "./components/Alert/Alert";
import fetch from 'node-fetch';

function App() {

  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [query, setQuery] = useState('');

  const getNews = async (query = '') => {
    try {
      setLoading(true);
      let res = null;
      if(query === '') {
        res = await fetch("http://localhost:3001/init");
      } else {
        res = await fetch(`http://localhost:3001/search/?q=${query}`);
      }
      const data = await res.json();
      if(data.status === "ok") {
        setLoading(false);
        setError(false);
        setArticles(data.articles);
      }
    } catch(err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  const delayedInputhandle = useRef(_.debounce(q => getNews(q), 500)).current;

  const handleChange = e => {
    setQuery(e.target.value);
    delayedInputhandle(e.target.value)
  };

  return (
    <div className={classes.App}>
      <Header changeHandler={handleChange} />
      {isLoading ? <Spinner /> :
        hasError ? <Alert /> :
          <main>
            {query === '' ? <h1>Top Headlines</h1> : <h1>News About: {query}</h1>}
            <NewsGroup articles={articles}/>
          </main>
      }
    </div>
  );
}

export default App;
