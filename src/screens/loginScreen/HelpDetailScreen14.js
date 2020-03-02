import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Header, CommonStyles, CommonButton } from '../../commons'

import Colors from '../colors'

const { width } = Dimensions.get('screen')

const HelpDetailScreen14 = ({ navigation }) => {
    return (
        <View style={CommonStyles.wrapper}>
            <Header headerText='질문 1' navigation={navigation} />
            <View style={styles.innerContainer}>
                <View style={{ flex: 3 }}>
                    <Text style={{ fontSize: 16, color: '#707070' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', }}>
                    <Text style={{ fontSize: 17, color: '#021F2C' }}>우미 고객센터</Text>
                    <Text style={{ fontSize: 17, color: '#021F2C', marginBottom: 10 }}>오전 10시 - 오후 8시</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                    <CommonButton title='02-392-0700' innerStyle={{ backgroundColor: Colors.appColor, borderColor: Colors.activeButton, borderWidth: 2, width: width / 2.4 }} innerTextStyle={{ color: Colors.activeButton }} />
                    <CommonButton title='카카오 상담톡' innerStyle={{ backgroundColor: Colors.YellowColor, width: width / 2.4 }} innerTextStyle={{ color: '#021F2C' }} />
                </View>

            </View>
        </View>
    )
}

export default HelpDetailScreen14
const styles = StyleSheet.create({
    wrapper: {

    },
    innerContainer: {
        marginHorizontal: 20,
        marginVertical: 20,
        flex: 1,
        justifyContent: 'space-between',
        // alignItems: 'center'
    }
})