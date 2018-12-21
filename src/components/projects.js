import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0
		};
	}

	toggleCategories() {
		if(this.state.activeTab === 0){
		return(
			<div className="projects-grid">
			  <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>React Project 1</CardTitle>
			    <CardText>
			        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			        Mauris sagittis pellentesque lacus eleifend lacinia...
			    </CardText>
			    <CardActions border>
			        <Button colored>Github</Button>
			        <Button colored>COdePen</Button>
			        <Button colored>LiveDemo</Button>
			    </CardActions>
			    <CardMenu style={{color: '#fff'}}>
			        <IconButton name="share" />
			    </CardMenu>
			</Card>

			<Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>React Project 1</CardTitle>
			    <CardText>
			        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			        Mauris sagittis pellentesque lacus eleifend lacinia...
			    </CardText>
			    <CardActions border>
			        <Button colored>Github</Button>
			        <Button colored>COdePen</Button>
			        <Button colored>LiveDemo</Button>
			    </CardActions>
			    <CardMenu style={{color: '#fff'}}>
			        <IconButton name="share" />
			    </CardMenu>
			</Card>

			  <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>React Project 1</CardTitle>
			    <CardText>
			        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			        Mauris sagittis pellentesque lacus eleifend lacinia...
			    </CardText>
			    <CardActions border>
			        <Button colored>Github</Button>
			        <Button colored>COdePen</Button>
			        <Button colored>LiveDemo</Button>
			    </CardActions>
			    <CardMenu style={{color: '#fff'}}>
			        <IconButton name="share" />
			    </CardMenu>
			</Card>

			</div>
			)
	    } else if(this.state.activeTab === 1) {
	    	return(
			<div>
			<h1>NodeJS</h1>
			</div>
			)
	    } else if(this.state.activeTab === 2) {
	    	return(
			<div>
			<h1>Express</h1>
			</div>
			)
	    }
	}

	render() {
		return(
			<div className="caregory-tabs">
			 <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
			  <Tab>React</Tab>
			  <Tab>NodeJS</Tab>
			  <Tab>Express</Tab>
			 </Tabs>

			
			 <Grid>
			   <Cell col={12}>
			     <div className="content">{this.toggleCategories()}</div>
			   </Cell>
			 </Grid>
			
			</div>
		)
	}
}

export default Projects;






