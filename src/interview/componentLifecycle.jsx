import React from 'react';

class ComponentLifecycle extends React.Component{

constructor(props){
	super(props);
	this.state = { num: 0 };
	this.clickHandler = this.clickHandler.bind(this);
}

// Button onClick callback function
clickHandler (event){
	this.setState(state => ({num: state.num + 1}))
}

// Component lifecycle methods
// Triggered when component is mounted
componentDidMount(){
	console.log("Mounted");
}
	
// Triggered when component is updated
componentDidUpdate(){
	console.log("Updated");
}

render() {
	console.log("Rendered");
	return (
	<div>
		<h1>Demo App</h1>
		<p>Number: {this.state.num}</p>
		<button onClick={this.clickHandler}>increment</button>
	</div>
	);
}
};

export default ComponentLifecycle;
