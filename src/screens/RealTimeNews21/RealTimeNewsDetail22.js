import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';

import Images from '../../images';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {height, width} = Dimensions.get('window');
import {CommonText} from '../../commons';
import {RealTimeNewsDetail} from '.';
import {HeaderTitle} from 'react-navigation-stack';
const RealtimenewsDetail = ({navigation}) => {
  console.log(height);
  return (
    <ScrollView style={styles.wrapper}>
      <ImageBackground
        source={Images.NewsDetail}
        style={{width: '100%', height: height / 2.3}}
        resizeMode="stretch">
        <View style={{flex: 1, padding: 10}}>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Icon
              name="arrow-back"
              size={24}
              color="#FFFFFF"
              style={{marginRight: 5}}
              onPress={() => navigation.navigate('실시간뉴스')}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Icon name="share" size={24} color="#FFFFFF" />
              <Icon
                name="bookmark-border"
                size={24}
                color="#FFFFFF"
                style={{marginLeft: 20}}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Image
              source={Images.bbcNewsIcon}
              style={{height: 40, resizeMode: 'contain', width: 30}}
            />
            <View style={{paddingLeft: 10}}>
              <Text style={{color: 'white', fontSize: 15}}>BBC 뉴스</Text>
              <Text style={{color: 'white', fontSize: 15}}>30분 전</Text>
            </View>
          </View>
          <View style={{flex: 1, width: width / 1.5}}>
            <Text style={{color: 'white', fontSize: 19}}>
              신종 코로나바이러스 사망자 수가 사스 사망자 수를 앞질렀다
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={{padding: 20}}>
        <CommonText
          textInput="신종 코로나바이러스로 인한 사망자 수가 2003년 사스 사태의 사망자 수를
          추월했다."
          externalStyle={{marginBottom: 20, fontSize: 13, color: 'black'}}
        />
        <CommonText
          textInput="총 803명의 사망자 중에서 한 명을 제외하고는 모두 중국 본토와 홍콩에서 발생했다."
          externalStyle={{marginBottom: 20, fontSize: 13}}
        />
        <CommonText
          textInput=" 이 바이러스가 처음 창궐한 중국 후베이성에서만 사망자 수가 현지 당국의
          보고에 따르면 이제 780명이다."
          externalStyle={{marginBottom: 20, fontSize: 13}}
        />
        <CommonText
          textInput=" 2003년에는 사스(SARS, 중증급성호흡기증후군)로 인해 20개가
          넘는 나라에서 총 774명이 사망했다."
          externalStyle={{marginBottom: 20, fontSize: 13}}
        />
        <CommonText
          textInput="전세계에서 적어도 34,800명이 신종 코로나바이러스에 감염됐고 이중
          대다수는 중국에서 발생했다."
          externalStyle={{marginBottom: 20, fontSize: 13}}
        />
        <CommonText
          textInput=" 지난달 세계보건기구(WHO)는 신종
          코로나바이러스에 대해 전세계 보건 비상사태를 선포했다. "
        />
      </View>
    </ScrollView>
  );
};

export default RealtimenewsDetail;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
