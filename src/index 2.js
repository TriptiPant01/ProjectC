import React from 'react'
import { View, Text, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';



import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// import { FindANewJob24, HelpPageDetail28, HelpPage27, UserHistory26, HomeScreenDetail18, Home17, Reservation20, UserInfo, CompleteScreen14, AgreementScreen12, Displaylogo2, EnterPhoneNumber3, VerificationCode5, EnterName8, BirthDate9, PayrollScreen11 } from './screens'


import Images from './images'

import { CameraScreen10, PermissionScreen1, NotificationScreen19, FindANewJob24, HelpPageDetail28, HelpPage27, UserHistory26, HomeScreenDetail18, Home17, Reservation20, UserInfo, CompleteScreen14, AgreementScreen12, Displaylogo2, EnterPhoneNumber3, VerificationCode5, EnterName8, BirthDate9, PayrollScreen11, HelpSignInSignUp15, HelpSignInSignUpDetail16 } from './screens'
const loginStack = createStackNavigator({
    CameraScreen10: {
        screen: CameraScreen10
    },
    PermissionScreen1: {
        screen: PermissionScreen1,
    },
    Logo: {
        screen: Displaylogo2,
    },
    EnterPhoneNumber3: {
        screen: EnterPhoneNumber3,
    },
    VerificationCode5: {
        screen: VerificationCode5,
    }, EnterName8: {
        screen: EnterName8,
    },
    BirthDate9: {
        screen: BirthDate9,
    },
    PayrollScreen11: {
        screen: PayrollScreen11,
    },

    AgreementScreen12: {
        screen: AgreementScreen12,
    }, CompleteScreen14: {
        screen: CompleteScreen14,
    },

    FindANewJob24: {
        screen: FindANewJob24,
    },
    HelpSignInSignUp15: {
        screen: HelpSignInSignUp15
    },
    HelpSignInSignUpDetail16: { screen: HelpSignInSignUpDetail16 }
},
    {
        headerMode: 'none',
        initialRouteName: 'PermissionScreen1'
    }
)

const HomeStack = createStackNavigator({
    Home17: Home17,
    HomeScreenDetail18: HomeScreenDetail18,
    NotificationScreen19: NotificationScreen19
},
    {
        headerMode: 'none',
        initialRouteName: 'Home17'
    })
const ReservationStack = createStackNavigator({
    Reservation20: Reservation20,
},
    {
        headerMode: 'none',
        initialRouteName: 'Reservation20'
    })
const UserInfoStack = createStackNavigator({
    UserInfo: UserInfo,
    HelpPage27: HelpPage27,
    HelpPageDetail28: HelpPageDetail28,
    UserHistory26: UserHistory26
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
ReservationStack.navigationOptions = ({ navigation }) => {
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

    '예약내역': ReservationStack,
    '내 정보':
        UserInfoStack

}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === '홈') {

                return iconName = focused ? <Image source={Images.HomeIcon} style={{ height: 29, width: 29, tintColor: '#4388F0' }} />
                    : <Image source={Images.HomeIcon} style={{ height: 29, width: 29, tintColor: '#999999' }} />


                // Sometimes we want to add badges to some icons.
                // You can check the implementation below.
                // <IconComponent name={iconName} size={25} color={tintColor} />
            } else if (routeName === '예약내역') {
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

            Home: AppStack,
            Login: loginStack,


        },
        {
            initialRouteName: 'Login',
        }
    )
);

