import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/index';
import DestinationSearch from '../screens/DestinationSearch/index';
import SearchResults from '../screens/SearchResults/index';
import SignUp from '../components/Signup/SignUp';
import OrderScreen from '../screens/OrderScreen/index';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'SignUp'}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
      <Stack.Screen name="SearchResults" component={SearchResults} />
      <Stack.Screen name="OrderPage" component={OrderScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default HomeNavigator;
