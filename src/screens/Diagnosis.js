import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import Images from '../images';
import { CommonText, TemperatureContainer } from '../commons';
import { HeaderTitle } from 'react-navigation-stack';

const Content = [
  { id: 1, number: '01', temp: '37.5', comment: '발열 증상이 있다', icon: Images.HumanIcon },
  { id: 2, number: '02', temp: '32.5', comment: '기침이나 인후통', icon: Images.HumanIcon },
  { id: 3, number: '03', temp: '37.5', comment: '증상이 있다', icon: Images.HumanIcon },
];
const Diagnosis = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.Innercontainer}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 40,
          }}>
          <CommonText
            textInput="의사가 알려주는 정확한"
            externalStyle={{ fontSize: 18, color: 'white' }}
          />
          <CommonText
            textInput="코로나 자가진단법"
            externalStyle={{ fontSize: 30, color: 'white', zIndex: 1 }}
          />
          <Image
            source={Images.FooterIcon}
            style={{ width: '60%', marginTop: -20, opacity: 0.6 }}
          />
        </View>
      </View>
      <View>
        {Content.map(i => (
          <TemperatureContainer
            numInfo={i.number}
            temp={i.temp}
            comment={i.comment}
            icon={i.icon}
          />
        ))}
      </View>
    </ScrollView>
  );
};


Diagnosis.navigationOptions = () => {
  headerTitle = 'Diaskldsdffdj'
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  Innercontainer: {
    flex: 1,
    backgroundColor: '#88BFDE',
  },
});
export default Diagnosis;
