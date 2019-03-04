import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
	text-decoration: none;
	color: white;
	display: grid;
	padding: 20px 10px;
	border-bottom: 2px solid orange;
	transition: .5s all;
	cursor: pointer;
	${({theme}) => theme.media.desktop} {
		&:hover {
			color: black;
			background-color: orange;
			transform: scale(1.03);
		}
	}
	
`;
const Title = styled.h2`
	margin: 10px 0;
`;
const Details = styled.ul`
	list-style: none;
	padding: 0;
	margin: 5px 0;
	${({theme}) => theme.media.desktop} {
			display: flex;
	}
`;
const Detail = styled.li`
	margin: 0 5px;
	${({theme}) => theme.media.desktop} {
		&:first-of-type {
			margin: 0 5px 0 0 ;
		}
	}
	
`;
const SingleMovieShortcut = ({movie}) => {
	return (
		<Container to={`/movie/${movie.id}`}>
			<Title>{movie.title}</Title>
			<Details>
				{movie.categories.map((category, i) => <Detail key={i}>{category},</Detail>)}
				<Detail>Limit wieku: {movie.ageLimit || 'brak'},</Detail>
				<Detail>Czas trwania: {movie.duration} min.</Detail>
			</Details>
		</Container>
	);
};

export default SingleMovieShortcut;