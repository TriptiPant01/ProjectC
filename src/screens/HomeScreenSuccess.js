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
  TouchableOpacity,
} from 'react-native';
import {CommonText, CommonButton, Divider} from '../commons';

import Images from '../images';
import Colors from '../Colors';

const {height, width} = Dimensions.get('window');
const HomeScreenSuccess = () => {
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <ImageBackground
        source={Images.Bg2}
        style={{width: '100%', height: '100%'}}
        // style={styles.imageContainer}
      >
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <View style={styles.notificaitonIcon}>
            <Image
              source={Images.Notification}
              style={{height: 30, width: 30}}
            />
          </View>
          <View style={styles.cardHolderWrapper}>
            <ImageBackground
              source={Images.CardTopHolder}
              style={{
                // flex: 1,
                flex: 1,
                resizeMode: 'stretch',
              }}>
              {/* // style={[styles.imageContainer, {resizeMode: 'stretch'}]}> */}
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
                    // margin: 10,
                    marginTop: 4,
                    // marginBottom: 10,
                    fontSize: 20,
                    color: Colors.whiteColor,
                  }}>
                  미인증된 안전 확인증
                </Text>
              </View>
            </ImageBackground>
            <View style={styles.cardBody}>
              <View
                style={{
                  paddingTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <CommonText textInput="이름" externalStyle={{fontSize: 11}} />
                  <CommonText
                    textInput="윤정탁"
                    externalStyle={{fontSize: 31}}
                  />
                  <CommonText
                    textInput="전화번호"
                    externalStyle={{fontSize: 11}}
                  />
                  <CommonText
                    textInput="01234567890"
                    externalStyle={{fontSize: 17}}
                  />
                </View>
                <Divider
                  innerStyle={{
                    width: StyleSheet.hairlineWidth,
                  }}
                />
                <View>
                  <Image
                    source={Images.BarCodeIcon}
                    style={{
                      width: 120,
                      height: 120,
                      resizeMode: 'contain',
                      // tintColor: 'white',
                      // backgroundColor: 'red',
                    }}
                  />
                </View>
              </View>
              <Image
                source={Images.CorrectIcon}
                style={{alignSelf: 'center'}}
              />
              <View style={{paddingBottom: 20}}>
                <CommonText
                  textInput="측정시간: 2020년 2월 7일 13시 42분"
                  externalStyle={{fontSize: 11}}
                />
                <CommonText
                  textInput="측정장소: 연세대학교 신촌캠 중앙도서관 "
                  externalStyle={{fontSize: 11}}
                />
                <CommonText
                  textInput="측정담당자: 윤정탁"
                  externalStyle={{fontSize: 11}}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.footerSlider}>
              <Image
                source={Images.Thermo}
                style={{height: 80, width: '100%', resizeMode: 'stretch'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardBody: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
    // height: 60,
    marginTop: 10,
    borderRadius: 20,
    overflow: 'hidden',
    // paddingVertical: 10
    // backgroundColor: '#98C8C1',
  },

  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: Colors.backgroundColor,
    height: height / 2,
  },
  cardHolderWrapper: {
    height: height / 1.5,
    width: width - 100,
    // overflow: 'hidden',
    flex: 3,
  },
  imageContainer: {
    resizeMode: 'cover',
    width: width / 1.3,
    height: height / 2.8,
    // borderRadius: 20,
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
    top: 20,
    borderRadius: 25,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreenSuccess;
