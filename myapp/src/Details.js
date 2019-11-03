import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './App.css';

class Details extends Component{
	render(){
		return (<div>
			<h1> Movie Detail Pages </h1>
			name:{ this.props.location.query.name }
			<br/>
			id:{ this.props.location.query.id }
			<br/>
			premiered：{ this.props.location.query.premiered }
			<br/>
			<img alt={ this.props.location.query.name } src={ this.props.location.query.image } />
			<br/>
			<Link to="/">Back to the Home Page</Link>
		</div>)
	}
}

export default Details;
