import React, { Component } from 'react';

import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skill';
import Avatar from './myAvatar.png';


class Resume extends Component {
	render() {
		return(
			<div>
			  <Grid>
			    <Cell col={4}>
			    <div style={{textAlign: 'center'}}>
				    <img
	   					src={Avatar}
				      	alt="avatar"
				      	style={{height:'200px'}}
				    />
			    </div>
			      <h2 style={{paddingTop:'2em'}}>Flora Feng </h2>
			      <h4 style={{color:'grey'}}>Programmer</h4>
			      <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
			      <p>description....</p>
			       <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
			       <h5>Address</h5>
			       <p> 5092 dorking ct</p>
			       <h5>Phone</h5>
			       <p>description....</p>
			        <h5>Email</h5>
			        <p>description....</p>
			        <h5>Website</h5>
			        <p>description....</p>
			      <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
			     </Cell>

				<Cell className="resume-right-col" col={8}>
				  <h2>Education</h2>

				  <Education 
				  	startYear={2012}
				  	endYear={2014}
				  	schoolName={"MyUniversity"}
				  	schoolDescription={"description"}
				  />

				  <Education 
				  	startYear={2012}
				  	endYear={2014}
				  	schoolName={"MyUniversity"}
				  	schoolDescription={"description"}
				  />

				  <Education 
				  	startYear={2012}
				  	endYear={2014}
				  	schoolName={"MyUniversity"}
				  	schoolDescription={"description"}
				  />

				  <Education 
				  	startYear={2012}
				  	endYear={2014}
				  	schoolName={"MyUniversity"}
				  	schoolDescription={"description"}
				  />
				  <hr style={{borderTop: '3px solid #e22947'}}/>
				 
				  <h2>Experience</h2>
				  <Experience 
				  	startYear={2012}
				  	endYear={2014}
				  	jobName={"Myjob"}
				  	jobDescription={"description"}
				  />
				<hr style={{borderTop: '3px solid #e22947'}}/>
				  <h2>Skills</h2>
				  <Skill 
				  	skill={"javascript"}
				  	progress={32}
				  />
				  <Skill 
				  	skill={"React"}
				  	progress={22}
				  />
				  <Skill 
				  	skill={"C++"}
				  	progress={12}
				  />
				  <Skill 
				  	skill={"javascript"}
				  	progress={32}
				  />
		        </Cell>
			  </Grid>
			</div>
		)
	}
}

export default Resume;