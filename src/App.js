import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";

export default function App() {
  return (
    <Router>
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={AboutMe} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/resume' component={Resume} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

