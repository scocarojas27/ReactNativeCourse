import React from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
    const { top } = useSafeAreaInsets()

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
    )
}
