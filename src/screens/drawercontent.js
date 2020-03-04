import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import { Header, TextInput, TextInputLeftIcon, CommonButton, CommonStyles } from '../commons'
// import { white } from 'ansi-colors';
const { width } = Dimensions.get('screen')
export default class drawerContentComponents extends Component {

    navigateToScreen = (route) => (
        () => {
            const navigateAction = NavigationActions.navigate({
                routeName: route
            });
            this.props.navigation.dispatch(navigateAction);
        })

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    {/* <ImageBackground source={require('../../assets/drawer-cover.png')} style={{flex: 1, width: 280, justifyContent: 'center'}} >
                    <Text style={styles.headerText}>Header Portion</Text>
                    <Text style={styles.headerText}>You can display here logo or profile image</Text>
                </ImageBackground> */}
                </View>
                <View style={styles.screenContainer}>
                    <View style={[styles.screenStyle, (this.props.activeItemKey == 'ScreenA') ? styles.activeBackgroundColor : null]}>
                        <Text style={[styles.screenTextStyle, (this.props.activeItemKey == 'ScreenA') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('ScreenA')}>검사 내역 관리</Text>
                    </View>
                    <View style={[styles.screenStyle, (this.props.activeItemKey == 'ScreenB') ? styles.activeBackgroundColor : null]}>
                        <Text style={[styles.screenTextStyle, (this.props.activeItemKey == 'ScreenB') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('ScreenB')}>서비스 이용 가이드</Text>
                    </View>
                    <View style={[styles.screenStyle, (this.props.activeItemKey == 'ScreenC') ? styles.activeBackgroundColor : null]}>
                        <Text style={[styles.screenTextStyle, (this.props.activeItemKey == 'ScreenC') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('ScreenC')}>공지사항</Text>
                    </View>
                    <View style={[styles.screenStyle, (this.props.activeItemKey == 'ScreenC') ? styles.activeBackgroundColor : null]}>
                        <Text style={[styles.screenTextStyle, (this.props.activeItemKey == 'ScreenC') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('ScreenC')}> 앱 버전</Text>
                    </View>

                </View>
                <View style={styles.bottomContainer}>

                    <Text style={styles.bottomText}>안티코 고객센터</Text>
                    <Text style={styles.bottomText}>오전 10시 - 오후 8시</Text>
                    <CommonButton
                        title='02-392-0700'
                        innerStyle={{
                            backgroundColor: Colors.appColor,
                            borderColor: '#43BBF0',
                            borderWidth: 2,
                            width: width / 2.4
                        }}
                        innerTextStyle={{ color: '#43BBF0' }} />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        zIndex: 1
        // backgroundColor: 'green'


    },
    headerContainer: {
        height: 150,
        // backgroundColor: 'green',
        flex: 1
    },
    headerText: {
        color: '#fff8f8',
    },
    screenContainer: {
        paddingTop: 20,
        width: '100%',
        flex: 3,
        // backgroundColor: 'green'
    },
    screenStyle: {
        height: 50,
        marginTop: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#00000014',
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle: {
        fontSize: 16,
        marginLeft: 19,
        color: '#404040',
        textAlign: 'center'
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: '#00adff'
    },
    activeBackgroundColor: {
        backgroundColor: 'grey'
    },
    bottomContainer: {
        flex: 2,
        // backgroundColor: 'yellow',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: "center"
    },
    bottomText: {
        fontSize: 17,
        lineHeight: 20,
        color: '#021F2C'
    }
});