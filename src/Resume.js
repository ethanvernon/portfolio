import React, { Component } from 'react';

export class Resume extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.handleClick('resume');
	}

	render() {

		let hidden;

		if (this.props.page === 'resume') {
			hidden='fadeInOut current';
		} else if (this.props.page === 'home') {
			hidden='fadeInOut selector';
		} else {
			hidden='fadeInOut hidden';
		}

		return (
			<div id="resume" className={hidden} onClick={this.handleClick}>
				<span>Resume</span>
				{this.props.page==='resume' &&
					<div className='center content'>
						Coming soon...
					</div>
				}
			</div>
		)
	}
}