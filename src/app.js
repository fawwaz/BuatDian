import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return(
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;