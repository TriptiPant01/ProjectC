import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import { Header, TextInput, TextInputLeftIcon, CommonButton, CommonStyles, MiddleText } from '../../commons'
import Images from '../../Images'
import Colors from '../../colors'
import CodeInput from 'react-native-confirmation-code-input';


const VerificationCodeScreen5 = ({ headerTitle, navigation }) => {
    const [input, setInput] = useState('');
    const [inputState, setInputState] = useState(false);


    return (
        <View style={styles.wrapper}>
            <Header headerText='6자리 인증번호를 입력해주세요.' navigation={navigation} />

            <View style={styles.mainWrapper}>
                <View style={{ flex: 1 }}>
                    <View style={styles.topTextWrapper}>
                        <MiddleText title='01055048441번으로 코드를 전송했어요.' />
                        <MiddleText title='수신된 코드를 입력하세요' />
                    </View>

                    <View style={styles.inputWrapper}>
                        <View style={styles.codeInputWrap}>
                            <CodeInput
                                // ref="codeInputRef1"
                                className={'border-b'}
                                compareWithCode='606016'
                                space={15}
                                size={40}
                                codeLength={6}
                                inputPosition='center'
                                onFulfill={() => navigation.navigate('EnterNameScreen9')}
                                activeColor="#43BBF0"
                                inactiveColor="#43BBF0"
                                keyboardType="numeric"
                                codeInputStyle={{ color: 'black', fontSize: 40, lineHeight: 48 }}
                                selectionColor='black'
                            />

                        </View>

                        <View style={styles.bottomTextWrap}>
                            <Text style={styles.bottomText}>재전송</Text>
                            <Text style={styles.bottomText}>2분 59초</Text>


                        </View>


                    </View>

                </View>


            </View>




        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colors.appColor,
        flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        // alignSelf: 'flex-start',
        alignContent: 'flex-start',

        // backgroundColor: "red"
    },
    buttonStyle: {
        margin: 20
    },
    mainWrapper: {
        flex: 1,
        // backgroundColor:'yellow',
        margin: 20
    },
    topTextWrapper: {
        flex: 1 / 2,
        // backgroundColor:'green'
    },
    inputWrapper: {
        flex: 4,
        // backgroundColor:'green',
        flexDirection: 'column'


    },
    codeInputWrap: {
        flex: 2,
        // backgroundColor:'yellow',
        marginHorizontal: 30
    },
    bottomTextWrap: {
        flex: 3,
        // backgroundColor:'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30
    },
    bottomText: {
        color: '#999999'
    }
})

export default VerificationCodeScreen5;