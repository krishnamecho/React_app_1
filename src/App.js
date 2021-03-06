import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/animejs/lib/anime.es.js'
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Apple from './Apple';
// import Wabble from './Wabble';
import Api from './Api';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path="/api" component={Api} />
        <Route exact path="/apple" component={Apple} />
        {/* <Route exact path='/wabble' component={Wabble} /> */}
        <Redirect to="/" />
      </Switch>
    <Footer />
    </>
  );
}

export default App;
