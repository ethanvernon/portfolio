import React, { Component } from 'react';
import {AboutMe} from './AboutMe';
import {Portfolio} from './Portfolio';
import {Resume} from './Resume';
import {Contact} from './Contact';
import {Blog} from './Blog';
import {Title} from './Title';
import {Back} from './Back';
import spell from "./spell-selector.png";
import dice from "./story-dice.png";
import npc from "./npc-gen.png";
import pomo from "./pomodoro-clock.png";
import ab from "./ab-workout.png";
import wild from "./wildshape-calc.png";


export class PauseMenu extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
			page: 'home',
			thumbs: [spell, dice, npc, pomo, ab, wild],
			currentThumb: dice
	    };

		this.handleMenuClick = this.handleMenuClick.bind(this);
		this.handleArrowClick= this.handleArrowClick.bind(this);
	}

	handleMenuClick(pageName) {		
		this.setState({
			page: pageName,
		})
	}

	handleArrowClick(direction) {
		//save array and declare newThumb
		let arr = this.state.thumbs;
		let newThumb;

		//fine index of current thumbnail
		let current = arr.findIndex((current) => {return current == this.state.currentThumb});
		
		//if direction is left/right from start/end
		if (direction==='left' && current==0) {
			newThumb=arr.length-1;
		}
		else if (direction==='right' && current==arr.length-1) {
			newThumb=0;
		}
		//if direction is left
		else if (direction==='left') {
			newThumb=current-1;
		}
		//if direction is right
		else if (direction==='right') {
			newThumb=current+1;
		}

		//update state for new thumb
		this.setState({
			currentThumb: arr[newThumb]
		})
	}

	render() {
		let home = this.state.page === 'home' ? 'center' : '';

		return(
			<div>
				<Title/>
				<div id='pause-menu' className={home}>
					<AboutMe
						handleClick={this.handleMenuClick}
						page={this.state.page}/>
					<Portfolio
						handleClick={this.handleMenuClick}
						page={this.state.page}
						thumb={this.state.currentThumb}
						handleArrowClick={this.handleArrowClick}/>
					<Resume
						handleClick={this.handleMenuClick}
						page={this.state.page}/>
					<Contact
						handleClick={this.handleMenuClick}
						page={this.state.page}/>
					<Blog
						handleClick={this.handleMenuClick}
						page={this.state.page}/>
					{this.state.page !== 'home' &&
						<Back
							handleClick={this.handleMenuClick}/>
					}
				</div>
			</div>
		)
	}

}