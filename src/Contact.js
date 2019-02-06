import React, { Component } from 'react';

export class Contact extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.handleClick('contact');
	}

	render() {

		let hidden;

		if (this.props.page === 'contact') {
			hidden='fadeInOut current';
		} else if (this.props.page === 'home') {
			hidden='fadeInOut selector';
		} else {
			hidden='fadeInOut hidden';
		}

		return (
			<div id="contact" className={hidden} onClick={this.handleClick}>
				<span>Contact</span>
				{this.props.page==='contact' &&
					<div className='center content'>
						Coming soon...
					</div>
				}
			</div>
		)
	}
}