import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const MovieCard = ({
  title,
  releaseDate,
  imageURI,
  containerStyle,
  voteAvarage,
  voteCount,
  onPress
}) => {
  return (
    <TouchableOpacity
      style={{ ...styles.cardContainer, ...containerStyle }}
      onPress={onPress}
    >
      <Image style={styles.image} source={{ uri: imageURI }} />

      <View style={{ marginLeft: 10, width: '70%' }}>
        <Text style={styles.titleText} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.yearText}>
          {new Date(releaseDate).getFullYear()}
        </Text>

        <View style={styles.ratingContainer}>
          <Icon name='star' size={10} color='yellow' />
          <Text style={styles.ratingText}>
            {voteAvarage}
          </Text>

          <Icon name='user' size={10} color='lightgray' style={{ marginLeft: 8 }} />
          <Text style={styles.ratingText}>
            {voteCount}
          </Text>
        </View>

        <View style={styles.releaseDateContainer}>
          <Icon name='calendar' size={15} color='#2089DC' style={{ marginLeft: 8 }} />
          <Text style={styles.releaseDateText}>
            {(new Date(Date.parse(releaseDate)).toUTCString()).replace(' 00:00:00 GMT', '')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  yearText: {
    color: 'lightgray'
  },
  cardContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  image: {
    width: 80,
    height: 100
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center'
  },
  ratingText: {
    color: 'white',
    marginLeft: 5
  },
  releaseDateContainer: {
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row'
  },
  releaseDateText: {
    color: '#2089DC',
    marginLeft: 5,
    fontSize: 14
  },
});

export default MovieCard;