import React from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import UberTypeRow from '../UberTypeRow/index';
import typesData from '../../assets/data/types';

const UberTypes = ({typeState, onSubmit}) => {
  // Accepting the whole state functinality from a parent component
  const [selectedType, setSelectedType] = typeState;

  const confirm = () => {
    console.warn('Uber Confirmed');
  };

  return (
    <View>
      <FlatList
        data={typesData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <UberTypeRow
            type={item.type}
            price={item.price}
            isSelected={item.type === selectedType}
            onPress={() => setSelectedType(item.type)}
          />
        )}
      />

      <Pressable
        onPress={onSubmit}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
          borderRadius: 18,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UberTypes;
