/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/index';
import DestinationSearch from './src/screens/DestinationSearch/index';
import SearchResults from './src/screens/SearchResults/index';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="lightpink-content" />
      <SearchResults />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
