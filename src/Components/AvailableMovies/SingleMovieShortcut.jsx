import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
	text-decoration: none;
	color: white;
	display: grid;
	padding: 20px 0;
	border-bottom: 2px solid orange;
	transition: .5s all;
	cursor: pointer;
	&:hover {
		color: black;
		background-color: orange;
		transform: scale(1.03);
	
	}
`;
const Title = styled.h2`
	margin: 10px 0;
`;
const Details = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 5px 0;
`;
const Detail = styled.li`
	margin: 0 5px;
	&:first-of-type {
		margin: 0 5px 0 0 ;
	}
`;
const SingleMovieShortcut = ({movie}) => {
	return (
		<Container to={`/movie/${movie.id}`}>
			<Title>{movie.title}</Title>
			<Details>
				{movie.categories.map((category, i) => <Detail key={i}>{category},</Detail>)}
				<Detail>Przedział wiekowy: {movie.ageLimit},</Detail>
				<Detail>Czas trwania: {movie.duration} min.</Detail>
			</Details>
		</Container>
	);
};

export default SingleMovieShortcut;