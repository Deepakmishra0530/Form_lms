import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form1 from './components/Form1';

function App() {

  

 

 

 
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Form1} />
        {/* <Route path="/success" component={Success} /> */}
      </Switch>
    </Router>
    </>
  );
};

export default App;
