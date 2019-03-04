import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AvailableMovies from './Containers/AvailableMovies';
import Movie from './Containers/Movie';
import ChooseSeats from './Containers/ChooseSeats';
import Payment from './Containers/Payment';

const basename = window.location.hostname === 'localhost' ? 'localhost' : 'https://elszczepano.github.io/ARPIdeas_recruitment/';

class App extends Component {
	render() {
		return (
			<Router basename={basename}>
				<Switch>
					<Route exact path="/" component={AvailableMovies} />
					<Route exact path="/movie/:id" component={Movie} />
					<Route exact path="/seats/:id" component={ChooseSeats} />
					<Route exact path="/payment" component={Payment} />
				</Switch>
			</Router>
		);
	}
}

export default App;