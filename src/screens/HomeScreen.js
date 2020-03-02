import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  Dimensions,
} from 'react-native';

import Images from '../Images';
import Colors from '../Colors';

const {height, width} = Dimensions.get('window');
const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.notificaitonIcon}>
        <Image source={Images.CardTopHolder} style={{height: 30, width: 30}} />
      </View>
      <View style={styles.cardHolderWrapper}>
        <View style={styles.cardHolderImageContainer}>
          <Image
            source={require('../Images/idCard.png')}
            style={styles.imageContainer}
          />
          <View style={styles.cardContainer}>
            <Text>adsf</Text>
          </View>
        </View>
      </View>
      {/* <Text>asdf</Text> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    backgroundColor: Colors.cardHolderBg,
    height: height / 2.3,
    backgroundColor: Colors.cardHolderBg,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
  cardHolderWrapper: {
    // width: width - 100,
    // overflow: 'hidden',
  },
  imageContainer: {
    resizeMode: 'stretch',
    height: height / 4,
  },
  cardHolderImageContainer: {
    // height: height / 3,
    // backgroundColor: 'green',
    // overflow: 'hidden',
  },
  notificaitonIcon: {
    shadowColor: '#000',
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    position: 'absolute',

    right: 40,
    backgroundColor: Colors.whiteColor,
    width: 50,
    height: 50,
    top: 30,
    borderRadius: 25,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
