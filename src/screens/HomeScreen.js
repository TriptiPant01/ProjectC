import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {CommonText} from '../commons';

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
        <ImageBackground
          source={require('../Images/idCard.png')}
          style={styles.imageContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              flex: 1,
            }}></View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-end',
              flex: 1 / 1.3,
            }}>
            <Image
              source={Images.UniversityName}
              style={{alignSelf: 'flex-start', margin: 5}}
            />

            <Text
              style={{
                alignSelf: 'center',
                margin: 15,
                fontSize: 21,
                color: Colors.whiteColor,
              }}>
              미인증된 안전 확인증
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.cardBody}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <CommonText textInput="이름" externalStyle={{fontSize: 11}} />
              <CommonText textInput="윤정탁" externalStyle={{fontSize: 31}} />
              <CommonText textInput="전화번호" externalStyle={{fontSize: 11}} />
              <CommonText
                textInput="01234567890"
                externalStyle={{fontSize: 17}}
              />
            </View>
            <View></View>
          </View>
          <View>
            <CommonText
              textInput="안전인증이 필요해요."
              externalStyle={{fontSize: 30}}
            />
            <CommonText
              textInput="안전인증 장소 안내"
              externalStyle={{fontSize: 16}}
            />
          </View>

          <CommonText />
        </View>
      </View>

      <View style={styles.footerSlider}>
        <Text>sdf</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardBody: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

    backgroundColor: Colors.CardColor,
    flex: 2,
    shadowColor: '#000',
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  footerSlider: {
    flex: 1 / 2,
    height: 30,
    backgroundColor: 'blue',
  },

  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
  cardHolderWrapper: {
    height: height / 1.5,
    // width: width - 100,
    // overflow: 'hidden',
    flex: 3,
  },
  imageContainer: {
    resizeMode: 'contain',
    width: width / 1.3,
    height: height / 3,
    borderRadius: 20,
    backgroundColor: 'red',
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
