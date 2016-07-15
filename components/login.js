import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  
  Text,
  TextInput,
  View
} from 'react-native';
import Button from 'react-native-button';
import {connect} from 'react-redux';
import {login} from './../actions/index';
import {change_text} from './../actions/index';
import {change_password} from './../actions/index';

function mapStateToProps(state){
	console.log(state);
	return {
		loggedIN : state.loggedIn , text : state.text, passtext : state.passtext, userx : state.userx
	}
}
function mapDispatchToProps(dispatch){
	console.log(dispatch);
	return { login : (usercred) => {  dispatch(login(usercred)) }, change_text : (text) => { dispatch(change_text(text))},change_password : (passtext) => {dispatch(change_password(passtext))}
	} 
}

class Login extends Component{
	constructor(){
		super();
		this.state = {
			text : "",
			passtext : ""
		}
	}
	onButtonPress(){

		 this.props.login({
		 	username : this.props.text,
		 	password : this.props.passtext
		 });

	}

	onTextChange(text){
		this.props.change_text(text)
	}
	onPasswordChange(passtext){
		this.props.change_password(passtext)
	}

	render(){
		return (

			<View>
				<TextInput placeholder={"Enter name"} onChangeText = {this.onTextChange.bind(this)} value={this.props.text}></TextInput>
				<TextInput placeholder={"Enter password"} onChangeText = {this.onPasswordChange.bind(this)} value={this.props.passtext}></TextInput>
				<Button onPress={this.onButtonPress.bind(this)}>Add</Button>

				{ this.props.loggedIN ? <Text>{this.props.userx} is Logged IN </Text> :  <Text> Not logged in / Password Incorect</Text> }
				
			</View>

			);
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Login); 