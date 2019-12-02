import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductionCompany = ({ imageURI, companyName }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode='center'
        source={{ uri: imageURI }}
      />

      <Text style={styles.companyName}>
        {companyName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '45%',
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 15,
    marginTop: 8,
  },
  image: {
    height: 100,
    width: 80,
    flex: 1,
  },
  companyName: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center'
  }
});

export default ProductionCompany;