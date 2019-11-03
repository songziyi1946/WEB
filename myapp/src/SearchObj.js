import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import axios from 'axios';

class SearchObj extends Component{

	constructor(props){
		super(props);
		// Set initial value
		this.state={
			// After filtered, interface get the data
			data_list:[],
			// Search result
			result_val:''
		}
	}
	
	btnFn( $e ){
		// Search keyword
		let _search_key = this.refs.txt_ref.value;

		let _self = this;

		axios.get('https://api.tvmaze.com/search/shows?q=test')
			.then(function( _d ){
				console.log( _d.data );
				// Filter out the data without image
				let _temp = [];

				_d.data.map( (n, i)=>{
					// Stock the data with image
					if( n.show.image !== null ){
						_temp.push( n );
					}
				})
				console.log( _search_key )

				/* 
				If no keywords are entered, null is returned.
				Otherwise filtering results are returned.
				*/
				let _result_val = null;
				if( _search_key ){
					// Filter
					let xx = _temp.filter( n=>{
						return  n.show.name === _search_key;
					});
					// xx is a Array
					//console.log(xx)

					_result_val = {
						id: xx[0].show.id,
						name: xx[0].show.name,
						img: xx[0].show.image.medium
					}
				} else {
					_result_val = {
						id:'',
						name:'',
						img:''
					}
				}

				_self.setState({
					// List all the results
					data_list : _temp,
					// Search result
					result_val : _result_val
				});

			});
	}

// Driving Test

	render(){
		return (<div>

			<input type='text' ref='txt_ref' />
			<input type='button' onClick={this.btnFn.bind(this)} value='Search' />

			<br/>
			Search Results：<br/>
			id:{this.state.result_val.id}
			<br/>
			name:{this.state.result_val.name}
			<br/>
			<img src={this.state.result_val.img} />
			<br/>

			<h1>----All the movie results----</h1>
			{this.state.data_list.map((n, i) =>
				<div key={i}>
					<Link to={{
								pathname:"/Details/",
								query:{
									id:n.show.id,
									name:n.show.name,
									premiered:n.show.premiered,
									image:n.show.image.medium
								}
							}}>
						{n.show.name}-Click here for Details-Movie Detail Pages
					</Link>
				 </div>
			)}

		</div>)
	}
}

export default SearchObj;
