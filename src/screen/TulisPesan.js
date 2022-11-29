import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

const Tulispesan = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: '#1A3150',
                height: 70
            }}>
                <TouchableOpacity style={styles.atas} onPress={() => navigation.navigate('Pesan')}>
                    <Icon name='arrow-left' color={'#fff'} size={15} 
                        style={{
                            marginLeft: 18,
                            marginTop: 25
                        }}
                    />
                    <View>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '700',
                                marginLeft: 13,
                                marginTop: 24,
                                color: '#fff'
                            }} onPress={() => navigation.goBack()}>Kembali</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{
                width: 345,
                height: 41,
                marginHorizontal: 24,
                marginTop: 580,
                borderRadius: 4,
                backgroundColor: '#F1F1F1'
            }}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TextInput
                        style={{
                            fontSize: 12,
                            fontWeight: '400',
                            marginLeft: 16,
                            color: '#7D7D7D'
                        }}
                        placeholder='Type your message here'
                        placeholderTextColor={'#CACACA'}
                    />
                    <Icon
                        style={{
                            marginRight: 23
                        }} onPress={() => navigation.navigate('Pesan')}
                        size={20}
                        color={'#9F9F9F'}
                        name='send'
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    atas: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})
export default Tulispesan