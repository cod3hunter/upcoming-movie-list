import React from 'react';
import { Text, StyleSheet } from 'react-native';

const GenresList = ({ genres }) => {

  return (
    <Text style={styles.text}>
      {
        genres && genres.map((val, index) => index > 0 ? `, ${val.name}` : val.name)
      }
    </Text>
  );
}

const styles = StyleSheet.create({
  text: { color: 'whitesmoke', marginLeft: 10, flex: 1 }
});

export default GenresList;