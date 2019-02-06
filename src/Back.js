import React, { Component } from 'react';

export class Back extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.handleClick('home');
	}

	render() {

		let hidden;

		/*
		if (this.props.page === 'about me') {
			hidden='fadeInOut current';
		} else if (this.props.page === 'home') {
			hidden='fadeInOut selector';
		} else {
			hidden='fadeInOut hidden';
		}*/

		return (
			<div id="back-button" className='' onClick={this.handleClick}>
				<span className='center'>Back</span>
			</div>
		)
	}
}