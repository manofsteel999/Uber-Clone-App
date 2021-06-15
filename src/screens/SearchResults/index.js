import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeMap from '../../components/HomeMap';
import UberTypes from '../../components/UberTypes';

const SearchResults = () => {
  return (
    <View>
      <HomeMap />
      <UberTypes />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchResults;
