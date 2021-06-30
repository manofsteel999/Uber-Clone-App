import React, {useState, useEffect} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// import cars from '../../assets/data/cars';
import firestore from '@react-native-firebase/firestore';

const HomeMap = () => {
	const [cars, setCars] = useState([]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const subscriber = firestore()
			.collection('car')
			.get()
			.then(querySnapshot => {
				// console.log('Total  cars: ', querySnapshot.size);
				const cpycars = [];
				querySnapshot.forEach(documentSnapshot => {
					// console.log('Car ID: ', documentSnapshot.id, documentSnapshot.data());

					cpycars.push({...documentSnapshot.data(), id: documentSnapshot.id});
				});
				setCars(cpycars);
				setLoading(false);
			});

		return () => subscriber();
	}, []);

	const getImage = type => {
		if (type == 'UberX') {
			return require('../../assets/images/top-UberX.png');
		}
		if (type == 'Comfort') {
			return require('../../assets/images/top-Comfort.png');
		}
		if (type == 'UberXL') {
			return require('../../assets/images/top-UberXL.png');
		}
	};

	if (loading) {
		return <ActivityIndicator />;
	}

	return (
		<View>
			<MapView
				style={{width: '100%', height: '100%'}}
				provider={PROVIDER_GOOGLE}
				showUserLocation={true}
				initialRegion={{
					latitude: 28.450627,
					longitude: -16.263045,
					latitudeDelta: 0.0222,
					longitudeDelta: 0.0121,
				}}>
				{cars.map(car => {
					// used map instead of a flatlist because of a scrollable error
					return (
						<Marker
							key={car.id}
							coordinate={{latitude: car.latitude, longitude: car.longitude}}>
							<Image
								style={{
									width: 60,
									height: 60,
									resizeMode: 'contain',
									transform: [
										{
											rotate: `${car.heading}deg`,
										},
									],
								}}
								source={getImage(car.type)}
							/>
						</Marker>
					);
				})}
			</MapView>
		</View>
	);
};

const styles = StyleSheet.create({});

export default HomeMap;
