import React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Divider } from '../commons';

const data = [
  {
    id: 1,
    title: '보라매병원',
    location: '서울 동작구',
    type: '질병관리과',
    ph: '02-2133-7692',
  },
  {
    id: 1,
    title: '서울의료원',
    location: '서울 중랑구',
    type: '질병관리과',
    ph: '02-2133-7692',
  },
  {
    id: 1,
    title: '고려대학교 의과대학부속병원',
    location: '서울 구로구',
    type: '질병관리과',
    ph: '02-2133-7692',
  },
  {
    id: 1,
    title: '서울대학교 병원',
    location: '서울 종로구',
    type: '질병관리과',
    ph: '02-2133-7692',
  },
  {
    id: 1,
    title: '한양대학교 병원',
    location: '서울 성동구',
    type: '질병관리과',
    ph: '02-2133-7692',
  },
];

const Locationcontainer = ({ title, location, type, phone }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}>
        <View style={{ width: 30 }}>
          <Icon
            name="place"
            size={24}
            color="grey"
            style={{ marginRight: 5 }}

          />
        </View>
        <View>
          <Text style={{ fontSize: 17, color: '#000000' }}>{title}</Text>
          <Text style={{ fontSize: 14, color: '#999A9B' }}>{location}</Text>
        </View>
        <View style={{ alignItems: 'flex-end', flex: 2 }}>
          <Text style={{ fontSize: 13, color: '#636465' }}>{type}</Text>
          <Text style={{ fontSize: 14, color: '#43BBF0' }}>{phone}</Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

const LocationScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
      }}>
      <TextInput
        style={{
          height: 40,
          backgroundColor: '#ECEDEE',
          borderWidth: 1,
          borderColor: '#EDEDED',
          borderRadius: 5,
        }}
      />
      <View style={{ marginTop: 20 }}>
        {data.map(i => (
          <Locationcontainer
            title={i.title}
            location={i.location}
            type={i.type}
            phone={i.ph}
          />
        ))}
      </View>
    </View>
  );
};

export default LocationScreen;
