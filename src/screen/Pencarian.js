import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import Picture from '../assets/rs.jpg'

const Dashboard = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.atas}>
                <TouchableOpacity style={styles.icon}>
                    <Icon name='arrow-left' color={'#fff'} size={20} onPress={() => navigation.goBack()}
                        style={{
                            marginTop: 25,
                            marginLeft: 31,
                        }}
                    />
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 16,
                            marginTop: 22,
                            marginLeft: 13
                        }} onPress={() => navigation.goBack()}>Sebelumnya</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: 393,
                    height: 45,
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}>
                    <Icon1 style={{
                        marginLeft: 16,
                    }} name='location-pin' color={'#875C25'} size={27} />
                    <Text
                        style={{
                            color: '#000',
                            fontSize: 16,
                            fontWeight: '500',
                            marginLeft: 19,
                        }}>Jalan Sriwijaya Kabil Batam </Text>
                    <Icon style={{
                        marginLeft: 70
                    }} name='pencil' color={'#A7A7A7'} size={27} />
                </View>

                

                <View style={{
                    position: 'relative',
                    justifyContent: 'center',
                    marginTop: 16
                }}>
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
                        placeholder='Cari Klinik terdekat'
                        placeholderTextColor={'#CACACA'}
                    />
                    <Icon1
                        style={{
                            position: 'absolute',
                            left: 17,
                            Bottom: 20
                        }}
                        size={22}
                        color={'#CACACA'}
                        name='search'
                    />
                </View>
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
                        Klinik Hewan </Text>
                    <Text style={{
                        fontSize: 16,
                        color: '#1A3150',
                        right: 170,
                        marginTop: 45,
                        fontWeight: 'bold'
                    }}>
                        Buka: 09.00 - 20.00 </Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text style={styles.textbutton}
                            onPress={() => navigation.navigate('Detail')}>Book Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.banyak1}>
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
                        Klinik Hewan </Text>
                    <Text style={{
                        fontSize: 16,
                        color: '#1A3150',
                        right: 170,
                        marginTop: 45,
                        fontWeight: 'bold'
                    }}>
                        Buka: 09.00 - 20.00 </Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text style={styles.textbutton}
                            onPress={() => navigation.navigate('Detail')}>Book Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.banyak1}>
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
                        Klinik Hewan </Text>
                    <Text style={{
                        fontSize: 16,
                        color: '#1A3150',
                        right: 170,
                        marginTop: 45,
                        fontWeight: 'bold'
                    }}>
                        Buka: 09.00 - 20.00 </Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text style={styles.textbutton}
                            onPress={() => navigation.navigate('Detail')}>Book Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.banyak1}>
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
                        Klinik Hewan </Text>
                    <Text style={{
                        fontSize: 16,
                        color: '#1A3150',
                        right: 170,
                        marginTop: 45,
                        fontWeight: 'bold'
                    }}>
                        Buka: 09.00 - 20.00 </Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text style={styles.textbutton}
                            onPress={() => navigation.navigate('Detail')}>Book Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.banyak1}>
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
                        Klinik Hewan </Text>
                    <Text style={{
                        fontSize: 16,
                        color: '#1A3150',
                        right: 170,
                        marginTop: 45,
                        fontWeight: 'bold'
                    }}>
                        Buka: 09.00 - 20.00 </Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text style={styles.textbutton}
                            onPress={() => navigation.navigate('Detail')}>Book Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.banyak1}>
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
                        Klinik Hewan </Text>
                    <Text style={{
                        fontSize: 16,
                        color: '#1A3150',
                        right: 170,
                        marginTop: 45,
                        fontWeight: 'bold'
                    }}>
                        Buka: 09.00 - 20.00 </Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text style={styles.textbutton}
                            onPress={() => navigation.navigate('Detail')}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <Text></Text>
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
    input: {
        width: 350,
        height: 40,
        backgroundColor: '#F1F1F1',
        borderRadius: 10,
        color: 'white',
        paddingHorizontal: 20,
        marginBottom: 20,
        elevation: 2
    },
    picture: {
        width: 124,
        height: 123,
        resizeMode: 'cover',
    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center'
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
        elevation: 2,
        top: 40
    },
    banyak1: {
        flexDirection: 'row',
        marginStart: 15,
        marginEnd: 10,
        borderColor: '#fff',
        borderRadius: 1,
        elevation: 3,
        top: 40
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
    textbutton: {
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
export default Dashboard