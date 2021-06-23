import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyAT081Nu8sH4jiCy3A6tICeER1K6rfWjMI';

const RouteMap = ({origin, destination}) => {
	const originLoc = {
		latitude: origin.details.geometry.location.lat,
		longitude: origin.details.geometry.location.lng,
	};

	const destinationLoc = {
		latitude: destination.details.geometry.location.lat,
		longitude: destination.details.geometry.location.lng,
	};

	return (
		<View>
			<MapView
				style={{width: '100%', height: '100%'}}
				provider={PROVIDER_GOOGLE}
				initialRegion={{
					...originLoc,
					latitudeDelta: 0.0222,
					longitudeDelta: 0.0121,
				}}>
				<MapViewDirections
					origin={originLoc}
					destination={destinationLoc}
					apikey={GOOGLE_MAPS_APIKEY}
					strokeWidth={5}
					strokeColor="black"
				/>
				<Marker coordinate={originLoc} title={'origin'} />
				<Marker coordinate={destinationLoc} title={'destination'} />
			</MapView>
		</View>
	);
};

const styles = StyleSheet.create({});

export default RouteMap;
