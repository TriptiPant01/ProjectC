import {
  HomeScreen,
  LogoScreen1,
  PermissionScreen2,
  UserInfoScreen,
  HealthInfoScreen,
  MapsScreen,
  HelpListScreen13,
  HelpDetailScreen14,
  EnterPhoneNumber3,
  EnterNameScreen9,
  VerificationCodeScreen5,
  SchoolSelectionScreen11,
  CompletionScreen12,
  Diagnosis,
  UserProfileScreen24,
  LocationScreen23,
  RealTimeNews21,
  RealTimeNewsDetail,
  DrawerScreen,
  HomeScreenSuccess,
  NotificationScreen,
  drawercontent,
} from './screens';
import React from 'react';
import { View, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import Images from './images';
import { createDrawerNavigator } from 'react-navigation-drawer';

const LoginStack = createStackNavigator(
  {
    LogoScreen1: LogoScreen1,
    PermissionScreen2: PermissionScreen2,
    EnterPhoneNumber3: EnterPhoneNumber3,
    VerificationCodeScreen5: VerificationCodeScreen5,
    EnterNameScreen9: EnterNameScreen9,
    SchoolSelectionScreen11: SchoolSelectionScreen11,
    CompletionScreen12: CompletionScreen12,
    HelpListScreen13: HelpListScreen13,
    HelpDetailScreen14: HelpDetailScreen14,
    RealNewsDetail: RealTimeNewsDetail,
  },
  {
    headerMode: 'none',
    initialRouteName: 'LogoScreen1',
  },
);

// const HomeStack = createStackNavigator({
//   HomeScreen: HomeScreen,
//   // DrawerScreen: DrawerScreen,
//   NotificationScreen: NotificationScreen,
//   // DrawerStack: drawerStack

// }, {
//   headerMode: 'none',
//   initialRouteName: 'HomeScreen'

// })
// const RouteConfigs = {
//   DrawerScreen: DrawerScreen,
//   HealthInfoScreen: HealthInfoScreen,
//   UserInfoScreen: UserInfoScreen
// };

// const DrawerNavigatorConfig = {
//   intialRouteName: 'Home',
//   navigationOptions: {
//     headerStyle: {
//       backgroundColor: '#f4511e',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       color: 'white',
//     },
//   },
//   contentOptions: {

//     activeTintColor: '#e91e63',
//     itemsContainerStyle: {
//       paddingTop: 100,

//     },
//     iconContainerStyle: {
//       opacity: 1,

//     },

//   },
//   drawerBackgroundColor: '#FFFFFF',
//   drawerPosition: 'right',
//   overlayColor: 1,

// };

// const drawerStack = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig)

const drawerStack = createDrawerNavigator(
  {
    DrawerScreen: DrawerScreen,
    HealthInfoScreen: HealthInfoScreen,
    UserInfoScreen: UserInfoScreen,
  },
  {
    drawerPosition: 'right',
    overlayColor: 1,
    contentComponent: drawercontent,
  },
);

// const DiagnosisStack = createMaterialTopTabNavigator({
//   진단법: {
//     screen: Diagnosis,
//   },
//   코로나맵: MapsScreen,
//   실시간뉴스: RealTimeNews21,
//   진료소: LocationScreen23
// })
// const LoginStack = createStackNavigator(
//   {
//     LogoScreen1: LogoScreen1,
//     PermissionScreen2: PermissionScreen2,
//     EnterPhoneNumber3: EnterPhoneNumber3,
//     VerificationCodeScreen5: VerificationCodeScreen5,
//     EnterNameScreen9: EnterNameScreen9,
//     SchoolSelectionScreen11: SchoolSelectionScreen11,
//     CompletionScreen12: CompletionScreen12,
//     HelpListScreen13: HelpListScreen13,
//     HelpDetailScreen14: HelpDetailScreen14,
//     RealNewsDetail: RealTimeNewsDetail,
//   },
//   {
//     headerMode: 'none',
//     initialRouteName: 'LogoScreen1',
//   },
// );

const HomeStack = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    HomeScreenSuccess: HomeScreenSuccess,
    DrawerScreen: DrawerScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeScreen',
  },
);

const DiagnosisStack = createMaterialTopTabNavigator(
  {
    진단법: {
      screen: Diagnosis,
    },
    코로나맵: MapsScreen,
    실시간뉴스: RealTimeNews21,
    진료소: LocationScreen23,
  },

  {
    tabBarOptions: {
      style: {
        // paddingTop: 50,
        backgroundColor: '#FFFFFF',
      },
      indicatorStyle: {
        backgroundColor: '#43BBF0',
      },
      activeTintColor: '#43BBF0',
      inactiveTintColor: '#B2B2B2',
    },
  },
);

const HealthInfoStack = createStackNavigator(
  {
    코로나정보: DiagnosisStack,
  },

  {
    // headerMode: 'sdkjdhjh',
    initialRouteName: '코로나정보',
    headerLeft: <View style={{ padding: 6 }}></View>,
    headerTitleStyle: {
      textAlign: 'center',
      // backgroundColor: 'red',
      // flexGrow: 1,
      alignSelf: 'center',
    },
    // /
    navigationOptions: {
      headerTintColor: '#fff',
      backgroundColor: 'red',
    },
  },
);
const UserInfoStack = createStackNavigator(
  {
    UserProfileScreen24: UserProfileScreen24,
  },
  {
    headerMode: 'none',
    initialRouteName: 'UserProfileScreen24',
  },
);

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

// HomeStack.navigationOptions = ({navigation}) => {
//   let tabBarVisible = true;
//   if (navigation.state.index > 0) {
//     tabBarVisible = false;
//   }

//   return {
//     tabBarVisible,
//   };
// };

const AppStack = createBottomTabNavigator(
  {
    홈: HomeStack,

    건강정보: HealthInfoStack,
    '내 정보': UserInfoStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === '홈') {
          return (iconName = focused ? (
            <Image
              source={Images.HomeIcon}
              style={{ height: 29, width: 29, tintColor: '#4388F0' }}
            />
          ) : (
              <Image
                source={Images.HomeIcon}
                style={{ height: 29, width: 29, tintColor: '#999999' }}
              />
            ));

          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // <IconComponent name={iconName} size={25} color={tintColor} />
        } else if (routeName === '건강정보') {
          return (iconName = focused ? (
            <Image
              source={Images.ReserveIcon}
              style={{ height: 29, width: 29, tintColor: '#4388F0' }}
            />
          ) : (
              <Image
                source={Images.ReserveIcon}
                style={{ height: 29, width: 29, tintColor: '#999999' }}
              />
            ));
        } else if (routeName === '내 정보') {
          return (iconName = focused ? (
            <Image
              source={Images.userIcon}
              style={{ height: 29, width: 29, tintColor: '#4388F0' }}
            />
          ) : (
              <Image
                source={Images.userIcon}
                style={{ height: 29, width: 29, tintColor: '#999999' }}
              />
            ));
        }

        // You can return any component that you like here!
      },
    }),
    tabBarOptions: {
      activeTintColor: '#4388F0',
      inactiveTintColor: '#999999',
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginStack,
      Home: AppStack,
      Drawer: drawerStack,
    },
    {
      initialRouteName: 'Login',
    },
  ),
);
