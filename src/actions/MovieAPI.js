import axios from "axios";
import {
	API_CALL_SUCCESS,
	API_CALL_FAILURE,
	MOVIE_API_URL,
	API_KEY
} from "./Constants"

export const MovieAPI = async (keyword) => {
	if (!API_KEY) {
		throw new Error('Youtube Search expected key, received undefined');
	}
	const url = `${MOVIE_API_URL}?t=${keyword}&apikey=${API_KEY}`;
	try {
		const response = await axios.get(url);
		return {
			type: API_CALL_SUCCESS,
			payload: response.data
			};
	} catch (error) {
		return {
			type: API_CALL_FAILURE,
			payload: error
		};
	}
};
