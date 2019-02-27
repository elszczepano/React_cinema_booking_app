import React from 'react';
import styled from 'styled-components';

const P = styled.p`
	text-align: justify;
	padding: 50px 10px;
	margin: 50px 0;
	border-top: 2px solid orange;
	border-bottom: 2px solid orange;
`;

const MovieDesc = ({desc}) => {
	return (
		<P>{desc}</P>
	);
};

export default MovieDesc;