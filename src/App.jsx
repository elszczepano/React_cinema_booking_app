import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AvailableMovies from './Containers/AvailableMovies';
import Movie from './Containers/Movie';
import ChooseSeats from './Containers/ChooseSeats';
import ConfirmReservation from './Containers/ConfirmReservation';
import Summary from './Containers/Summary';

class App extends Component {
	render() {
		return (
			<Router>
				<>
					<Route exact path="/" component={AvailableMovies} />
					<Route exact path="/movie/:id" component={Movie} />
					<Route exact path="/seats/:id" component={ChooseSeats} />
					<Route exact path="/confirm" component={ConfirmReservation} />
					<Route exact path="/summary" component={Summary} />
				</>
			</Router>
		);
	}
}

export default App;