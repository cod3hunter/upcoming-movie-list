import React, { useEffect, useState } from 'react';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { API_KEY } from 'react-native-dotenv';

import { ProductionCompany, BackButton, FullYear, InFullTime, GenresList, SeeMoreButton } from './../components';

import {
  View,
  Text,
  ScrollView,
  Image,
  Linking,
  ImageBackground,
  StyleSheet
} from 'react-native';

const MovieDetailsScreen = ({ navigation }) => {

  let movieId = navigation.getParam('idMovie', null);

  const [movieDetails, setMovieDetails] = useState(null);

  const _getMovieDetails = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`
    const response = await fetch(url, { method: 'GET' });
    console.log(response);
    if (response.status === 200) {
      const data = await response.json();
      setMovieDetails(data);
    }
  };

  const _openURL = async () => {
    const supported = await Linking.canOpenURL(movieDetails.homepage);
    supported && Linking.openURL(movieDetails.homepage);
  }

  const ProductionCompanyList = () => movieDetails && (
    <ScrollView
      horizontal={true}
      style={{ marginTop: 10 }}
      contentContainerStyle={styles.productionCompanyListContent}
      showsHorizontalScrollIndicator={false}
    >
      {
        movieDetails.production_companies.map((company, index) => (
          <ProductionCompany
            key={index}
            companyName={company.name}
            imageURI={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
          />
        ))
      }
    </ScrollView>
  );

  useEffect(() => {
    _getMovieDetails();
  }, [])

  return movieDetails && (
    <>
      <BackButton onPress={() => navigation.goBack()} />
      <ScrollView style={styles.scrollViewContainer}>

        <ImageBackground
          style={styles.imageHeader}
          source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}` }}
        />

        <View style={{ padding: 16 }}>

          <Text style={styles.movieTitle}> {movieDetails.title} </Text>
          <View style={{ flexDirection: 'row', maxWidth: '100%' }}>
            <FullYear dateString={movieDetails.release_date} />
            <InFullTime minutes={movieDetails.runtime} />
            <GenresList genres={movieDetails.genres} />
          </View>

          <Divider style={{ marginVertical: 20 }} />

          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.posterPath}
              source={{ uri: `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` }}
            />
            <View style={styles.descriptionContainer}>
              <Text numberOfLines={movieDetails.homepage ? 6 : 9} style={{ color: 'white' }}>
                {movieDetails.overview || 'No description content'}
              </Text>

              <SeeMoreButton onPress={_openURL} show={movieDetails.homepage ? true : false} />
            </View>
          </View>
          <View style={styles.ratingContainer}>
            <View style={{ alignItems: 'center' }}>
              <Icon name='star' size={20} color='yellow' />
              <Text style={styles.voteRating}>
                {movieDetails.vote_average}
                <Text style={{ fontSize: 17 }}>
                  /10
                </Text>
              </Text>
            </View>
            <View style={styles.voteContainer}>
              <Icon name='user' size={20} color='whitesmoke' />
              <Text style={styles.voteRating}>
                {movieDetails.vote_count}
              </Text>
            </View>
          </View>

          <View style={styles.productionCompanyContainer}>
            <Text style={styles.productionCompanyTitle}>
              Production Companies
            </Text>
            <ProductionCompanyList />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: '#23272A'
  },
  imageHeader: {
    width: '100%',
    height: 120
  },
  productionCompanyListContent: {
    minWidth: '100%',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    width: '90%'
  },
  movieTitle: {
    color: 'white',
    fontSize: 24,
    marginTop: 10
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  },
  voteRating: {
    marginTop: 5,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  productionCompanyTitle: {
    color: 'white',
    fontSize: 24,
    marginTop: 10
  },
  voteContainer: {
    marginLeft: 20,
    alignItems: 'center'
  },
  productionCompanyContainer: {
    marginTop: 50
  },
  posterPath: {
    marginTop: 50
  },
  descriptionContainer: {
    flex: 1,
    marginLeft: 15
  }
});

export default MovieDetailsScreen;