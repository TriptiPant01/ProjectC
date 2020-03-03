import { HomeScreen, LogoScreen1, PermissionScreen2, UserInfoScreen, HealthInfoScreen, MapsScreen, HelpListScreen13, HelpDetailScreen14, EnterPhoneNumber3, EnterNameScreen9, VerificationCodeScreen5, SchoolSelectionScreen11, CompletionScreen12, Diagnosis, UserProfileScreen24, LocationScreen23, RealTimeNews21, RealTimeNewsDetail } from './screens';
import React from 'react'
import { View, Text, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Images from './images'


const LoginStack = createStackNavigator({
  LogoScreen1: LogoScreen1,
  PermissionScreen2: PermissionScreen2,
  EnterPhoneNumber3: EnterPhoneNumber3,
  VerificationCodeScreen5: VerificationCodeScreen5,
  EnterNameScreen9: EnterNameScreen9,
  SchoolSelectionScreen11: SchoolSelectionScreen11,
  CompletionScreen12: CompletionScreen12,
  HelpListScreen13: HelpListScreen13,
  HelpDetailScreen14: HelpDetailScreen14,
  RealNewsDetail: RealTimeNewsDetail
}, {

  headerMode: 'none',
  initialRouteName: 'LogoScreen1'
}
)


const HomeStack = createStackNavigator({
  HomeScreen: HomeScreen

}, {
  headerMode: 'none',
  initialRouteName: 'HomeScreen'

})

const DiagnosisStack = createMaterialTopTabNavigator({
  진단법: {
    screen: Diagnosis,
  },
  코로나맵: MapsScreen,
  실시간뉴스: RealTimeNews21,
  진료소: LocationScreen23


},

  {

    tabBarOptions: {
      style: {
        // paddingTop: 50,
        backgroundColor: '#FFFFFF',



      },
      indicatorStyle: {
        backgroundColor: '#43BBF0'
      },
      activeTintColor: '#43BBF0',
      inactiveTintColor: '#B2B2B2'
    },
  })

const HealthInfoStack = createStackNavigator({
  코로나정보: DiagnosisStack,



},
  {
    // headerMode: 'sdkjdhjh',
    initialRouteName: '코로나정보',
    // /
    navigationOptions: {
      headerTintColor: '#fff',
    }

  })
const UserInfoStack = createStackNavigator({
  UserProfileScreen24: UserProfileScreen24,
},
  {
    headerMode: 'none',
    initialRouteName: 'UserProfileScreen24'
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

HomeStack.navigationOptions = ({ navigation }) => {
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
