import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';

const DocumentsDetails = ({navigation}) => {
  const [value, setValue] = useState('');

  const handleInputChange = text => {
    setValue(text);
  };

  const handleSubmit = () => {
    if (value.length > 5) {
      navigation.navigate('HomeStack');
    }
  };

  return (
    <View style={styles.Container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Details</Text>

        <Input
          title="Aadhar No."
          placeholder="Enter your Aadhar no."
          keyboard="default"
          onChangeText={text => handleInputChange(text)}
        />
        <Input
          title="Pan Card No."
          placeholder="Enter your Pan no."
          keyboard="default"
          onChangeText={text => handleInputChange(text)}
        />

        <Input
          title="Loan category"
          placeholder="Business Loan"
          keyboard="default"
          onChangeText={text => handleInputChange(text)}
        />

        <TouchableOpacity style={styles.btntab} onPress={handleSubmit}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DocumentsDetails;

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
