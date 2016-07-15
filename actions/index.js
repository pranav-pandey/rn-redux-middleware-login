export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export function login(usercred){
	if(usercred.username === 'admin' && usercred.password === 'pass'){
		return {
			type : LOGIN_SUCCESS,
			id : usercred
		}
	}
	else{
		return {
			type : LOGIN_ERROR,
			id : usercred
		}
	}
}
export function change_text(text){
	console.log(text);
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