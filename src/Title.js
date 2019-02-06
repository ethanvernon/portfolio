import React, { Component } from 'react';

export class Title extends Component {
	constructor(props) {
		super(props);

		//this.handleClick = this.handleClick.bind(this);
	}

	/*handleClick() {
		this.props.handleClick();
	}*/

	render() {

		return (
			<div id="title" className="title" onClick={this.handleClick}>
				<h1>Ethan Vernon</h1>
			</div>
		)
	}
}