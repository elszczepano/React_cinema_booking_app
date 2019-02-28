import React from 'react';
import styled from 'styled-components';

const Input = styled.input`

`;
const Label = styled.label`
	width: 15px;
	height: 15px;
	background-color: white;
`;

const Seat = ({row, seat, seatId}) => {
	return (
		<>
			<Label htmlFor={seatId}></Label>
			<Input type="checkbox" id={seatId} name={seatId}/>
		</>
	);
};

export default Seat;