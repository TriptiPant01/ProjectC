import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Header, Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import Icons from 'react-native-vector-icons/Ionicons';

import Images from '../images'
import Colors from '../colors'

const MyCustomLeftComponent = ({ navigation }) => {
    return <TouchableOpacity
        style={{ width: 40 }}
        onPress={() => navigation.goBack()}
    >
        <Icons name="md-arrow-back" size={30} color={Colors.backColor} />
    </TouchableOpacity>
}
const HeaderList = ({ headerText, backHidden, navigation, bellIcon }) => {
    const BadgedIcon = withBadge(1)(Icon)

    return (
        <View style={styles.headerWrapper}>
            {
                backHidden ? <Header
                    containerStyle={{
                        backgroundColor: Colors.appColor,
                        justifyContent: 'space-around',

                    }}

                /> :
                    <Header
                        leftComponent={<MyCustomLeftComponent navigation={navigation} />}
                        containerStyle={{
                            backgroundColor: Colors.appColor,
                            justifyContent: 'space-around',
                        }}
                    />
            }

            <View style={styles.headerTextDesign}>
                <Text style={styles.headerTextStyle}>{headerText || ''}</Text>
                {
                    bellIcon && <TouchableOpacity style={{ alignSelf: 'flex-end', width: 30 }} onPress={() => navigation.navigate('NotificationScreen19')}>
                        <View style={{ position: 'absolute', backgroundColor: 'blue', width: 70, right: 10, height: 0, top: 1 }}>
                            <BadgedIcon

                            />
                        </View>
                        {/* <BadgedIcon type="ionicon" name="ios-chatbubbles" /> */}
                        <Image source={Images.bellIcon} style={{
                            height: 30, resizeMode: 'contain', width: 30
                        }} />


                    </TouchableOpacity>
                }

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerWrapper: {
        paddingHorizontal: 3,
        backgroundColor: Colors.appColor,
    },
    headerTextDesign: {
        paddingHorizontal: 15,
        backgroundColor: Colors.appColor,
        borderWidth: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    headerTextStyle: {
        fontSize: 24,
        color: Colors.inputText
    }
})

export default HeaderList