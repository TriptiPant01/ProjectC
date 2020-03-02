import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


import { TextInput, TextInputLeftIcon } from '../../commons'
import Images from '../../../images'
import Colors from '../../colors'

handlePress = (navigation) => {
    alert('asdf')
    navigation.navigate('EnterPhoneNumber3')

}

const LogoScreen1 = ({ navigation }) => {
    return (
        <View style={styles.umiWrapper}>
            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Images.Logo} style={styles.ImageContainer} />
            </View>
        </View>
    )
}

export default LogoScreen1

const styles = StyleSheet.create({
    umiWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.appColor
    },
    ImageContainer: {
        height: 147,
        width: 112
    }
})