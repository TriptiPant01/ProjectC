import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Input } from 'react-native-elements';

import { Header, TextInput, TextInputLeftIcon, CommonButton, CommonStyles } from '../commons'



const DrawerScreen = ({ headerTitle, navigation }) => {

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>

                <Text>dskjhfsdfhd</Text>
                <Text>dskjhfsdfhd</Text>
            </View>
            <View style={styles.content}>

            </View>


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
    },
    header: {
        flex: 1,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20

    },
    content: {
        flex: 5,
        backgroundColor: 'red'
    }
})

