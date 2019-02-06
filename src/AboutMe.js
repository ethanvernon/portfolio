import React, { Component } from 'react';

export class AboutMe extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.handleClick('about me');
	}

	render() {

		let hidden;

		if (this.props.page === 'about me') {
			hidden='fadeInOut current';
		} else if (this.props.page === 'home') {
			hidden='fadeInOut selector';
		} else {
			hidden='fadeInOut hidden';
		}

		return (
			<div id="about-me" className={hidden} onClick={this.handleClick}>
				<span>About Me</span>
				{this.props.page==='about me' &&
					<div className='center content'>
						Coming soon...
					</div>
				}
			</div>
		)
	}
}