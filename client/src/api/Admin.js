import axios from 'axios';

const address = 'http://localhost:8000';

export const PostRegister = (params) => {
	let body = {
		'login': params.login,
		'email': params.email,
		'password': params.password,
		'status': params.status
	}
	return axios.post(address+'/users/create', body, {
		params:{ "id": localStorage.getItem('user_id'), "admin": true },
		headers:{"Content-Type": "application/json"}
	})
  .then(res => {
		return res.data;
	});
}

export const CheckLogin = (param) => {
	let body = {
		'login': param
	}
	return axios.post(address+'/users/checkLogin', body, {
		params:{ "id": localStorage.getItem('user_id') },
		headers:{"Content-Type": "application/json"}
	})
  .then(res => {
		return res.data;
	});
}

export const CheckMail = (param) => {
	let body = {
		'email': param
	}
	return axios.post(address+'/users/checkMail', body, {
		params:{ "id": localStorage.getItem('user_id') },
		headers:{"Content-Type": "application/json"}
	})
  .then(res => {
		return res.data;
	});
}
