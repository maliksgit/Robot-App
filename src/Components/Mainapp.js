import React, {Component} from 'react';
import Search from './Search';
// import {Robots} from './Robots'; 
import Apploop from './Apploop';
import Scroll from './Scroll';
class Mainapp extends Component{
	constructor(){
		super()
		this.state={
			Robots:[],
			SearchField:'',
		}
	}
	

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
		return response.json();
	})
	.then(users=>{
		return this.setState({Robots:users})
	})
}

// omponentDidMount(){
// 	fetch('https://jsonplaceholder.typicode.com/users')
// 	.then(response=> response.json())
// 	.then(users=> this.setState( {Robots:users}) )
// }


 
	onSearchChange=(event)=>{
	this.setState({SearchField: event.target.value});
}


render(){
	const {SearchField,Robots} = this.state;
	const filteredArray=Robots.filter(Robots=>{
		return Robots.name.toLowerCase().includes(SearchField.toLowerCase());
	})
	return (
		<div className='tc'>
			<h2> Search Your Robots Here</h2>
			<Search newSearchVeriable={this.onSearchChange}/>
			<Scroll>
			<Apploop Robots={filteredArray} />
			</Scroll>
		</div>

		);

	}
}

export default Mainapp;