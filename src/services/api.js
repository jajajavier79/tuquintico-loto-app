import axios from 'axios';

const URL = 'http://34.227.3.72:4000'

export const fetchResuts = async (param) => {

	const res = await axios.get(`${URL}/api/public/result_award/get_last_result?date=${param}`);
	if (res.status !== 200) return [];

	return res.data;
};