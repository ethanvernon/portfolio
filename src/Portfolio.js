import React, { Component } from 'react';

export class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handleArrowClick = this.handleArrowClick.bind(this);
	}

	handleClick() {
		this.props.handleClick('portfolio');
	}

	handleArrowClick(direction) {
		this.props.handleArrowClick(direction);
	}

	render() {

		//declare var to use as className
		let hidden;

		//check current page for appropriate classes
		if (this.props.page === 'portfolio') {
			hidden='fadeInOut current';
		} else if (this.props.page === 'home') {
			hidden='fadeInOut selector';
		} else {
			hidden='fadeInOut hidden';
		}

		return (
			<div id="portfolio" className={hidden} onClick={this.handleClick}>
				<span>Portfolio</span>
				{this.props.page==='portfolio' &&
					<div className='frame'>
						<span className='thumbnail-container'></span><img className='port-thumb' src={this.props.thumb}/>
						<div id='left-arrow' className='arrow' onClick={() => this.handleArrowClick('left')}>
							&#171;
						</div>
						<div id='right-arrow' className='arrow' onClick={() => this.handleArrowClick('right')}>
							&#187;
						</div>
					</div>
				}
			</div>
		)
	}
}