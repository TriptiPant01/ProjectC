import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'

import { CommentBox, Header, CommonStyles, MiddleText, Divider, HomeInnerContainer, CommonButton } from '../../commons'

const list = [
    {
        title: '질문1',

    },
    {
        title: '질문1',
    },
    {
        title: '질문1',
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
                            chevron={{ size: 30, color: '#666666' }}
                            titleStyle={{ fontSize: 18, color: '#00000099' }}
                            onPress={() => navigation.navigate('HelpDetailScreen14')}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        }
    </View>
}

export default HelpListScreen13