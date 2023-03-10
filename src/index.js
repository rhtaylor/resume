import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  
import Rhtaylor from './components/Rhtaylor' 
import Portfolio from './components/Portfolio' 
import Resume from './components/Resume' 
import Home from './components/Home';
import { HashRouter, BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL} getUserConfirmation={(message, callback) => {
    // this is the default behavior
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  }}>
    <Route path="/" component={App} />  
    <Route exact path='/Home' component={Home} />
    <Route exact path="/Rhtaylor" render={(...routerProps)=> <Rhtaylor {...routerProps} />} />
    <Route exact path="/Portfolio" render={(...routerProps) => <Portfolio {...routerProps} />} />
    <Route exact path="/Resume" render={(...routerProps) => <Resume {...routerProps}/>} />
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
