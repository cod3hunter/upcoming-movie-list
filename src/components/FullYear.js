import React from 'react';
import { Text, StyleSheet } from 'react-native';

const FullYear = props => {
  const { dateString } = props;
  return (
    <Text style={styles.text}>
      {(new Date(dateString)).getFullYear() || ''}
    </Text>
  ); 
};

const styles = StyleSheet.create({
  text: { color: 'whitesmoke' }
});

export default FullYear;