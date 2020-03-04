import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  AppRegistry,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Header,
  TextInput,
  TextInputLeftIcon,
  CommonButton,
  CommonStyles,
} from '../commons';

import QRCodeScanner from 'react-native-qrcode-scanner';
const DrawerScreen = ({headerTitle, navigation}) => {
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerText}>안티코 검사자용</Text>
        <Icon
          name="menu"
          size={24}
          color="black"
          style={{marginRight: 5}}
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
      <ImageBackground
        style={styles.content}
        source={require('../images/Scanner.png')}>
        <QRCodeScanner
          onRead={onSuccess}
          markerStyle={{height: 300, width: 300}}
        />
      </ImageBackground>
    </View>
  );
};
export default DrawerScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.appColor,
    flex: 1,
    alignContent: 'flex-start',
    // zIndex: 2
  },
  buttonStyle: {
    margin: 20,
  },
  header: {
    flex: 1,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  content: {
    flex: 5,
    // backgroundColor: 'red'
  },
  headerText: {
    fontSize: 32,
    lineHeight: 39,
    color: '#000000',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
