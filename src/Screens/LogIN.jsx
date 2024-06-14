import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Input from '../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogIN = ({navigation}) => {
  const [formValues, setFormValues] = useState();
  const [form, setForm] = useState({
    UserName: '',
    Email: '',
    PhoneNo: '',
    password: '',
  });
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await AsyncStorage.getItem('formvalues');
        console.log(data, '1111111111111');
        const jsonData = JSON.parse(data);
        const {UserName, Email, PhoneNo, password} = jsonData;
        setForm({UserName, Email, PhoneNo, password});
        if (data) {
          setFormValues(data);
          console.log('555555555555555', formValues);
        } else {
          console.log(nothing);
        }
      } catch {
        console.warn('store is empty');
      }
    };

    loadData();
  }, []);

  const handleInputChange = (name, value) => {
    setForm({...form, [name]: value});
  };

  const handlesubmit = () => {};

  return (
    <>
      <View style={styles.Container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>LOGIN</Text>
          <Input
            title="Username"
            placeholder="Enter username"
            keyboard="default"
            value={form?.UserName}
            onChangeText={text => handleInputChange('UserName', text)}
          />
          <Input
            title="Contact no."
            placeholder="********"
            keyboard="default"
            is_password={false}
            value={form?.PhoneNo}
            onChangeText={text => handleInputChange('password', text)}
          />

          <Text style={styles.linetext}>
            Dont't have an account?{' '}
            <Text onPress={() => navigation.navigate('Signup')}>Signup</Text>
          </Text>
          <TouchableOpacity
            style={styles.btntab}
            onPress={() => navigation.navigate('Passcode')}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LogIN;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#03bafc',
    textAlign: 'center',
  },
  forgottext: {
    color: '#03bafc',
    fontSize: 16,
    textAlign: 'right',
  },
  linetext: {
    color: '#03bafc',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 10,
    marginTop: 15,
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
});
