import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';

const Passcode = ({navigation}) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const handleChange = e => {
    console.log(e);

    const val = e;
    setCode(val);
    console.log(code);
  };

  const handleSubmit = () => {
    if (code == 1234) {
      navigation.navigate('HomeStack');
      setError('');
    } else {
      setError('Passcode is incorrect');
    }
  };
  return (
    <>
      <View style={styles.header}></View>
      <View style={styles.Container}>
        <Text>Enter your Passcode</Text>

        <Input
          title="Passcode"
          placeholder="1234"
          keyboard="number-pad"
          onChangeText={text => handleChange(text)}
        />
        {error ? <Text style={styles.err}> {error}</Text> : ''}
        <Text>// please enter 1234 as code </Text>
        <TouchableOpacity style={styles.btntab} onPress={handleSubmit}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Passcode;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 60,
  },
  header: {
    width: '100%',
    height: 200,
    backgroundColor: '#03bafc',
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 30,
  },
  btntab: {
    width: 100,
    height: 40,
    color: '#FFFFFF',
    backgroundColor: '#03bafc',
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  text: {
    color: '#FFFFFF',
  },
  err: {
    color: 'red',
  },
});
