import React from 'react';
import styled from 'styled-components';

const Screen = styled.div`
	display: none;
	${({theme}) => theme.media.desktop} {
		margin-top: 30px;
		width: 100%;
		background-color: white;
		color: black;
		text-align: center;
		padding: 3px 0;
		font-size: 14px;
		display: block;
	}
`;

const MovieScreen = () => {
	return (
		<Screen>Ekran</Screen>
	);
};

export default MovieScreen;