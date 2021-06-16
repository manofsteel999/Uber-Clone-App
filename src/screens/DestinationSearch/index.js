import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState({data: null, details: null});
  const [destinationPlace, setDestinationPlace] = useState({
    data: null,
    details: null,
  });

  useEffect(() => {
    console.log('useEffect triggered');
    if (originPlace && destinationPlace) {
      console.log('Redirect to results');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setOriginPlace(prevState => {
              const data = {
                ...prevState,
                data: data,
                details: details,
              };
              return data;
            });
            // console.log(data, details);
          }}
          styles={{
            // styling is a bit cumbersome cause the input box by default occupies some space in the screen to show its autocomplete text
            textInput: styles.textInput,
            container: {
              position: 'absolute',
              top: 0,
              left: 10,
              right: 10,
            },
            listView: {
              position: 'absolute',
              top: 105,
            },
            separator: {
              backgroundColor: '#efefef',
              height: 1,
            },
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAT081Nu8sH4jiCy3A6tICeER1K6rfWjMI',
            language: 'en',
          }}
          renderRow={(data: GooglePlaceData) => <PlaceRow data={data} />}
        />

        <GooglePlacesAutocomplete
          placeholder="Where To?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace(prevState => {
              const data = {
                ...prevState,
                data: data,
                details: details,
              };
              return data;
            });
            // console.log(data, details);
          }}
          //  suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              position: 'absolute',
              top: 50,
              left: 10,
              right: 10,
            },
            separator: {
              backgroundColor: '#efefef',
              height: 1,
            },
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAT081Nu8sH4jiCy3A6tICeER1K6rfWjMI',
            language: 'en',
          }}
          renderRow={(data: GooglePlaceData) => <PlaceRow data={data} />}
        />
        {/* adding that circle and sqaure and joining them with a line */}

        <View style={styles.circle} />
        <View style={styles.line} />
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%', // imp prop because due to this autocomplete feature could not be implemented
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
  },
  circle: {
    width: 6,
    height: 6,
    backgroundColor: 'black',
    position: 'absolute',
    top: 20,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: '#c4c4c4',
    position: 'absolute',
    top: 28,
    left: 17,
  },
  square: {
    width: 6,
    height: 6,
    backgroundColor: 'black',
    position: 'absolute',
    top: 80,
    left: 15,
  },
});

export default DestinationSearch;
