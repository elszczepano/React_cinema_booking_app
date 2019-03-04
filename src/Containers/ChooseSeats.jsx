import React, {Component} from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import Layout from '../layout/Layout';
import ChoosedMovieTitle from '../Components/ChooseSeats/ChoosedMovieTitle';
import SeatsContainer from '../Components/ChooseSeats/SeatsContainer';
import ConfirmChoose from '../Components/ChooseSeats/ConfirmChoose';
import API from '../apiConfig';
import MovieScreen from '../Components/ChooseSeats/MovieScreen';

const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto 50px auto;
`;

class ChooseSeats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			choseSeats: [],
			paymentToken: ''
		};
	};
	toggleSeat = (row, seat) => {
		if(this.state.choseSeats.length) {
			const previousArrayLenght = this.state.choseSeats.length;
			const updatedArray = this.state.choseSeats.filter(elem => !(elem.row === row && elem.seatNumber === seat));
			this.setState({
				choseSeats: [...updatedArray]
			});
			if(updatedArray.length !== previousArrayLenght) return;
		}
		this.setState({
			choseSeats: [...this.state.choseSeats,{
				row: row,
				seatNumber: seat
			}]
		});
	};
	sendReservationRequest = () => {
		if(!this.state.choseSeats.length) {
			window.alert('Nie wybrano miejsc na seans. Proszę wybrać co najmniej jedno miejsce');
			return;
		} else {
			const confirm = window.confirm('Czy jesteś pewien, że chcesz dokonać rezerwacji wybranych miejsc?');
			if(confirm) {
				API.post('Reservation/ReserveSeats',{
					showingId: this.props.match.id,
					seats: [...this.state.choseSeats]
				}).then(response => this.setState({paymentToken: response.data}))
					.catch(() => {
						window.alert('Coś poszło nie tak. Proszę spróbuj jeszcze raz.');
					});
			}
		}
	};
	render() {
		const title = !this.props.location.state ? '' : this.props.location.state.title;
		return (
			this.state.paymentToken ? <Redirect to={{
				pathname: '/payment',
				state: {
					token: this.state.paymentToken,
					title: title
				}
			}} /> :
				<Layout>
					<Container>
						<ChoosedMovieTitle title={title}/>
						<MovieScreen/>
						<SeatsContainer toggleSeat={this.toggleSeat} showingId={this.props.match.params.id}/>
						<ConfirmChoose sendReservationRequest={this.sendReservationRequest}/>
					</Container>
				</Layout>
		);
	}
}

export default ChooseSeats;