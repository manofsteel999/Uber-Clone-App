import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import OrderMap from '../../components/OrderMap/index';
import {useRoute} from '@react-navigation/native';
// import CovidMessage from '../../components/CovidMessage/index';
// import HomeSearch from '../../components/HomeSearch/index';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const OrderScreen = props => {
	const user = auth().currentUser;
	const uid = user.uid;
	const [car, setCar] = useState(null);
	const [order, setOrder] = useState(null);

	const route = useRoute();
	const {id} = route.params; // id of the passed order from searchResults
    // useEffect for fetching current order
	useEffect(() => {
		const fetchOrder = async () => {
			try {
				const orderData = await firestore().collection(uid).doc(id).get();
				// console.log(orderData);
				setOrder(orderData.data());
			} catch (e) {
				console.log('error in fetching the order', e);
			}
		};
		fetchOrder();
	}, []);

	//useEffect for fetching current car
	useEffect(() => {
		if(order.)
		const fetchCar = async () => {
			try {
				const carData = await firestore().collection(uid).doc(id).get();
				// console.log(orderData);
				setCar(carData.docs());
			} catch (e) {
				console.log('error in fetching the order', e);
			}
		};
		fetchCar();
	}, [order]);


	return (
		<View>
			<View style={{height: Dimensions.get('window').height - 350}}>
				<OrderMap car={car} />
			</View>
		</View>
	);
};

export default OrderScreen;
