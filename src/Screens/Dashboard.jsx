import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

const Dashboard = () => {
  const [formValues, setFormValues] = useState();
  const [location, setlocation] = useState('');
  const [longitude, setlongitude] = useState('');
  const [form, setForm] = useState({
    UserName: '',
    Email: '',
    PhoneNo: '',
    password: '',
  });
  useEffect(() => {
    request(PERMISSIONS.ANDROID.CAMERA).then(result => {
      console.log(result);
    });
    request(PERMISSIONS.ANDROID.READ_SMS).then(result => {
      console.log(result);
    });
    request(PERMISSIONS.ANDROID.READ_CONTACTS).then(result => {
      console.log(result);
    });
    Geolocation.getCurrentPosition(info => setlocation(info.coords.latitude));
    Geolocation.getCurrentPosition(info => setlongitude(info.coords.longitude));

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

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.details}>
          <Text style={styles.text}>UserName : {form?.UserName}</Text>
          <Text style={styles.text}>phone no. : {form?.PhoneNo}</Text>
          <Text style={styles.text}>Email : {form?.Email}</Text>
        </View>
      </View>
      <Text style={styles.text}>location:</Text>
      <Text style={{marginLeft: 20}}>latitude {location}</Text>
      <Text style={{marginLeft: 20}}>longitude {longitude}</Text>
      <Text style={styles.title}>uploaded Documents</Text>
      <View
        style={{
          width: '90%',
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0.5,
          borderColor: 'grey',

          marginTop: 20,
          marginHorizontal: 20,
        }}>
        <View style={styles.doc}>
          <Text>upload</Text>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 300,
    backgroundColor: '#03bafc',
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    width: '80%',
    height: 200,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderRadius: 30,
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  doc: {},
  title: {
    fontSize: 22,
    marginTop: 18,
    marginLeft: 15,
    color: 'black',
  },
});
