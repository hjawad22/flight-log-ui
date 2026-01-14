import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function Header() {
  return (
    <ImageBackground
      source={require('../assets/hero-img.png')}
      style={styles.imageBackground}
      imageStyle={{ transform: [{ scaleX: -1 }] }} 
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.headerText}>FLIGHT LOG</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 295, 
    justifyContent: 'center'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(13, 3, 42, 0.09)', 
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#1D275F',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 100,
    marginLeft: 28
  }
});

