import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Colors from '../Colors';
const {width} = Dimensions.get('screen');
const MiddleText = ({title, style1}) => {
  return (
    <View style={{...styles.textwrapper}}>
      <Text style={{...styles.textDesign, ...style1}}> {title}</Text>
    </View>
  );
};

export default MiddleText;

const styles = StyleSheet.create({
  textwrapper: {
    width: width / 1.5,
    paddingHorizontal: 8,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: Colors.appColor,
  },

  textDesign: {
    fontSize: 14,
  },
});
