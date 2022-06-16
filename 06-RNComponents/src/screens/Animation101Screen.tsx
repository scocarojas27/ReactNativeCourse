import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

export const Animation101Screen = () => {

    const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
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
                />
                <Text>&nbsp;</Text>
                <Button
                    title="Fade Out"
                    onPress={fadeOut}
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
