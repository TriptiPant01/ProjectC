import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'


import { CommentBox, Header, CommonStyles, MiddleText, Divider, HomeInnerContainer, CommonButton } from '../../commons'

const list = [
    {
        title: '로그인이 되지 않아요.',

    },
    {
        title: '질문2',
    },
    {
        title: '질문3',
    },
]
const HelpListScreen13 = ({ navigation }) => {
    return <View style={CommonStyles.wrapper}>
        <Header headerText='무엇을 도와드릴까요?' navigation={navigation} />
        {
            <ScrollView>
                {list.map((item, i) => (
                    <TouchableOpacity style={{ marginVertical: 10, paddingHorizontal: 5 }}>
                        <ListItem
                            key={i}
                            title={item.title}
                            // leftIcon={{ name: item.icon }}
                            style={{ borderBottomWidth: 1, marginHorizontal: 20, borderBottomColor: '#00000014' }}
                            chevron={{ size: 24, color: '#00000066' }}
                            titleStyle={{ fontSize: 18, color: '##404040' }}
                            onPress={() => navigation.navigate('HelpDetailScreen14')}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        }
    </View>
}

export default HelpListScreen13