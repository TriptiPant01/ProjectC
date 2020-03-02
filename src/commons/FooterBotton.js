import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements';

const ButtonComponent = ({ title, onPress, innerStyle, innerTextStyle, disabled }) => {
    return (
        // <TouchableOpacity onPress={onPress}>
        <Button
            onPress={onPress}
            buttonStyle={{ height: 50, borderRadius: 4, marginVertical: 10, ...innerStyle }}
            title={title || ''}
            titleStyle={{ color: 'white', ...innerTextStyle, fontSize: 17 }}
            disabled={disabled}
        />
        // </TouchableOpacity>
    )
}

export default ButtonComponent