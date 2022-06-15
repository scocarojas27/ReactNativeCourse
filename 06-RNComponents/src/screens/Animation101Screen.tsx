import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native'

export const Animation101Screen = () => {

    const opacity = useRef(new Animated.Value(0)).current
    const top = useRef(new Animated.Value(-100)).current

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }
        ).start()

        Animated.timing(
            top,
            {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
                easing: Easing.bounce
            }
        ).start()
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }
        ).start()
        Animated.timing(
            top,
            {
                toValue: -100,
                duration: 700,
                useNativeDriver: true,
            }
        ).start()
    }

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                marginBottom: 20,
                opacity,
                transform: [{
                    translateY: top,
                }]
            }} />
            <View style={{ flexDirection: 'row' }}>
                <Button
                    title="Fade In"
                    onPress={fadeIn}
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
