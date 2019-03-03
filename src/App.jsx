import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AvailableMovies from './Containers/AvailableMovies';
import Movie from './Containers/Movie';
import ChooseSeats from './Containers/ChooseSeats';
import Payment from './Containers/Payment';

class App extends Component {
	render() {
		return (
			<Router>
				<>
					<Route exact path="/" component={AvailableMovies} />
					<Route exact path="/movie/:id" component={Movie} />
					<Route exact path="/seats/:id" component={ChooseSeats} />
					<Route exact path="/payment" component={Payment} />
				</>
			</Router>
		);
	}
}

export default App;