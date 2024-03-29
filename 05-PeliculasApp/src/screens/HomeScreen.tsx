import React, { useContext } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors'
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
    const { top } = useSafeAreaInsets()
    const { setMainColors } = useContext(GradientContext)

    const getPosterColors = async (index: number) => {

        const movie = nowPlaying[index]
        const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

        const [primary = 'green', secondary = 'orange'] = await getImageColors(uri)
        setMainColors({ primary, secondary })
    }

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColors(0)
        }
    }, [nowPlaying])

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <ActivityIndicator size={100} color="red" />
            </View>
        )
    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    {/*Carousel principal*/}
                    <View style={{ height: 440 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={(index) => getPosterColors(index)}
                        />
                    </View>
                    {/*Películas populares*/}
                    <HorizontalSlider title='Popular' movies={popular} />
                    {/*Películas populares*/}
                    <HorizontalSlider title="Top Rated" movies={topRated} />
                    {/*Películas populares*/}
                    <HorizontalSlider title='Upcoming' movies={upcoming} />
                </View>
            </ScrollView>
        </GradientBackground>
    )
}
