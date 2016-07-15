/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import mainreducer from './reducers/mainreducer';
import Login from './components/login';

let store = createStore(mainreducer);

class App extends Component {
  
  render(){
    return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
          Welcome to React Native Simple Login App!
      </Text>
       <Login />
    </View>
    );
  }
}

class trial_login extends Component {
  render() {
    return (
    <Provider store= {store} >
     <App /> 
    </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('trial_login', () => trial_login);
