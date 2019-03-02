import React, {Component} from 'react';
import styled from 'styled-components';

const Input = styled.input`
	display: none;
`;
const Label = styled.label`
	width: 25px;
	height: 25px;
`;

class Seat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			backgroundColor: parseInt(this.props.available) ? 'red' : 'white'
		};
	}
	changeStatus = () => {
		if(!parseInt(this.props.available)) {
			this.state.backgroundColor === 'white' ? this.setState({backgroundColor: 'green'}) : this.setState({backgroundColor: 'white'});
			this.props.toggleSeat(this.props.row, this.props.seat);
		}
	};
	render() {
		const {seatId, available} = this.props;
		return (
			<>
				<Label style={{backgroundColor: this.state.backgroundColor}} onClick={this.changeStatus} available={available} htmlFor={seatId}></Label>
				<Input type="checkbox" id={seatId} name={seatId} disabled={available}/>
			</>
		);
	}
}

export default Seat;