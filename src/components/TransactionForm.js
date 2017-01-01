import _ from 'lodash';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import Camera from 'react-native-camera';
import { transactionUpdate, productFetch } from '../actions';

class TransactionForm extends Component{

	componentWillReceiveProps() {
		const { kode_brg , nama_brg } = this.props;

		this.props.transactionUpdate({ prop:'kode_barang', value: kode_brg });
		this.props.transactionUpdate({ prop:'nama_barang', value: nama_brg });
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
					keyboardType='numeric'
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	const products = _.map(state.products, (val, uid) => {
		return {...val, uid}
	});	

	const nama_barang = state.transactionform.nama_barang;
	const kode_barang = state.transactionform.kode_barang;
	const jml_barang  = state.transactionform.jumlah_barang;
	const jumlah_barang = jml_barang.toString();
	

	return { nama_barang, kode_barang, jumlah_barang};
};

export default connect(mapStateToProps, { transactionUpdate, productFetch })(TransactionForm);