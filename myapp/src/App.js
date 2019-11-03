import React, {Component} from 'react';
import './App.css';
import TitleObj from './TitleObj';
import FooterObj from './FooterObj';


class App extends Component{
	

	render(){
		return (<div>
			<TitleObj></TitleObj>
			<div className="AppRight">
				{ /* console.log( this.props.children[1] ) */  }
				{this.props.children}
			</div>
			<FooterObj></FooterObj>
			
		</div>)
	}
}

export default App;
