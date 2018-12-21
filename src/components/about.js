import React, { Component } from 'react';
import aboutMe from './aboutMe.png'
import { Grid, Cell} from 'react-mdl';

class About extends Component {
	render() {

		return(
		   <div className="about-body">
			  <Grid className="about-grid">
				<Cell col={4}>
				 <h2>  Flora Feng </h2>
				<img
				  src={aboutMe}
				  alt="aboutMe"
				  style={{height:'350px', paddingLeft:'2em'}}
				/>
				<p style={{width:'55%', margin:'auto', paddingTop:'1em'}}>Follow me on social networks!</p>
	                    
	            <div className="social-links-about"> 
				    <a href="http://google.com" rel="npppener noreferrer" target="_blank">
				           <i className="fa fa-linkedin-square"  aria-hidden="true" /> 
				    </a>
				    <a href="http://google.com" rel="npppener noreferrer" target="_blank">
				           <i className="fa fa-github-square" aria-hidden="true" ></i>
				    </a>
				    <a href="http://google.com" rel="npppener noreferrer" target="_blank">
				           <i className="fa fa-facebook-square" aria-hidden="true" ></i>
				    </a>
				    <a href="http://google.com" rel="npppener noreferrer" target="_blank">
				           <i className="fa fa-instagram" aria-hidden="true" ></i>
				    </a>
			    </div>
				
			</Cell>

			<Cell className="about-right-col" col={8}>
			 <h2>About Me</h2>
			 <hr />

			<p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>this this the description </p>
			</Cell>
		  </Grid>
		  
		  </div>
		)
	}
}

export default About;