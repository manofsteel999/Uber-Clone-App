import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CovidMessage = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Travel only if necessary</Text>
			<Text style={styles.text}>
				Help flatten the curve.If you must travel,please exercise caution for
				your safety and the safety of our community
			</Text>
			<Text style={styles.learnMore}>Learn More</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#2b80ff',
		padding: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	title: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	text: {
		color: '#bed9ff',
		fontSize: 15,
		marginBottom: 10,
	},
	learnMore: {
		color: '#fff',
		fontSize: 15,
		fontWeight: 'bold',
	},
});

export default CovidMessage;
