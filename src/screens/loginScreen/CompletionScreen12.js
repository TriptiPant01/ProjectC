import React from 'react'
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'
import { CommonButton, CommonStyles } from '../../commons'

import Images from '../../Images'
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
                    }}>가입이 완료됐어요.</Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: '#404040',
                        marginVertical: 10
                    }}>우미로 편리하게 예약해보세요.</Text>
            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                <CommonButton title='둘러보기' innerStyle={{ backgroundColor: '#43BBF0' }} />
            </View>
        </View >
    )
}

export default CompletionScreen12