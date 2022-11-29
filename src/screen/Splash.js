import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/Logo.png'

const Splash = ({ navigation }) => {
    setTimeout(() => {
        navigation.replace('WelcomeScreen');
    }, 3000);
    return (
        <View style={styles.container}>
            <View style={styles.atas}>
            <Image source={Logo} style={styles.logo} />
            <Text style={{
                color: '#FDCB5A',
                fontSize: 30,
                marginTop: 10,
                fontWeight: 'bold',
            }}>VET</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A3150',
        justifyContent: 'center',
        alignItems: 'center',
    },
    atas: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 193,
        height: 77,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default Splash