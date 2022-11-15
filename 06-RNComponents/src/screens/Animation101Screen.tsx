import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation'
import { useContext } from 'react';

export const Animation101Screen = () => {

    const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();
    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                backgroundColor: colors.primary,
                marginBottom: 20,
                opacity,
                transform: [{
                    translateY: position,
                }]
            }} />
            <View style={{ flexDirection: 'row' }}>
                <Button
                    title="Fade In"
                    onPress={() => {
                        fadeIn()
                        startMovingPosition()
                    }}
                    color={colors.primary}
                />
                <Text>&nbsp;</Text>
                <Button
                    title="Fade Out"
                    onPress={fadeOut}
                    color={colors.primary}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
    }
});
