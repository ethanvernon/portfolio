import React, { Component } from 'react';
import spell from "./spell-selector.png";

export class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.handleClick('portfolio');
	}

	render() {

		let hidden;

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
						<span className='thumbnail-container'></span><img className='port-thumb' src={spell}/>
						<div id='left-arrow' className='arrow'>
							&#171;
						</div>
						<div id='right-arrow' className='arrow'>
							&#187;
						</div>
					</div>
				}
			</div>
		)
	}
}