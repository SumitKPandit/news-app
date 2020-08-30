import React, {useState, useEffect} from 'react';

import classes from './App.module.scss';
import Header from "./components/Header/Header";
import NewsGroup from './components/NewsGroup/NewsGroup';
import Spinner from "./components/Spinner/Spinner";
import Alert from "./components/Alert/Alert";

function App() {

  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    (async function() {
      try {
        const res = await fetch("http://localhost:3001/init");
        const data = await res.json();
        if(data.status === "ok") {
          setLoading(false);
          setArticles(data.articles);
        }
      } catch(err) {
        console.log(err);
        setError(true);
      }
    })();
  }, []);

  const handleChange = e => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  return (
    <div className={classes.App}>
      <Header query={query} changeHandler={handleChange} />
      {isLoading ? <Spinner /> :
        hasError ? <Alert /> :
          <main>
            <h1>Top Headlines</h1>
            <NewsGroup articles={articles}/>
          </main>
      }
    </div>
  );
}

export default App;
