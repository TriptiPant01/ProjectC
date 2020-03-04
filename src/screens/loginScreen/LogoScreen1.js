import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


import { TextInput, TextInputLeftIcon } from '../../commons'
import Images from '../../Images'
import Colors from '../../colors'

handlePress = (navigation) => {
    alert('asdf')
    navigation.navigate('EnterPhoneNumber3')

}

const LogoScreen1 = ({ navigation }) => {
    return (
        <View style={styles.umiWrapper}>
            <TouchableOpacity
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}

                onPress={() => navigation.navigate('PermissionScreen2')}
            >
                <Image source={Images.Logo} style={styles.ImageContainer} />

            </TouchableOpacity>
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