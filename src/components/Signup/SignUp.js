import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  const navigation = useNavigation();

  const signupHandler = async (mail, pass) => {
    try {
      await auth().createUserWithEmailAndPassword(mail, pass);
      navigation.navigate('Home');
    } catch (err) {
      console.log(err);
    }
  };

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      navigation.navigate('Home');
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, fontWeight: 'bold', alignSelf: 'center'}}>
        Sign Up Here
      </Text>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Enter Email : </Text>
        <TextInput
          placeholder="email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Enter Password : </Text>
        <TextInput
          placeholder="password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Button title="Sign Up" onPress={() => signupHandler(email, password)} />
      {/* Phone number sign in method */}

      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+91 9660277977')}
      />

      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 30,
  },
  labelContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  label: {
    fontSize: 17,
  },
  input: {
    borderRadius: 5,
    fontSize: 16,
  },
});

export default Signup;
