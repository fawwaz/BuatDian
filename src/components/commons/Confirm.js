import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Button } from 'react-native-elements';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
	const { containerStyle, textStyle, cardSectionStyle } = styles;

	return(
		<Modal
			visible={visible}
			transparent
			animationType="slide"
			onRequestClose={() => {}}
		>
			<View style={containerStyle}>
				<Text style={textStyle}>{children}</Text>
				<Button
					onPress={onAccept}
				   	title='Ya' 
				/>
				<Button 
					onPress={onDecline}
					title='Tidak'
				/>
			</View>

		</Modal>
	);
};

const styles = {

	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		justifyContent: 'center'
	}
};

export { Confirm };