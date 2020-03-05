import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

import Images from '../images';

import { CommonButton } from '../commons';

const TemperatureContainer = ({ numInfo, temp, comment, icon }) => {
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#88BFDE',
        }}>
        <Text style={{ color: '#658FA9', fontSize: 18 }}>{numInfo}</Text>
        <Text
          style={{
            color: 'white',
            zIndex: 1,
            textAlign: 'center',
            fontSize: 20,
          }}>
          {temp}
        </Text>
        <Image
          source={Images.FooterIcon}
          style={{ width: temp.length * 8, marginTop: -10 }}
        />
        <Text style={{ color: 'white', fontSize: 25 }}>{comment}</Text>
      </View>
      <ImageBackground
        source={Images.ImageBackgroundIcon}
        style={{
          paddingVertical: 20,
          // backgroundColor: 'white',
          // justifyContent: 'center',
          // alignContent: 'center',
          // flex: 1,
        }}>
        <Image
          source={icon}
          style={{
            height: 150,
            resizeMode: 'contain',
            borderRadius: 50,
            width: 150,
            alignSelf: 'center',
          }}
        />
      </ImageBackground>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          justifyContent: 'center',
          paddingBottom: 20,
        }}>
        <CommonButton
          title="예"
          innerStyle={{
            marginRight: 10,
            height: 30,
            backgroundColor: '#88BFDE',
          }}
        />
        <CommonButton
          title="아니오"
          innerStyle={{
            marginLeft: 10,
            height: 30,
            backgroundColor: '#88BFDE',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#88BFDE',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingVertical: 20,
    flex: 1,
  },
});

export default TemperatureContainer;
