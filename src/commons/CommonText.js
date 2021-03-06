import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CommonText = ({textInput, externalStyle}) => {
  return (
    <Text style={{...styles.textStyle, ...externalStyle}}>
      {textInput || ''}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#000000',
  },
});

export default CommonText;
