import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'

const { width } = Dimensions.get('screen')
const HomeInnerContainer = ({ innerImageStyle, smallIcon, title, innerStyle, onPress }) => {
    return (
        <TouchableOpacity style={styles.wrapper} onPress={onPress}>
            {smallIcon && <Image source={smallIcon} style={{ resizeMode: 'contain', marginRight: 5, ...innerImageStyle }} />}
            <Text style={{ ...styles.textStyleDesign, ...innerStyle }}>{title || ''}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        width: width / 1.5,
        flex: 1,
        marginVertical: 10,

        alignItems: 'center'
    },
    textStyleDesign: {
        fontSize: 16
    }
})

export default HomeInnerContainer