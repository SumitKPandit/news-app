import React, {useState, useEffect} from 'react';

import classes from './App.module.scss';
import Header from "./components/Header/Header";

function App() {

  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch("http://localhost:3001/init")
      .then(res => res.json())
      .then(data => {
        if(data.status === "ok")
          setArticles(data.articles)
      }).catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/search/${query}`)
    .then(res => res.json())
    .then(data => {
      if(data.status === "ok")
        setArticles(data.articles)
    }).catch(err => {
      console.log(err);
    });
  }, [query]);

  const handleChange = e => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  return (
    <div className={classes.App}>
      <Header query={query} changeHandler={handleChange} />
      <h1>Hello World!</h1>
      {articles.map(article => article.author)}
    </div>
  );
}

export default App;
