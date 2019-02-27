import React, {Component} from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import CurrentDay from '../Components/AvailableMovies/CurrentDay';
import API from '../apiConfig';
import SingleMovieShortcut from '../Components/AvailableMovies/SingleMovieShortcut';
import FilterByCategory from '../Components/AvailableMovies/FilterByCategory';
import ChooseMovie from '../Components/AvailableMovies/ChooseMovie';

const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto 50px auto;
`;

class AvailableMovies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			availableMovies: [],
			filter: ''
		};
	}
	componentDidMount() {
		API.get('Repertoire/Get').then(res => {
			this.setState({
				availableMovies: res.data
			});

		});
	}
	setFilter = e => {
		this.setState({
			filter: e.target.value
		});
	};
	render() {
		return (
			<Layout>
				<Container>
					<CurrentDay/>
					<FilterByCategory setFilter={this.setFilter}/>
					{this.state.filter ? this.state.availableMovies
						.filter(element => element.categories.includes(this.state.filter))
						.map(movie =>
							<SingleMovieShortcut key={movie.id} movie={movie}/>
						) :
						this.state.availableMovies.map(movie =>
							<SingleMovieShortcut key={movie.id} movie={movie}/>
						)}
					<ChooseMovie movies={this.state.availableMovies}/>
				</Container>
			</Layout>
		);
	}
}


export default AvailableMovies;