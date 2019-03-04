import React, {Component} from 'react';
import styled from 'styled-components';
import API from '../../apiConfig';
import Seat from './Seat';

const Grid = styled.div`
	margin: 30px 20px;
	display: grid;
	grid-template-rows: repeat(14, 1fr);
	grid-template-columns: repeat(20, 1fr);
	grid-gap: 20px;
	justify-items: center;
`;

class SeatsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			availableSeats: []
		};
	}
	componentDidMount() {
		API.get(`Reservation/GetSeatsStatus/${this.props.showingId}`).then(res => {
			this.setState({
				availableSeats: res.data
			});
		}).catch(() => {
			window.alert('Nie udało się pobrać listy dostępnych miejsc. Spróbuj jeszcze raz.');
		});
	}
	render() {
		return (
			<Grid>
				{this.state.availableSeats ? this.state.availableSeats.map((row, rowIndex) =>
					row.seats.map((seat, seatIndex) => <Seat
						toggleSeat={this.props.toggleSeat}
						seatId={`${rowIndex}${seatIndex}`}
						key={`${rowIndex}${seatIndex}`}
						row={rowIndex}
						seat={seatIndex}
						available={seat}
					/>)
				): null}
			</Grid>
		);
	}
}

export default SeatsContainer;