import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.component.js';
import Footer from './Components/Footer.component.js';
import Calculator from './Components/Calculator.component.js';
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        My name is : {this.state.name}
        My age is : {this.state.age}
        </div>
        
        
        <div>
         <form>
            <label>
              number1:
              <input type="integer" name="number1" />
            </label>
            <label>
              number2:
              <input type="interger" name="number2" />
            </label>
            <input type="submit" value="Submit" />

         </form>
        </div>
        
        <div>
          <Header title= "Test props" />
          <Header title="Another title" />
          
        </div>    
        <div>
          <button onClick={this.onClick.bind(this)} >Click </button>
          <input onChange = {this.setAge.bind(this)} />
        </div>
        <div>
          <Calculator />
        </div>
        </div>

    );
  }
}

export default App;
