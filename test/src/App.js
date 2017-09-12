import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.component.js';
import Footer from './Components/Footer.component.js';
import Calculator from './Components/Calculator.component.js';
import { BrowserRouter,Switch,Route,NavLink} from 'react-router-dom';
import {Home,Input,Output} from './Components';
import {queryString} from 'query-string';
class App extends Component {

  constructor(){
    super();
    this.state = {name: 'Kitsada',age: 21};

  }
  onClick(){
    this.setState({name: "Hopenaja"});
  }

  setAge(e){
    const age = e.target.value;
    this.setState({age: age});
  }

  getVal(){
    return "getval";
  }


  render() {
     var list = [
        <Header />,
        <Header />,
        <Footer />
     ];

    return (
      <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li><NavLink to="/" activeclassName="active">Home</NavLink></li>
          </ul>
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
        <div>
        My name is : {this.state.name}
        My age is : {this.state.age}
        </div>
        
        
        <div>
          <button onClick={this.onClick.bind(this)} >Click </button>
          <input onChange = {this.setAge.bind(this)} />
        </div>
        
        <div>
          <Switch>
              <Route path="/" component={Input} exact={true} />
              <Route path="/level1/:value" component={Output} exact={true} />
          </Switch>
         
        </div>




        </div>
        </BrowserRouter>
    );
  }
}

export default App;