import React, {Component} from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import API from '../apiConfig';
import MovieTitle from '../Components/Movie/MovieTitle';
import MovieDesc from '../Components/Movie/MovieDesc';
import MovieDetailsList from '../Components/Movie/MovieDetailsList';
import MovieDetailsTable from '../Components/Movie/MovieDetailsTable';
import { Link } from 'react-router-dom';

const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto;
`;
const Div = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;
const BackLinkWrapper = styled.div`
	text-align: right;
	padding: 50px 0;
	max-width: 90%;
`;

const BackLink = styled(Link)`
	color: orange;
`;


class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieDetails: {}
		};
	};
	componentDidMount() {
		API.get(`Movies/Get/${this.props.match.params.id}`).then(res => {
			this.setState({
				movieDetails: res.data
			});
		}).catch(() => {
			window.alert('Nie udało się wczytać danych o filmie. Spróbuj odświeżyć stronę.');
		});
	}
	render() {
		const details = this.state.movieDetails;
		return (
			<Layout>
				<Container>
					<MovieTitle title={details.title}/>
					<Div>
						<ul>
							<h2>Kategorie:</h2>
							<MovieDetailsList items={details.categories}/>
						</ul>
						<ul>
							<h2>Obsada:</h2>
							<MovieDetailsList items={details.actors}/>
						</ul>
					</Div>
					<MovieDesc desc={details.description}/>
					<MovieDetailsTable details={details}/>
					<BackLinkWrapper>
						<BackLink to={'/'}>Powrót do repertuaru</BackLink>
					</BackLinkWrapper>
				</Container>
			</Layout>
		);
	}
}

export default Movie;