import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landingpage from './landingpage';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
	<Switch>
		<Route exact path="/" component={Landingpage} />
		<Route path='/about' component={About} />
		<Route path='/contact' component={Contact} />
		<Route path='/projects' component={Projects} />
		<Route path='/resume' component={Resume} />
	</Switch>
)

export default Main;