import React, { Component } from "react";
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';
import Contact from './Contact';
import About from  './About';
import Dining from './Dining';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  render() {
    const HomePage = () => {
        return (
            <Home />
        );
    }
      return (
          <div >
              <Header />
              <Switch>
                    <Route path='/home' component={HomePage} />
                     <Route exact path='/contactus' component={Contact} />
                     <Route exact path='/gallery' component={Gallery} />
                     <Route exact path='/aboutus' component={About} />
                     <Route exact path='/dining' component={Dining} />
                    <Redirect to='/home' />
                </Switch>
              <Footer />
          </div>
      );
  }
}

export default Main;