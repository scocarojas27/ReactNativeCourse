import React, { useState } from 'react'
import { View, Animated, Image, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {

    const { opacity, fadeIn } = useAnimation()
    const [isLoading, setIsLoading] = useState(true)
    const { theme: { colors } } = useContext(ThemeContext);

    const finishLoading = () => {
        fadeIn()
        setIsLoading(false)
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {
                isLoading && <ActivityIndicator style={{ position: 'absolute' }} color={colors.primary} size={30} />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any,
                    opacity,
                }}
            />
        </View>
    )
}
