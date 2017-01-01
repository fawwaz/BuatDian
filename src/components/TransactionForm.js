import _ from 'lodash';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import Camera from 'react-native-camera';
import { transactionUpdate } from '../actions';

class TransactionForm extends Component{
	componentWillReceiveProps() {
		const { kd_barang, products } = this.props;
		/*const barang = _.find( products, (product) => {
			return product.uid == kd_barang;
		});
		console.log("ini barang yang didetek ");
		console.log(barang);*/
		this.props.transactionUpdate({ prop:'kode_barang', value: kd_barang });
		//this.props.transactionUpdate({ prop:'nama_barang', value: barang.nama_barang });
	}

	onScanButtonPressed() {
		Actions.scanner();
	}

	render() {
		return(
			<View>
				<FormLabel>Kode Barang</FormLabel>
				<FormInput 
					onChangeText={value => this.props.transactionUpdate({ prop:'kode_barang', value })}
					value={this.props.kode_barang}
				/>

				<FormLabel> Nama Barang </FormLabel>
				<FormInput 
					onChangeText={value => this.props.transactionUpdate({ prop:'nama_barang', value })}
					value={this.props.nama_barang}
				/>
				<Button
					onPress={this.onScanButtonPressed.bind(this)}
				   	icon={{name: 'barcode', type:'font-awesome' }}
				   	type='font-awesome'
				   	title='Scan Item' />

				<FormLabel>Jumlah</FormLabel>
				<FormInput 
					onChangeText={value => this.props.transactionUpdate({ prop:'jumlah_barang', value })}
					value={this.props.jumlah_barang}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	// const products = _.map(state.products, (val, uid) => {
	// 	return {...val, uid}
	// });

	const nama_barang = state.transactionform.nama_barang;
	const kode_barang = state.transactionform.kode_barang;
	const jml_barang  = state.transactionform.jumlah_barang;
	const jumlah_barang = jml_barang.toString();
	

	return { nama_barang, kode_barang, jumlah_barang, products };
};

export default connect(mapStateToProps, { transactionUpdate })(TransactionForm);