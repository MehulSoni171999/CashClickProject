import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import notifee, {AndroidStyle} from '@notifee/react-native';
import axios from 'axios';

const TrackLoan = () => {
  const [res, setres] = useState('');

  const handleSubmit = async () => {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'CashClicks Notification Title',
      body: ' Welcome to CashClicks , get money and return with less intrest . so ..GO Fast ',
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
        style: {
          type: AndroidStyle.BIGPICTURE,
          picture:
            'https://paytmblogcdn.paytm.com/wp-content/uploads/2023/09/Blog_Paytm_Personal-loan-repayment-strategies-800x500.jpg',
        },
      },
    });
  };

  useEffect(() => {
    const apidata = async () => {
      try {
        const data = await axios.get('https://picsum.photos/v2/list');
        console.log(data.data);
        const newData = data.data;
        setres(newData);
        console.log(res);
      } catch {
        console.log('data not found');
      }
    };

    apidata();
  }, []);

  return (
    <>
      <View>
        <View style={styles.header}>
          <View style={styles.details}>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 30}}
              source={{
                uri: 'https://www.techfunnel.com/wp-content/uploads/2021/07/benefits_of_business_loans.png',
              }}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.btntab} onPress={handleSubmit}>
          <Text style={styles.text}>push notification</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          data={res}
          renderItem={({item, index}) => (
            <View style={{width: 300, height: 300}}>
              <Image
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 10,
                  marginLeft: 5,
                  marginTop: 10,
                }}
                source={{uri: item.download_url}}
              />
              <Text style={{margin: 20, fontSize: 20}}>{item.author}</Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default TrackLoan;

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
    width: '90%',
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
  btntab: {
    width: 300,
    height: 40,
    color: '#FFFFFF',
    backgroundColor: '#03bafc',
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    color: '#FFFFFF',
  },
});
