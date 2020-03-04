import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Input } from 'react-native-elements';

import {
  Header,
  TextInput,
  TextInputLeftIcon,
  CommonButton,
  CommonStyles,
} from '../../commons';
import Images from '../../images';
import Colors from '../../Colors';

const EnterPhoneNumber3 = ({headerTitle, navigation}) => {
  const [input, setInput] = useState('');
  const [inputState, setInputState] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Header
        headerText="전화번호로 간편하게 시작해요."
        navigation={navigation}
      />

      <ScrollView style={{paddingHorizontal: 10, marginVertical: 20}}>
        <TextInput
          navigationFooter={true}
          navigation={navigation}
          footerText="로그인 / 가입을 도와드릴까요?"
          title="전화번호"
          placeholderText={'0000-0000'}
          navigationFooter={() => navigation.navigate('HelpListScreen13')}
          // customStyle={styles.Textholder}
          leftIconDispay={<TextInputLeftIcon />}
          changeText={value => {
            setInput(value);
            console.log(value, inputState);
            if (value.length > 4) {
              setInputState(true);
            } else {
              setInputState(false);
            }
          }}
          value={input}
        />
      </ScrollView>
      <View style={styles.buttonStyle}>
        <CommonButton
          title="다음"
          onPress={() => navigation.navigate('VerificationCodeScreen5')}
          innerStyle={
            inputState === true && input.length > 0
              ? {backgroundColor: Colors.activeButton}
              : {backgroundColor: Colors.InactiveButton}
          }
          disabled={inputState === false && input.length <= 4}
        />
      </View>
    </View>
  );
};
export default EnterPhoneNumber3;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.appColor,
    flex: 1,
    alignContent: 'flex-start',
  },
  buttonStyle: {
    margin: 20,
  },
});
