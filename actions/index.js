export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export function login(usercred){
	console.log('inside login action');
		return {
			type : LOGIN_SUCCESS,
			id : usercred
		}
}
export function loginerror(usercred){

		return {
			type : LOGIN_ERROR,
			id : usercred
		}
}
export function loginAsync(usercred){
	return function (dispatch){

	   fetch('http://192.168.1.68:3000/api/login',  {
								  method: 'POST',
								  headers: {
								    'Accept': 'application/json',
								    'Content-Type': 'application/json'
								  },
								  body: JSON.stringify(usercred)
								})
							.then((r) => r.json())
							.then(res => {dispatch(login(res));console.log(res); return res; } )
							.catch(e => {console.log(e); return e;} )
	}
}
export function change_text(text){
	return {
		type : CHANGE_TEXT,
		id : text
	}
}
export function change_password(passtext){

	return {
		type : CHANGE_PASSWORD,
		id : passtext
	}
}
