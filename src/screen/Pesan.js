import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Pesan = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor: '#1A3150',
        height: 70
      }}>
        <View>
          <Text style={{
            fontSize: 16,
            fontWeight: '700',
            marginLeft: 150,
            marginTop: 25,
            color: '#fff'
          }}>Messager</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.banyak} onPress={() => navigation.navigate('TulisPesan')}>
          <Image source={require('../assets/image.png')} style={styles.picture} />
          <View>
            <Text style={{
              fontSize: 16,
              fontWeight: '700',
              marginLeft: 20,
              marginTop: 28,
              color: '#000'
            }}>RS Kalimanjaro</Text>
            <Text style={{
              width: 193,
              height: 36,
              fontSize: 12,
              fontWeight: '400',
              marginLeft: 20,
              marginTop: 2,
            }}>Hallo kak, Kamu Dimana? Sudah Bisa Ke Klinik</Text>
          </View>
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 38,
            marginTop: 28
          }}>1 hr</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.banyak} onPress={() => navigation.navigate('TulisPesan')}>
          <Image source={require('../assets/image.png')} style={styles.picture} />
          <View>
            <Text style={{
              fontSize: 16,
              fontWeight: '700',
              marginLeft: 20,
              marginTop: 28,
              color: '#000'
            }}>RS Kalimanjaro</Text>
            <Text style={{
              width: 193,
              height: 36,
              fontSize: 12,
              fontWeight: '400',
              marginLeft: 20,
              marginTop: 2,
            }}>Hallo kak, Kamu Dimana? Sudah Bisa Ke Klinik</Text>
          </View>
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 38,
            marginTop: 28
          }}>1 hr</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.banyak} onPress={() => navigation.navigate('TulisPesan')}>
          <Image source={require('../assets/image.png')} style={styles.picture} />
          <View>
            <Text style={{
              fontSize: 16,
              fontWeight: '700',
              marginLeft: 20,
              marginTop: 28,
              color: '#000'
            }}>RS Kalimanjaro</Text>
            <Text style={{
              width: 193,
              height: 36,
              fontSize: 12,
              fontWeight: '400',
              marginLeft: 20,
              marginTop: 2,
            }}>Hallo kak, Kamu Dimana? Sudah Bisa Ke Klinik</Text>
          </View>
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 38,
            marginTop: 28
          }}>1 hr</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.banyak} onPress={() => navigation.navigate('Tulispesan')}>
          <Image source={require('../assets/image.png')} style={styles.picture} />
          <View>
            <Text style={{
              fontSize: 16,
              fontWeight: '700',
              marginLeft: 20,
              marginTop: 28,
              color: '#000'
            }}>RS Kalimanjaro</Text>
            <Text style={{
              width: 193,
              height: 36,
              fontSize: 12,
              fontWeight: '400',
              marginLeft: 20,
              marginTop: 2,
            }}>Hallo kak, Kamu Dimana? Sudah Bisa Ke Klinik</Text>
          </View>
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 38,
            marginTop: 28
          }}>1 hr</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  banyak: {
    flexDirection: 'row',
  },
  picture: {
    width: 57,
    height: 57,
    borderRadius: 30,
    marginLeft: 18,
    marginTop: 28
  },
})
export default Pesan