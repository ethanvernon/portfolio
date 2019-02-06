import React, { Component } from 'react';
import {AboutMe} from './AboutMe';
import {Portfolio} from './Portfolio';
import {Resume} from './Resume';
import {Contact} from './Contact';
import {Blog} from './Blog';
import {Title} from './Title';
import {Back} from './Back';


export class PauseMenu extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
			page: 'home'
	    };

		this.handleMenuClick = this.handleMenuClick.bind(this);
	}

	handleMenuClick(pageName) {		
		this.setState({
			page: pageName,
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
						page={this.state.page}/>
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