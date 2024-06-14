import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';

const Documents = ({navigation}) => {
  const [value, setValue] = useState('');
  const [accountNo, setaccountNo] = useState('');
  const [code, setCode] = useState('');
  const handleChange = text => {
    setValue(text);
  };
  const AccountNohandleChange = text => {
    setaccountNo(text);
  };

  const IFSChandleChange = text => {
    setCode(text);
  };
  const handleSubmit = () => {
    if (value.length > 5 && accountNo.length > 5) {
      navigation.navigate('DocumentsDetails');
    }
  };
  return (
    <View style={styles.Container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Bank Details</Text>

        <Input
          title=" Account Owner"
          placeholder="Enter name"
          keyboard="default"
          onChangeText={text => handleChange(text)}
        />
        <Input
          title="Account No."
          placeholder="Enter your Account no."
          keyboard="default"
          onChangeText={text => AccountNohandleChange(text)}
        />

        <Input
          title="IFSC Code"
          placeholder="Enter your IFSC Code"
          keyboard="default"
          onChangeText={text => IFSChandleChange(text)}
        />

        <TouchableOpacity style={styles.btntab} onPress={handleSubmit}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Documents;

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
