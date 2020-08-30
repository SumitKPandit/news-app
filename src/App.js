import React from 'react';

import classes from './App.module.scss';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
