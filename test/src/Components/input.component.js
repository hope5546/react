import React from 'react';
import {  NavLink } from 'react-router-dom';
class Input extends React.Component {
	  constructor() {
    super();
    this.state = { name: "" };

  }

    setAge(e){
    var age = e.target.value;
    this.setState({name:age});
    }
  
    render(){
        return (
            <div>
        <input type="text" onChange={this.setAge.bind(this)} placeholder="Text" ref="name"/>
        <NavLink to={{pathname:"/level1/"+this.state.name}} activeClassName="active"><input type="submit" /></NavLink>
      
            </div>
        );
    }
}

export default Input;