import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 50px 0;
`;
const Button = styled.button`
	all: unset;
	text-transform: uppercase;
	background-color: orange;
	color: black;
	font-weight: bold;
	padding: 1rem;
	cursor: pointer;
	transition: transform .3s;
	&:hover {
		transform: scale(1.03);
	}
`;

const ConfirmChoose = ({sendReservationRequest}) => {
	return (
		<Wrapper>
			<Button onClick={sendReservationRequest}>Potwierdzam wybór miejsc</Button>
		</Wrapper>
	);
};

export default ConfirmChoose;