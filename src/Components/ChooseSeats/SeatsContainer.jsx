import React, {Component} from 'react';
import styled from 'styled-components';
import API from '../../apiConfig';
import Seat from './Seat';

const Grid = styled.div`
	margin-top: 100px;
	display: grid;
	grid-template-rows: repeat(14, 1fr);
	grid-template-columns: repeat(20, 1fr);
	grid-gap: 20px;
`;

class SeatsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			availableSeats: [],
			choosedSeats: []
		};
	}
	componentDidMount() {
		API.get(`Reservation/GetSeatsStatus/${this.props.showingId}`).then(res => {
			this.setState({
				availableSeats: res.data
			});
		});
	}
	toggleSeat = (row, seat) => {
		if(this.state.choosedSeats.length) {
			const previousArrayLenght = this.state.choosedSeats.length;
			const updatedArray = this.state.choosedSeats.filter(elem => !(elem.row === row && elem.seat === seat));
			this.setState({
				choosedSeats: [...updatedArray]
			});
			console.log(updatedArray.length !== previousArrayLenght);
			if(updatedArray.length !== previousArrayLenght) return;
		}
		this.setState({
			choosedSeats: [...this.state.choosedSeats,{
				row: row,
				seat: seat
			}]
		});
	};
	render() {
		return (
			<Grid>
				{this.state.availableSeats ? this.state.availableSeats.map((row, rowIndex) =>
					row.seats.map((seat, seatIndex) => <Seat toggleSeat={this.toggleSeat} seatId={`${rowIndex}${seatIndex}`} key={`${rowIndex}${seatIndex}`} row={rowIndex} seat={seatIndex} available={seat}/>)
				): null}
			</Grid>
		);
	}
}

export default SeatsContainer;