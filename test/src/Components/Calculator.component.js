import React from 'react';

class Calculator extends React.Component{
	constructor(){
		super();
		this.state = {
			num1: "",
			num2: ""
			
		};
	}
	setNum1(e){
		const num1 = e.target.value;
		this.setState({num1: num1});
	}
	setNum2(e){
		const num2 = e.target.value;
		this.setState({num2: num2});
	}
	render(){
		return(
			<div>
				<h3> Text1 : {this.state.num1} </h3>
				<h3> Text2 : {this.state.num2} </h3>
				<h1> Total : {this.state.num1+this.state.num2} </h1>
				text1: <input onChange = {this.setNum1.bind(this)} />
				text2: <input onChange = {this.setNum2.bind(this)} />
			</div>

			);
	}
}

export default Calculator;