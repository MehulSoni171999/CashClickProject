import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LogIN from './src/Screens/LogIN';
import SignUp from './src/Screens/SignUp';
import Postregister from './src/Navigations/Postregister';

const App = () => {
  return (
    <>
      {/* <Text style={styles.text}>App</Text> */}

      <Postregister />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  text: {
    color: '#000000',
  },
});
