import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Colors from '../Colors';

const { height } = Dimensions.get('screen');

const CommentBox = ({ comentText }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{comentText || ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.commentBackgroundColor,
    marginVertical: 10,
    height: height / 9,
    borderRadius: 7,
  },
});
export default CommentBox;
