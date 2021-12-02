import axios from 'axios';

const URL = 'http://34.227.3.72:4000'

export const FetchRewards = async (ID, Serial) => {

	const res = await axios.get(`${URL}/api/public/validate_ticket?serial=${Serial}&ticket_id=${ID}`);
	if (res.status !== 200) return(console.log("ERROR"));

	return res.data;
};