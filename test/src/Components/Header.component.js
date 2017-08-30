import React from 'react';

class Header extends React.Component{
	render(){
		console.log(this.props);
		return(
          <div>
 			<h1>Test create Header tag for React = {this.props.title}</h1>
          </div>
			)
	}

}

export default Header;