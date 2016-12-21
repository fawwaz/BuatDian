import React, { Component } from 'react';
import { createStore } from 'redux';
import { View, Text } from 'react-native'; 
import { Provider } from 'react-redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component{
	componentWillMount() {
		const config = {
		  apiKey: 'AIzaSyDnW2kCHgBpMXPlZ9Hfx7wMZbK170WZQaI',
		  authDomain: 'buatdian-50b58.firebaseapp.com',
		  databaseURL: 'https://buatdian-50b58.firebaseio.com',
		  storageBucket: 'buatdian-50b58.appspot.com',
		  messagingSenderId: '636508705542'
		};
		firebase.initializeApp(config);

	}

	render() {
		return(
			<Provider store={createStore()}>
				<View>
					<Text>Test..</Text>
				</View>
			</Provider>
		);
	}
}

export default App;