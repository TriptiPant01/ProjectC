import { HomeScreen, LogoScreen1, PermissionScreen2, UserInfoScreen, HealthInfoScreen } from './screens';
import React from 'react'
import { View, Text, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Images from './images'


const LoginStack = createStackNavigator({
  LogoScreen1: LogoScreen1


})


const HomeStack = createStackNavigator({
  HomeScreen: HomeScreen

})


const HealthInfoStack = createStackNavigator({
  HealthInfo: HealthInfoScreen,
},
  {
    headerMode: 'none',
    initialRouteName: 'HealthInfo'
  })
const UserInfoStack = createStackNavigator({
  UserInfo: UserInfoScreen,
},
  {
    headerMode: 'none',
    initialRouteName: 'UserInfo'
  })


UserInfoStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

HealthInfoStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};



const AppStack = createBottomTabNavigator({
  '홈': HomeStack,

  '건강정보': HealthInfoStack,
  '내 정보':
    UserInfoStack

}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;

      let iconName;
      if (routeName === '홈') {

        return iconName = focused ? <Image source={Images.HomeIcon} style={{ height: 29, width: 29, tintColor: '#4388F0' }} />
          : <Image source={Images.HomeIcon} style={{ height: 29, width: 29, tintColor: '#999999' }} />


        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
        // <IconComponent name={iconName} size={25} color={tintColor} />
      } else if (routeName === '건강정보') {
        return iconName = focused ? <Image source={Images.ReserveIcon} style={{ height: 29, width: 29, tintColor: '#4388F0' }} />
          : <Image source={Images.ReserveIcon} style={{ height: 29, width: 29, tintColor: '#999999' }} />
      }
      else if (routeName === '내 정보') {
        return iconName = focused ? <Image source={Images.userIcon} style={{ height: 29, width: 29, tintColor: '#4388F0' }} />
          : <Image source={Images.userIcon} style={{ height: 29, width: 29, tintColor: '#999999' }} />
      }

      // You can return any component that you like here!
    },
  }),
  tabBarOptions: {
    activeTintColor: '#4388F0',
    inactiveTintColor: '#999999',

  },
}
)

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginStack,
      Home: AppStack,
    },
    {
      initialRouteName: 'Home',
    }
  )
);
