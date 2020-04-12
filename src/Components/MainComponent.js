import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import Lodges from './LodgesComponent';



class Main extends Component {
    constructor(props){
        super(props)

    }
  
    render() {

    const HomePage = () => {
        return(
            <Home />
        );
    }
    const AboutPage = () => {
        return(
            <About />
        );
    }
    const ContactPage = () => {
        return(
            <Contact />
        );
    }
    const LodgesPage = () => {
        return(
            <Lodges />
        );
    }
  
      return (
          <div>
              <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/about' component={AboutPage} />
                    <Route path='/contact' component={ContactPage} />
                    <Route path='/lodges' component={LodgesPage} />
                    <Redirect to='/home' />
                </Switch>
              <Footer />
          </div>
      );
    }
  }
  
  export default Main;