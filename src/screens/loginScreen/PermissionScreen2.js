import React, { Component } from 'react';
import { ScrollView, FlatList, View, Text, Button, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header, TextInput, TextInputLeftIcon, CommonButton, CommonStyles, MiddleText } from '../../commons'


handlePress = (navigation) => {
    navigation.navigate('EnterPhoneNumber3')

}

const PermissionScreen2 = ({ navigation }) => {
    return (
        <View style={styles.backgroundContent}>
            <View style={styles.modalBox}>

                <View style={styles.contentWrapper}>

                    <View style={styles.firstBox}>
                        <Text style={styles.firstText}>편리한 이용을 위해 </Text>
                        <Text style={styles.firstText}> 권한허용이 꼭 필요합니다.</Text>
                    </View>

                    <View style={styles.midLine}></View>

                    <View style={styles.secondContent}>
                        <View style={styles.notificationBox}>
                            <Icon
                                name="notifications"
                                size={20}
                                color="black"
                                style={{ marginRight: 5 }}

                            />
                            <Text style={styles.notificationtext}>알림 허용</Text>
                        </View>

                        <Text style={styles.normalText}>우미가 보내는 알림을 확인하는데에 필요해요.</Text>
                    </View>


                    <View style={styles.thirdContent}>
                        <View style={styles.locationBox}>
                            <Icon
                                name="place"
                                size={20}
                                color="black"
                                style={{ marginRight: 5 }}

                            />
                            <Text style={styles.locationText}>위치정보 허용</Text>
                        </View>

                        <Text style={styles.normalText}>우미가 보내는 알림을 확인하는데에 필요해요.</Text>
                    </View>

                </View>


                <View style={styles.buttonStyle}>
                    <CommonButton 
                        title='네, 동의해요' 
                        innerStyle={{backgroundColor:'#43BBF0'}}
                        onPress={() => navigation.navigate('EnterPhoneNumber3')} />
                </View>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    backgroundContent: {
        flex: 1,
        backgroundColor: '#00000062',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'

    },
    modalBox: {

        marginHorizontal: '7.5%',
        width: '85%',
        backgroundColor: '#FFFFFF',
        height: Platform.OS === 'ios' ? '50%' : '70%',
        borderRadius: 8

    },
    contentWrapper: {
        marginTop: '15%',
        marginHorizontal: '5%',
        flex: 6

    },
    firstBox: {
        marginBottom: '5%'
    },
    firstText: {
        fontSize: 17,
        lineHeight: 20,
    },
    midLine: {
        width: '100%',
        backgroundColor: '#000000',
        height: 1, marginBottom: '5%',
        opacity: 0.2
    },
    secondContent: {
        marginBottom: '10%',

    },
    notificationBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 3

    },
    notificationtext: {
        fontSize: 17,
        lineHeight: 26,
        color: '#1A88FF',

    },
    normalText: {
        fontSize: 14,
        lineHeight: 21,
        color: '#000000',

    },
    thirdContent: {
        marginBottom: '5%',

    },
    locationBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 3

    },
    locationText: {
        fontSize: 17,
        lineHeight: 26,
        color: '#1A88FF',

    },
    buttonStyle: {
        
        flex: 1,
        width:'100%'

    }

})

export default PermissionScreen2;