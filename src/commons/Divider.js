import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../Colors';

const Divider = ({innerStyle}) => {
  return <View style={{...styles.dividerStyle, ...innerStyle}}></View>;
};

const styles = StyleSheet.create({
  dividerStyle: {
    width: '100%',
    borderColor: Colors.HomePageText,
    borderWidth: StyleSheet.hairlineWidth,
    marginVertical: 4,
  },
});
export default Divider;
