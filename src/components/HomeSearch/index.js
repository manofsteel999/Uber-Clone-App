import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeSearch = () => {
	return (
		<View>
			{/*INPUT BOX */}
			<View style={styles.inputBox}>
				<Text style={styles.inputText}>Where To?</Text>
				<View style={styles.timeContainer}>
					<AntDesign name={'clockcircle'} size={16} color={'#535353'} />
					<Text>Now</Text>
					<MaterialIcons name={'keyboard-arrow-down'} size={16} />
				</View>
			</View>
			{/*Previous destination */}
			<View style={styles.row}>
				<View style={styles.iconContainer}>
					<AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
				</View>
				<Text style={styles.destinationText}>Spin Nightclub</Text>
			</View>
			{/*Home Destination */}
			<View style={styles.row}>
				<View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
					<Entypo name={'home'} size={20} color={'#ffffff'} />
				</View>
				<Text style={styles.destinationText}>Home</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	inputBox: {
		backgroundColor: '#e7e7e7',
		margin: 10,
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// height: 62,
	},
	inputText: {
		fontSize: 20,
		fontWeight: '600',
		color: '#535353',
	},
	timeContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 100,
		padding: 10,
		backgroundColor: '#fff',
		borderRadius: 50,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20,
		borderBottomWidth: 1,
		borderColor: '#dbdbdb',
	},
	iconContainer: {
		backgroundColor: '#b3b3b3',
		padding: 10,
		borderRadius: 25,
	},
	destinationText: {
		marginLeft: 10,
		fontWeight: '500',
		fontSize: 16,
	},
});

export default HomeSearch;
