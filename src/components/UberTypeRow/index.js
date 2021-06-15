import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UberTypeRow = props => {
  const getImage = () => {
    if (props.type == 'UberX') {
      return require('../../assets/images/UberX.jpeg');
    }
    if (props.type == 'Comfort') {
      return require('../../assets/images/Comfort.jpeg');
    }
    if (props.type == 'UberXL') {
      return require('../../assets/images/UberXL.jpeg');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={getImage()} />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {props.type}
          <Ionicons name={'person'} size={16} />3
        </Text>
        <Text style={styles.time}>8:03PM Drop Off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag-outline'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. ${props.price} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 70,
    width: 80,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  time: {
    color: '#5d5d5d',
  },
  rightContainer: {
    width: 100,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
});

export default UberTypeRow;
