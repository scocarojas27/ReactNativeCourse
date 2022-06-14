import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../Navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('window').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ route, navigation }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    const { isLoading, fullMovie, cast } = useMovieDetails(movie.id)

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={styles.posterImage}
                    />
                </View>
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subtitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            {
                isLoading
                    ? <ActivityIndicator size={35} color='grey' style={{ marginTop: 20 }} />
                    : <MovieDetails fullMovie={fullMovie!} cast={cast} />
            }
            <View style={styles.backButton}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name='arrow-back-outline'
                        color='black'
                        size={60}
                    />
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,

        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        color: 'grey',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 11,
        top: 30,
        left: 5
    }
});