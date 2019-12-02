import React from 'react';
import { Text, StyleSheet } from 'react-native';

const InFullTime = props => {
  const {minutes} = props;
  if (!minutes) return '';
  const date = new Date(0, 0, 0);
  date.setMinutes(minutes); 

  const inFullTime = `${date.getHours()}h ${date.getMinutes()}min`;
  return (
    <Text style={styles.text}>
      {inFullTime}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: { color: 'whitesmoke', marginLeft: 10 }
});

export default InFullTime;