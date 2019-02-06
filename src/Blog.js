import React, { Component } from 'react';

export class Blog extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.handleClick('blog');
	}

	render() {

		let hidden;

		if (this.props.page === 'blog') {
			hidden='fadeInOut current';
		} else if (this.props.page === 'home') {
			hidden='fadeInOut selector';
		} else {
			hidden='fadeInOut hidden';
		}

		return (
			<div id="blog" className={hidden} onClick={this.handleClick}>
				<span>Blog</span>
				{this.props.page==='blog' &&
					<div className='center content'>
						Coming soon...
					</div>
				}
			</div>
		)
	}
}