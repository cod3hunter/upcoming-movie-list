import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Divider } from 'react-native-elements';
import { API_KEY } from 'react-native-dotenv'

import { MovieCard } from '../components';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    setLoading(true);
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${nextPage}`;

    try {
      const response = await fetch(url, { method: 'GET' });

      if (response.status === 200) {
        const { results, page, total_pages } = await response.json();

        page === total_pages ? setIsLastPage(true) : setNextPage(page + 1);

        setMovies(oldValue => oldValue.concat(results));
      }
    } catch (error) {

    } finally {
      setLoading(false);
    }
  };

  const onPressMovie = idMovie => {
    navigation.navigate('MovieDetails', { idMovie })
  };

  useEffect(() => {
    getMovies();
  }, []);

  const MovieCardList = ({ item }) => (
    <MovieCard
      containerStyle={{ marginTop: 10 }}
      title={item.title}
      releaseDate={item.release_date}
      voteAvarage={item.vote_average}
      voteCount={item.vote_count}
      imageURI={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
      onPress={() => onPressMovie(item.id)}
    />
  );

  const ListLoading = () => {
    if (!loading) return null;

    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        style={{ padding: 16 }}
        contentContainerStyle={styles.contentStyle}
        renderItem={MovieCardList}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        ListHeaderComponent={() => (<Text style={styles.title}> Upcoming Movies</Text>)}
        onEndReachedThreshold={0.5}
        onEndReached={isLastPage ? null : getMovies}
        ItemSeparatorComponent={() => <Divider />}
        ListFooterComponent={ListLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23272A',
    flex: 1
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'whitesmoke',
    marginBottom: 10
  },
  contentStyle: {
    padding: 16,
    paddingBottom: 24,
  },
  loading: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HomeScreen;