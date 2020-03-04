import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { Header, Divider, HomeInnerContainer, CommonStyles } from '../../commons'
const NotificationScreen = ({ navigation }) => {
    return (
        <View style={[CommonStyles.wrapper]}>
            <Header headerText='알림' navigation={navigation} />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 15, marginVertical: 10 }}>
                    <HomeInnerContainer title='서비스가 시작되었습니다.' />
                    <HomeInnerContainer title='2020년 1월 10일(월) 오후 2시' />
                </View>
                <Divider />
                <View style={{ paddingHorizontal: 15, marginVertical: 10 }}>

                    <HomeInnerContainer title='우미의 새로운 이벤트' />
                    <HomeInnerContainer title='2020년 1월 10일(월) 오후 2시' />
                </View>
                <Divider />
                <View style={{ paddingHorizontal: 15, marginVertical: 10 }}>

                    <HomeInnerContainer title='우미에서 사용할 수 있는 쿠폰이 발급되었습니다.' />
                    <HomeInnerContainer title='2020년 1월 10일(월) 오후 2시' />
                </View>
                <Divider />
            </ScrollView>

        </View>
    )
}

export default NotificationScreen