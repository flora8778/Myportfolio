import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from './myAvatar.png';

class Landingpage extends Component {
	render() {
		return(
			
			<div style={{width:'100%', margin:'auto'}}>
		 	 <Grid className="landing-grid">
			    <Cell col={12}>
			    <img
			       src={Avatar}
			       alt="avatar"
			       className="avatar-img"
			       />

			       <div className="banner-text">
			         <h1>Software Developer</h1>

			         <hr />

			         <p>Java | Python | | HTML/CSS | Bootstrap | JS | React | NodeJS | Express</p>
			       
			        <div className="social-links">
				        
				         <a href="http://google.com" rel="npppener noreferrer" target="_blank">
				           <i className="fa fa-linkedin-square"  aria-hidden="true" /> 
				         </a>

				     
				         <a href="http://google.com" rel="npppener noreferrer" target="_blank">
				           <i className="fa fa-github-square" aria-hidden="true" ></i>
				         </a>

				          <a href="http://google.com" rel="npppener noreferrer" target="_blank">
				           <i className="fa fa-free-code-camp" aria-hidden="true" ></i>
				         </a>

				          <a href="http://google.com" rel="npppener noreferrer" target="_blank">
				           <i className="fa fa-youtube-square" aria-hidden="true" ></i>
				         </a>

			        </div>
			       </div>
			    </Cell>
		   	 </Grid>
			</div>
		)
	}
}

export default Landingpage;