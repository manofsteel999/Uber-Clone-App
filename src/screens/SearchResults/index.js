import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';
import {useRoute} from '@react-navigation/native';

const SearchResults = () => {
  const route = useRoute();

  console.log(route.params);

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 350}}>
        <RouteMap />
      </View>

      <View style={{height: 400}}>
        <UberTypes />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchResults;
