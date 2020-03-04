import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Images from '../../Images';

const { height, width } = Dimensions.get('window');
const data = [
  {
    id: 1,
    title: '신종코로나 중국서 사망자 800명 후베이 외 증가세 완화(종합2보)',
    desc:
      '중국에서 신종 코로나바이러스 감염증(신종코로나)으로 봉쇄 조치가 강화되는 가운데 사망자가 이틀째 800명…',
    imageIcon: Images.News2,
    logoIcon: Images.NewsLogo1,
    logoFirst: '매일 경제',
    logoSecond: '3분 전',
  },
  {
    id: 2,
    title: '‘세번째 완치’ 4번 환자 퇴원… 추가 퇴원 이어질 듯',
    desc:
      '초기에 감염됐던 환자들은 속속 완지가 돼서 차례로 퇴원을 하고 있습니다. 병원에 처음 왔을 때는 상황이 좀 안 좋았던 4번 환자가 다 나아서 오늘(9일) 아침에 퇴원을 했습니다.',
    imageIcon: Images.News3,
    logoIcon: Images.NewsLogo2,
    logoFirst: 'SBS 뉴스',
    logoSecond: '15분 전',
  },
];

const RealTimeContainer = ({
  title,
  desc,
  logoIcon,
  logoFirst,
  logoSecond,
  newsIcon,
  click

}) => {
  return (
    <TouchableOpacity
      onPress={click}
      style={{
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginVertical: 10,
      }}

    >
      <View style={{ flexDirection: 'row', marginVertical: 8 }}>
        <Image
          source={logoIcon}
          resizeMode="contain"
          style={{
            resizeMode: 'contain',
            height: 30,
            width: 30,
            marginRight: 5,
          }}
        />
        <View>
          <Text style={{ fontSize: 11, color: '#757575' }}> {logoFirst}</Text>
          <Text style={{ fontSize: 11, color: '#757575' }}>{logoSecond}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image source={newsIcon} style={{ paddingRight: 10 }} />
        <View style={{ flex: 1, paddingLeft: 15 }}>
          <Text style={{ fontSize: 15, color: '#212121' }}>{title}</Text>
          <Text style={{ fontSize: 13, color: '#757575', marginTop: 10 }}>
            {desc}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const RealtimeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.wrapper}>
      <Image
        source={Images.News1}
        style={{ width: '100%', height: height / 3.1 }}
      />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          right: 0,
          top: height / 3.5,
        }}>
        <RealTimeContainer
          title="신종코로나 중국서 사망자 800명 후베이 외 증가세 완화(종합2보)"
          desc="초기에 감염됐던 환자들은 속속 완지가 돼서 차례로 퇴원을 하고 있습니다. 병원에 처음 왔을 때는 상황이 좀 안 좋았던 4번 환자가 다 나아서 오늘(9일) 아침에 퇴원을 했습니다."
          logoFirst={Images.NewsLogo1}
          newsIcon={Images.News2}
          logoIcon={Images.NewsLogo1}
          logoFirst="매일 경제"
          logoSecond="3분 전"
          click={() => navigation.navigate('RealNewsDetail')}
        />
      </View>
      <View style={{ marginTop: height / 3.6 }}>
        {data.map(i => (
          <RealTimeContainer
            title={i.title}
            desc={i.desc}
            logoFirst={i.logoFirst}
            newsIcon={i.imageIcon}
            logoIcon={i.logoIcon}
            logoFirst={i.logoFirst}
            logoSecond={i.logoSecond}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default RealtimeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f1f2f3',
  },
});
