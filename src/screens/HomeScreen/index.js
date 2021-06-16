import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import HomeMap from '../../components/HomeMap/index';
import CovidMessage from '../../components/CovidMessage/index';
import HomeSearch from '../../components/HomeSearch/index';

const HomeScreen = props => {
	return (
		<View>
			<View style={{height: Dimensions.get('window').height - 350}}>
				<HomeMap />
			</View>

			<CovidMessage />
			<HomeSearch />
		</View>
	);
};

export default HomeScreen;
