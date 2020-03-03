import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Divider, CommonText } from '../commons';

const UserProfileScreen = ({ }) => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          flex: 1,
        }}>
        <CommonText
          textInput="윤정탁"
          externalStyle={{ textAlign: 'center', fontSize: 28 }}
        />
        <CommonText
          textInput="010-5504-8441"
          externalStyle={{ textAlign: 'center', fontSize: 18 }}
        />
      </View>
      <View style={{ flex: 3, paddingHorizontal: 20 }}>
        <CommonText
          textInput="학교/회사 관리"
          externalStyle={{ fontSize: 16, marginVertical: 10, color: '#404040' }}
        />
        <Divider />
        <CommonText
          textInput="자주 묻는 질문"
          externalStyle={{ fontSize: 16, marginVertical: 10, color: '#404040' }}
        />
        <Divider />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <CommonText
            textInput="버전 정보"
            externalStyle={{ fontSize: 16, marginVertical: 10, color: '#404040' }}
          />
          <Text style={{ fontSize: 16, marginVertical: 10, color: '#404040' }}>
            ver 1.07
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserProfileScreen;
