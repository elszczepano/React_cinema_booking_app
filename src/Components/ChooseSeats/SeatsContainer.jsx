import React, {Component} from 'react';
import styled from 'styled-components';
import API from '../../apiConfig';
import Seat from './Seat';

const Grid = styled.div`
	display: grid;
	grid-template-rows: repeat(14, 1fr);
	grid-template-columns: repeat(20, 1fr);
	grid-gap: 2px;
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
		});
	}
	render() {
		return (
			<Grid>
				{this.state.availableSeats ? this.state.availableSeats.map((row, rowIndex) =>
					row.seats.map((seat, seatIndex) => <Seat seatId={`${rowIndex}${seatIndex}`} key={`${rowIndex}${seatIndex}`} row={rowIndex} seat={seatIndex} available={seat}/>)
				): null}
			</Grid>
		);
	}
}

export default SeatsContainer;