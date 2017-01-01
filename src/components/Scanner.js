import _ from 'lodash';
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Camera from 'react-native-camera';
import { connect } from 'react-redux';
import { productFetch } from '../actions';

class Scanner extends Component{

  componentWillMount() {
    this.props.productFetch();
  }

	onBarCodeRead(barcode) {
    const barang = _.find( this.props.products, { 'uid': barcode.data });

		Actions.transactionCreate({ type:'refresh', kode_brg: barang.uid, nama_brg:barang.nama_barang });
	}

	render() {
		return(
			<View style={styles.container}>
				<Camera
					onBarCodeRead={this.onBarCodeRead.bind(this)}
					ref={(cam) => {
						this.camera = cam;
					}}
					style={styles.preview}
					aspect={Camera.constants.Aspect.fill}>
				</Camera>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

const mapStateToProps = (state) => {
  const products = _.map(state.products, (val, uid) => {
    return {...val, uid}
  });
  

  return { products };
}

export default connect(mapStateToProps, {
  productFetch
})(Scanner);