import React, {Component} from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import ChoosedMovieTitle from '../Components/ChooseSeats/ChoosedMovieTitle';
import SeatsContainer from '../Components/ChooseSeats/SeatsContainer';

const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto 50px auto;
`;

class ChooseSeats extends Component {
	render() {
		const title = !this.props.location.state ? '' : this.props.location.state.title;
		return (
			<Layout>
				<Container>
					<ChoosedMovieTitle title={title}/>
					<SeatsContainer showingId={this.props.match.params.id}/>
				</Container>
			</Layout>
		);
	}
}

export default ChooseSeats;