import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../Navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('window').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ route }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

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
            <View style={styles.marginContainer}>
                <Icon
                    name='star-outline'
                    color='grey'
                    size={20}
                />
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
    }
});