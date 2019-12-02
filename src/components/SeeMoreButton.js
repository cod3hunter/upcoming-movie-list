import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SeeMoreButton = props => {
  const {show, onPress} = props;
  return (
    <TouchableOpacity 
      style={{...styles.container, display: show ? 'flex' : 'none'}}
      onPress={onPress}
    >
      <Text style={{ color: 'white' }}>
        See more...
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#4285F4', 
    padding: 8, 
    alignItems: 'center', 
    marginTop: 10, 
    borderRadius: 5, 
    elevation: 1, 
  }
});

export default SeeMoreButton;