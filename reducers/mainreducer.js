import {LOGIN_SUCCESS} from './../actions/';
import {LOGIN_ERROR} from './../actions/';
import {CHANGE_TEXT} from './../actions';
import {CHANGE_PASSWORD} from './../actions';

let valid = {loggedIn : false, text : '',passtext: '', userx : '' };
export default function(state = valid , action){

	switch(action.type){
		case LOGIN_SUCCESS :
		{
			console.log(action.id);
			return  { ...state , loggedIn : true, text : '',passtext : '',userx : action.id.name };
		}
		case LOGIN_ERROR :
			return { ...state, loggedIn : false, text : '',passtext : '' };

		default : return state;

		case CHANGE_TEXT :

			return { ...state , text : action.id};


		case CHANGE_PASSWORD :
			return { ...state , passtext : action.id};
	}

}
