import React, { useEffect, useRef, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

    const [bgColor, setBgColor] = useState('grey')
    const isMounted = useRef(true)
    const navigation = useNavigation()

    useEffect(() => {
        if (!isMounted) return;

        getBgColor()

        return () => {
            isMounted.current = false
        }
    }, [])

    const getBgColor = async () => {
        const colors = await ImageColors.getColors(pokemon.picture, { fallback: 'grey' })
        switch (colors.platform) {
            case 'android':
                setBgColor(colors.dominant || 'grey')
                break
            case 'ios':
                setBgColor(colors.background || 'grey')
                break
            default:
                setBgColor(bgColor)
        }
    }

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('PokemonScreen' as never, { simplePokemon: pokemon, color: bgColor } as never)}
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: bgColor
            }}>
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>
                <View
                    style={styles.pokebolaContainer}
                >
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>
                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        // backgroundColor: 'grey',
        height: 120,
        width: 150,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,

    },
    pokemonImage: {
        width: 90,
        height: 90,
        position: 'absolute',
        bottom: -5,
        right: -5,
    },
    pokebolaContainer: {
        // backgroundColor: 'blue',
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.5,
        overflow: 'hidden'
    }
});
