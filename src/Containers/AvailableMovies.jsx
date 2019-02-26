import React, {Component} from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import CurrentDay from '../Components/AvailableMovies/CurrentDay';
import API from '../apiConfig';
import SingleMovieShortcut from "../Components/AvailableMovies/SingleMovieShortcut";

const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto;
`;

class AvailableMovies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			availableMovies: []
		};
	}
	componentDidMount() {
		API.get('Repertoire/Get').then(res => {
			this.setState({
				availableMovies: res.data
			});

		});
	}
	render() {
		return (
			<Layout>
				<Container>
					<CurrentDay/>
					{this.state.availableMovies.map(movie =>
						<SingleMovieShortcut key={movie.id} movie={movie}/>
					)}
				</Container>
			</Layout>
		);
	}
}


export default AvailableMovies;