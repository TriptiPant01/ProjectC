import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import {
  Header,../../images
TextInput,
  TextInputLeftIcon,
  CommonButton,
  CommonStyles,
  MiddleText,
} from '../../commons';
import Images from '../../images';
import Colors from '../../Colors';

// handlePress = (navigation) => {
//     navigation.navigate('BirthDate9')

// }

const EnterNameScreen = ({ headerTitle, navigation }) => {
  const [input, setInput] = useState('');
  const [inputState, setInputState] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Header headerText="실명을 입력해주세요." navigation={navigation} />
      <ScrollView style={{ paddingHorizontal: 10, marginVertical: 10 }}>
        <TextInput
          title="이름"
          placeholderText={'실명'}
          customStyle={styles.Textholder}
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
          handleOnPress={() => this.handlePress(navigation)}
          clearButtonMode="while-editing"
        />
      </ScrollView>
      <View style={styles.buttonStyle}>
        <CommonButton
          title="다음"
          onPress={() => this.handlePress(navigation)}
          innerStyle={
            inputState === true && input.length > 0
              ? { backgroundColor: Colors.activeButton }
              : { backgroundColor: Colors.InactiveButton }
          }
          onPress={() => navigation.navigate('SchoolSelectionScreen11')}
          disabled={inputState === false && input.length <= 4}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.appColor,
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    // alignSelf: 'flex-start',
    alignContent: 'flex-start',

    // backgroundColor: "red"
  },
  buttonStyle: {
    margin: 20,
  },
});

export default EnterNameScreen;
