import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Input } from 'react-native-elements';

import { Header, TextInput, TextInputLeftIcon, CommonButton, CommonStyles } from '../commons'



const DrawerScreen = ({ headerTitle, navigation }) => {

    return (
        <View style={styles.wrapper}>
            <Header headerText='전화번호로 간편하게 시작해요.' navigation={navigation} />

        </View>
    )
}
export default DrawerScreen;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colors.appColor,
        flex: 1,
        alignContent: 'flex-start',

    },
    buttonStyle: {
        margin: 20
    }
})

