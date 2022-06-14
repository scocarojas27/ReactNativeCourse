import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { FullMovie } from '../interfaces/movieInterface';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
    fullMovie: FullMovie;
    cast: Cast[];
}

export const MovieDetails = ({ fullMovie, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name='star-outline'
                        color='grey'
                        size={16}
                    />
                    <Text style={{ color: 'black' }}>{fullMovie.vote_average}</Text>
                    <Text style={{ color: 'black', marginLeft: 5 }}>
                        - {fullMovie.genres.map(genre => genre.name).join(', ')}
                    </Text>
                </View>
                <Text style={{ color: 'black', marginTop: 10, fontSize: 23, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ color: 'black', fontSize: 16 }}>
                    {fullMovie.overview}
                </Text>
                <Text style={{ color: 'black', marginTop: 10, fontSize: 23, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ color: 'black', fontSize: 18 }}>
                    {currencyFormatter.format(fullMovie.budget, { code: 'USD' })}
                </Text>
            </View>
            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ color: 'black', marginTop: 10, fontSize: 23, fontWeight: 'bold', marginHorizontal: 20 }}>
                    Reparto
                </Text>
                <FlatList
                    data={cast}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70 }}
                />
            </View>
        </>
    )
}
