import React from 'react';
import './App.css';
import { Header } from './Header'
import { Footer } from './Footer'
import { Cases } from './Cases';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routeDetail } from './routeDetails';

export default class App extends React.Component {
    constructor(){
      super()
      this.state ={
       
      }
    }
    render(){
      
      return(
   
        <div className="App">
        <Router>
            <Switch>
              <Route path="/:id" component={routeDetail}></Route>
            </Switch>
        </Router>
          <routeDetail />
          <Header />
          <Cases />
          <Footer />
        </div>
      )
    }
}