import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window')

const Dashboard = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/Rectangle21.png')}
                    style={styles.background1}
                />
                <Image source={require('../assets/Ellipse1.png')}
                    style={styles.background}
                />
                <Image source={require('../assets/Logo.png')}
                    resizeMode='center'
                    style={styles.logo}
                />
                <Text style={styles.text}>VET</Text>
                <TouchableOpacity>
                    <Icon style={styles.icon} name='email' size={20} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/Ellipse3.png')}
                        style={{
                            width: 20, height: 20, borderRadius: 10, margin: 5, top: 1, left: 340
                        }}
                    />
                    <Text style={{
                        position: 'absolute', fontSize: 14, left: 350, top: 5, fontWeight: 'bold', color: '#000'
                    }}
                        onPress={() => navigation.navigate('Appointment')}>A</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.wrapper}>
                <Swiper
                    showsButtons={false}
                    loop={true}
                    autoplay={true}
                    autoplayTimeout={3.5}
                    dotColor={'#C2CDDB'}
                    activeDotColor={'#FDCB5A'}
                >
                    <Image source={require('../assets/rs.jpg')}
                        style={styles.slide}
                    />
                    <Image source={require('../assets/rs.jpg')}
                        resizeMode='stretch'
                        style={styles.slide}
                    />
                    <Image source={require('../assets/rs.jpg')}
                        resizeMode='stretch'
                        style={styles.slide}
                    />
                    <Image source={require('../assets/rs.jpg')}
                        resizeMode='stretch'
                        style={styles.slide}
                    />
                </Swiper>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Image source={require('../assets/kucing.png')}
                        style={{ width: 60, height: 60, borderRadius: 30, marginHorizontal: 10, borderWidth: 1, borderColor: '#CACACA', elevation: 5 }}
                    />
                    <Text style={{ alignSelf: 'center' }}>Kucing</Text>
                </View>
                <View>
                    <Image source={require('../assets/anjing.jpg')}
                        style={{ width: 60, height: 60, borderRadius: 30, marginHorizontal: 10, borderWidth: 1, borderColor: '#CACACA', elevation: 5 }}
                    />
                    <Text style={{ alignSelf: 'center' }}>Anjing</Text>
                </View>
                <View>
                    <Image source={require('../assets/hamster.png')}
                        style={{ width: 60, height: 60, borderRadius: 30, marginHorizontal: 10, borderWidth: 1, borderColor: '#CACACA', elevation: 5 }}
                    />
                    <Text style={{ alignSelf: 'center' }}>Hamster</Text>
                </View>
                <View>
                    <Image source={require('../assets/kelinci.png')}
                        style={{ width: 60, height: 60, borderRadius: 30, marginHorizontal: 10, borderWidth: 1, borderColor: '#CACACA', elevation: 5 }}
                    />
                    <Text style={{ alignSelf: 'center' }}>Kelinci</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 }}>
                <Text style={{ left: 25, fontWeight: 'bold', color: '#000', fontSize: 18 }}>Konsultasi Klinik</Text>
                <Text style={{ right: 25 }}
                    onPress={() => navigation.navigate('Searchbar')}>Lihat lainnya</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: 70 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.textButton}>Batam</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.textButton}>Jakarta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.textButton}>Riau</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
                <Text></Text>
                <View style={styles.banyak}>
                    <Image source={require('../assets/rs.jpg')} style={styles.picture} />
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
                    <TouchableOpacity style={styles.button2}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text style={styles.textButton2}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <Text></Text>
                <View style={styles.banyak}>
                    <Image source={require('../assets/rs.jpg')} style={styles.picture} />
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
                    <TouchableOpacity style={styles.button2}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text style={styles.textButton2}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <Text></Text>
                <View style={styles.banyak}>
                    <Image source={require('../assets/rs.jpg')} style={styles.picture} />
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
                    <TouchableOpacity style={styles.button2}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text style={styles.textButton2}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <Text></Text>
                <View style={styles.banyak}>
                    <Image source={require('../assets/rs.jpg')} style={styles.picture} />
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
                    <TouchableOpacity style={styles.button2}
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text style={styles.textButton2}>Book Now</Text>
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
        backgroundColor: '#fff'
    },
    background1: {
        flex: 1,
        position: 'absolute',
        height: 100
    },
    background: {
        flex: 1,
        position: 'absolute',
        width: 400,
        height: 160,
    },
    logo: {
        width: 32.46,
        height: 13.68,
        left: 26.5,
        top: 30,
        position: 'absolute',
    },
    text: {
        position: 'absolute',
        width: 55,
        height: 36,
        left: 70,
        top: 20,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 36,
        letterSpacing: 3,
        textAlign: 'left',
        color: '#FDCB5A',
    },
    icon: {
        height: 23,
        width: 22,
        top: 28,
        left: 310,
        color: '#FFFFFF'
    },
    wrapper: {
        height: 230
    },
    slide: {
        position: 'absolute',
        height: 130,
        width: 300,
        top: 50,
        left: 50,
        borderRadius: 5
    },
    button: {
        flexDirection: 'row',
        width: 105,
        height: 29,
        left: 17,
        marginTop: 10,
        marginHorizontal: 7,
        backgroundColor: '#FDCB5A',
        borderRadius: 3,
        borderWidth: 2,
        borderColor: '#FDCB5A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button1: {
        flexDirection: 'row',
        width: 105,
        height: 29,
        left: 17,
        marginTop: 10,
        marginHorizontal: 7,
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        borderWidth: 2,
        borderColor: '#FDCB5A',
        activeDotColor: '#FDCB5A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: '#1A3150',
        fontSize: 12,
    },
    picture: {
        width: 124,
        height: 123,
        resizeMode: 'cover',
    },
    banyak: {
        flexDirection: 'row',
        marginStart: 25,
        marginEnd: 25,
        borderColor: '#fff',
        borderRadius: 1,
        elevation: 3,
    },
    button2: {
        position: 'absolute',
        width: 195,
        height: 40,
        left: 130,
        top: 70,
        backgroundColor: '#FDCB5A',
        borderRadius: 2,
    },
    textButton2: {
        position: 'absolute',
        height: 18,
        top: 10,
        left: 63,
        fontFamily: 'Roboto',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        color: '#000000'
    }
})

export default Dashboard