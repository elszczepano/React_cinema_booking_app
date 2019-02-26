import axios from 'axios';

export default axios.create({
	baseURL: 'https://candidatetest.arpideas.pl/api/'
});