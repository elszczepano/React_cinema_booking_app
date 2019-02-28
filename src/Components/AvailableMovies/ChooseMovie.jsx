import React, {Component} from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

const Select = styled.select`
	color: orange;
    background: black;
    border: 1px solid orange;
    padding: 10px;
    display: flex;
    margin: 0 auto;
    width: 40%;
`;
const Wrapper = styled.div`
	margin: 50px 0;
`;
const H3 = styled.h3`
	text-align: center;
	font-size: 30px;
	color: orange;
`;

class ChooseMovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieId: 0,
			movieTitle: ''
		};
	}
	chooseMovie = e => {
		const title = this.props.movies.filter(movie => movie.id === parseInt(e.target.value))[0].title;
		console.log(title);
		this.setState({
			movieTitle: title,
			movieId: e.target.value
		});
	};
	render() {
		return (
			this.state.movieId ? <Redirect to={{
				pathname: `/seats/${this.state.movieId}`,
				state: {
					title: this.state.movieTitle
				}
			}} /> :
				<Wrapper>
					<H3>Wybierz film:</H3>
					<Select onChange={this.chooseMovie} name="chooseMovie" id="chooseMovie">
						<option value="">Wybierz film</option>
						{this.props.movies ? this.props.movies.map(movie => <option key={movie.id} value={movie.id}>{movie.title}</option>) : null}
					</Select>
				</Wrapper>
		);
	}
}

export default ChooseMovie;