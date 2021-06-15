import React from 'react';
import {View, Text} from 'react-native';
import HomeMap from '../../components/HomeMap/index';
import CovidMessage from '../../components/CovidMessage/index';
import HomeSearch from '../../components/HomeSearch/index';

const HomeScreen = props => {
	return (
		<View>
			<HomeMap />
			<CovidMessage />
			<HomeSearch />
		</View>
	);
};

export default HomeScreen;
