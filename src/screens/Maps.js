import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';

import {WebView} from 'react-native-webview';

startNavigation = url => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  });
};
const MapsScreen = ({}) => {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          html:
            '<iframe src="https://map.naver.com/v5/?c=14135903.3238332,4519648.0312956,16,0,0,0,dh" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>',
        }}
      />
    </View>
  );
};

export default MapsScreen;
