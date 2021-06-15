import React from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import UberTypeRow from '../UberTypeRow/index';
import typesData from '../../assets/data/types';

const UberTypes = () => {
  const confirm = () => {
    console.warn('Uber Confirmed');
  };

  return (
    <View>
      <FlatList
        data={typesData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <UberTypeRow type={item.type} price={item.price} />
        )}
      />

      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UberTypes;
