import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class MusicApp extends Component {

  render() {
    return (
      <View style={styles.body}>
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image source={require('../assets/bg.jpg')}style={styles.image}/>
        </View>

        <View style={{ height: height / 3, justifyContent: 'center' }}>
          <View style={styles.buttonEntrar}>
            <Text style={styles.entrarTexto}>ENTRAR</Text>
          </View>

          <View style={styles.buttonFace}>
            <Text style={styles.facebook}>ENTRE COM O FACEBOOK</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default MusicApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonEntrar: {
    backgroundColor: 'white',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  },
  buttonFace: {
    backgroundColor: '#2E71DC',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end'
  },
  image: {
    flex: 1, 
    height: null,
    width: null
  },
  facebook: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  entrarTexto: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});