import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import KsiBarcode from 'react-native-ksi-barcode'; // gagal
// var Barcode = require('react-barcode'); // gagal
import Barcode from 'react-native-barcode-builder';

class CheckoutScreen extends Component{
				// <KsiBarcode text="86794936041" />
				// <Image source={require('../img/barcode.png')} />
	render() {
		return(
			<View style={styles.container}>
				<Barcode value='085794936041' />
			</View>
		);
	}
}

const styles = {
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between'
	}
}

const mapStateToProps = (state) => {

}

export default connect(null, {

})(CheckoutScreen);