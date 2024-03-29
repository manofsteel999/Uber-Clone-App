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
      var newDocRef = firestore().collection(uid).doc();
      newDocRef
        .set({
          createdAt: date.toISOString(),
          type: type,
          originLatitude: originPlace.details.geometry.location.lat,
          originLongitude: originPlace.details.geometry.location.lng,

          destLatitude: destinationPlace.details.geometry.location.lat,
          destLongitude: destinationPlace.details.geometry.location.lat,

          carId: '',
          status: 'NEW',
          id: newDocRef.id,
          user: {
            rating: '5.0',
            name: 'Avinesh',
          },
        })
        // ignore below method because in above one iam simultaneously attaching id field to doc. id in process of adding data
        /*
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
          status: 'NEW',
          id: '',
          user: {
            rating: '5.0',
            name: 'Avinesh'
          }
        })
        */
        .then(() => {
          console.log('User Added');
        });

      Alert.alert('Hurray', 'Your Order has been submitted', [
        {
          text: 'Go Home',
          onPress: () => navigation.navigate('OrderPage', {id: newDocRef.id}),
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
