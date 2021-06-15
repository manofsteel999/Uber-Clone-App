import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

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
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAT081Nu8sH4jiCy3A6tICeER1K6rfWjMI',
            language: 'en',
          }}
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
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAT081Nu8sH4jiCy3A6tICeER1K6rfWjMI',
            language: 'en',
          }}
        />
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
  },
});

export default DestinationSearch;
