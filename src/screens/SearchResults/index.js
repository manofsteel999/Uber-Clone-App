import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Alert} from 'react-native';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';
import {useRoute, useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SearchResults = () => {
  const user = auth().currentUser;
  const route = useRoute();
  const navigation = useNavigation();

  const typeState = useState(null);

  // console.log(route.params);
  const {originPlace, destinationPlace} = route.params;

  const onSubmit = async () => {
    const [type] = typeState;
    const date = new Date();

    if (!type) {
      return;
    }
    try {
      const uid = user.uid;
      firestore()
        .collection(uid)
        .add({
          createdAt: date.toISOString(),
          type: type,
          originLatitude: originPlace.details.geometry.location.lat,
          originLongitude: originPlace.details.geometry.location.lng,

          destLatitude: destinationPlace.details.geometry.location.lat,
          destLongitude: destinationPlace.details.geometry.location.lat,

          carId: '',
        })
        .then(() => {
          console.log('User Added');
        });

      Alert.alert('Hurray', 'Your Order has been submitted', [
        {
          text: 'Go Home',
          onPress: () => navigation.navigate('Home'),
        },
      ]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 350}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{height: 400}}>
        <UberTypes typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchResults;
