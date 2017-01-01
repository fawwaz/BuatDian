import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Camera from 'react-native-camera';

class Scanner extends Component{
	onBarCodeRead(barcode) {
		Actions.transactionCreate({ type:'refresh', kd_barang: barcode.data });
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

export default Scanner;