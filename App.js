import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    
    /*<View style={styles.container}>*/

<ImageBackground 
style ={styles.background}
source={require('../storelogin/assets/background.jpg')}>

  <View style ={styles.logocontainer}>
  <Image 
  style={styles.logo}
  source={require('../storelogin/assets/icon.png')}></Image>
  <Text>Sell What You Don't Need</Text>
  </View>

<View style={styles.loginButton}
>
</View>
<View style={styles.registerButton}>
</View>
</ImageBackground>

     /* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>*/
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    position: "absolute",
    top: 70,
  },
  logocontainer: {
   
    position: "absolute",
    top: 70,
    alignItems: "center",
    justifyContent: "flex-end",

  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "blue"

    },
    registerButton: {
      width: "100%",
      height: 70,
      backgroundColor: "white"

    },
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
