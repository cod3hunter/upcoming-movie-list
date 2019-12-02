import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const BackButton = props => {
  const { onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}>
      <Icon size={18} name='arrow-left' />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    borderRadius: 20,
    elevation: 2,
    zIndex: 10,
    height: 40,
    width: 40,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 16,
    top: 16
  }
});

export default BackButton;