import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from './containers/AboutUs';
import Post from './containers/Post';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Hero/>
        <Route path="/" exact component={Home}/>
        <Route path="/about-us" component={AboutUs}/>
        <Route path="/post/:postId" component={Post}/>
        <Route path="/contact-us" component={ContactUs}/>
    </div>

    </Router>

  );
}

export default App;
