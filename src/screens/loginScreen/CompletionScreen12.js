import React from 'react'
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'
import { CommonButton, CommonStyles } from '../../commons'

import Images from '../../../images'
const { width, height } = Dimensions.get('screen')

const CompletionScreen12 = ({ navigation }) => {
    return (
        <View style={CommonStyles.wrapper}
        >
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1
            }} >
                <Image
                    source={Images.ConfirmBanner}
                    style={{
                        width: width,
                        resizeMode: 'contain',
                        marginBottom: 20
                    }} />

                <Text
                    style={{
                        fontSize: 30,
                        color: "#2A8CFF"
                    }}>서비스가 완료되었어요.</Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: '#404040',
                        marginVertical: 10
                    }}>대금은 3~4일(영업일)내로 입금됩니다.</Text>
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <CommonButton title='새로운 일자리 찾기' />
            </View>
        </View >
    )
}

export default CompletionScreen12