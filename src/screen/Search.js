import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Picture from '../assets/rs.jpg'

const Search = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.atas}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Icon name='arrow-back' color={'#fff'} size={16}
                        style={{
                            marginTop: 25,
                            marginLeft: 31,
                        }}
                    onPress={() => navigation.goBack()} />
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 16,
                            marginTop: 22,
                            marginLeft: 13
                        }} onPress={() => navigation.goBack()}>Sebelumnya</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <Text></Text>
                <TouchableOpacity
                    style={{
                        position: 'relative',
                        marginVertical: 3,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate('Pencarian')}
                >
                    <TextInput
                        style={{
                            backgroundColor: '#F1F1F1',
                            width: 370,
                            height: 40,
                            left: 12,
                            padding: 1.5,
                            borderRadius: 2,
                            color: '#000',
                            fontSize: 17,
                            paddingLeft: 30
                        }}
                        onPress={() => navigation.navigate('Pencarian')}
                        placeholder='Cari Klinik terdekat'
                        placeholderTextColor={'#CACACA'}
                    />
                    <Icon
                        style={{
                            position: 'absolute',
                            left: 17
                        }}
                        onPress={() => navigation.navigate('Pencarian')}
                        size={22}
                        color={'#CACACA'}
                        name='search'
                    />
                </TouchableOpacity>
                <Text></Text>
                <View style={styles.banyak}>
                    <Image source={Picture} style={styles.picture} />
                    <Text style={{
                        fontSize: 15,
                        color: '#875C25',
                        marginStart: 5,
                        marginTop: 5
                    }}>
                        Batam </Text>
                    <Text style={{
                        fontSize: 20,
                        color: '#000',
                        right: 48,
                        marginTop: 22,
                        fontWeight: 'bold'
                    }}>
                        Klinik Kehewanan </Text>
                    <Text style={{
                        fontSize: 16,
                        color: '#1A3150',
                        right: 212,
                        marginTop: 45,
                        fontWeight: 'bold'
                    }}>
                        Buka: 09.00 - 20.00 </Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text style={styles.textButton}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <Text></Text>
                <View style={styles.banyak}>
                    <Image source={Picture} style={styles.picture} />
                    <Text style={{
                        fontSize: 15,
                        color: '#875C25',
                        marginStart: 5,
                        marginTop: 5
                    }}>
                        Batam </Text>
                    <Text style={{
                        fontSize: 20,
                        color: '#000',
                        right: 48,
                        marginTop: 22,
                        fontWeight: 'bold'
                    }}>
                        Klinik Kehewanan </Text>
                    <Text style={{
                        fontSize: 16,
                        color: '#1A3150',
                        right: 212,
                        marginTop: 45,
                        fontWeight: 'bold'
                    }}>
                        Buka: 09.00 - 20.00 </Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text style={styles.textButton}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <Text></Text>
                <View style={styles.banyak}>
                    <Image source={Picture} style={styles.picture} />
                    <Text style={{
                        fontSize: 15,
                        color: '#875C25',
                        marginStart: 5,
                        marginTop: 5
                    }}>
                        Batam </Text>
                    <Text style={{
                        fontSize: 20,
                        color: '#000',
                        right: 48,
                        marginTop: 22,
                        fontWeight: 'bold'
                    }}>
                        Klinik Kehewanan </Text>
                    <Text style={{
                        fontSize: 16,
                        color: '#1A3150',
                        right: 212,
                        marginTop: 45,
                        fontWeight: 'bold'
                    }}>
                        Buka: 09.00 - 20.00 </Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text style={styles.textButton}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <Text></Text>
                <View style={styles.banyak}>
                    <Image source={Picture} style={styles.picture} />
                    <Text style={{
                        fontSize: 15,
                        color: '#875C25',
                        marginStart: 5,
                        marginTop: 5
                    }}>
                        Batam </Text>
                    <Text style={{
                        fontSize: 20,
                        color: '#000',
                        right: 48,
                        marginTop: 22,
                        fontWeight: 'bold'
                    }}>
                        Klinik Kehewanan </Text>
                    <Text style={{
                        fontSize: 16,
                        color: '#1A3150',
                        right: 212,
                        marginTop: 45,
                        fontWeight: 'bold'
                    }}>
                        Buka: 09.00 - 20.00 </Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text style={styles.textButton}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <Text></Text>
                <View style={styles.banyak}>
                    <Image source={Picture} style={styles.picture} />
                    <Text style={{
                        fontSize: 15,
                        color: '#875C25',
                        marginStart: 5,
                        marginTop: 5
                    }}>
                        Batam </Text>
                    <Text style={{
                        fontSize: 20,
                        color: '#000',
                        right: 48,
                        marginTop: 22,
                        fontWeight: 'bold'
                    }}>
                        Klinik Kehewanan </Text>
                    <Text style={{
                        fontSize: 16,
                        color: '#1A3150',
                        right: 212,
                        marginTop: 45,
                        fontWeight: 'bold'
                    }}>
                        Buka: 09.00 - 20.00 </Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text style={styles.textButton}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <Text></Text>
                <View style={styles.banyak}>
                    <Image source={Picture} style={styles.picture} />
                    <Text style={{
                        fontSize: 15,
                        color: '#875C25',
                        marginStart: 5,
                        marginTop: 5
                    }}>
                        Batam </Text>
                    <Text style={{
                        fontSize: 20,
                        color: '#000',
                        right: 48,
                        marginTop: 22,
                        fontWeight: 'bold'
                    }}>
                        Klinik Kehewanan </Text>
                    <Text style={{
                        fontSize: 16,
                        color: '#1A3150',
                        right: 212,
                        marginTop: 45,
                        fontWeight: 'bold'
                    }}>
                        Buka: 09.00 - 20.00 </Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text style={styles.textButton}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <Text></Text>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    picture: {
        width: 124,
        height: 123,
        resizeMode: 'cover',
    },
    atas: {
        backgroundColor: '#1A3150',
        height: 70
    },
    banyak: {
        flexDirection: 'row',
        marginStart: 15,
        marginEnd: 10,
        borderColor: '#fff',
        borderRadius: 1,
        elevation: 3,
    },
    button: {
        position: 'absolute',
        width: 230,
        height: 40,
        left: 130,
        top: 70,
        backgroundColor: '#FDCB5A',
        borderRadius: 2,

    },
    textButton: {
        position: 'absolute',
        height: 18,
        top: 10,
        left: 84,
        fontFamily: 'Roboto',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        color: '#000000'
    }
})
export default Search