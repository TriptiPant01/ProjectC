import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Input} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Colors';

const InputField = ({
  numeric,
  footerText,
  placeholderText,
  leftIconDispay,
  title,
  handleOnPress,
  disabled,
  changeText,
  value,
  onSubmit,
  navigation,
  navigationFooter,
  clearButtonMode,
}) => {
  return (
    <View style={styles.InputFieldwrapper}>
      <Text style={styles.textStyle}>{title}</Text>
      <TouchableOpacity onPress={handleOnPress}>
        <Input
          placeholder={placeholderText}
          leftIcon={leftIconDispay}
          inputContainerStyle={{
            borderBottomColor: Colors.textBoxBorder,
            borderBottomWidth: 2,
          }}
          inputStyle={{fontSize: 28}}
          disabled={disabled}
          onChangeText={changeText}
          value={value}
          onSubmitEditing={onSubmit}
          keyboardType={numeric ? 'number-pad' : 'default'}
          leftIconContainerStyle={{marginLeft: 0}}
          clearButtonMode={clearButtonMode}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigationFooter && navigation.navigate('HelpListScreen13')
        }>
        <Text style={styles.footerTextStyle}>{footerText || ''}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  InputFieldwrapper: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    // backgroundColor: 'red'
    paddingHorizontal: 10,
  },
  footerTextStyle: {
    fontSize: 12,
    color: Colors.loginHelpText,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  textStyle: {
    fontSize: 13,
    color: Colors.inputTitle,
    paddingHorizontal: 4,
  },
});
