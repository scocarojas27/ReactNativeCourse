import React, { useRef } from 'react'
import { Animated, View, Button, Text } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade();

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Animated.View
                style={{
                    backgroundColor: '#084F6A',
                    width: 150,
                    height: 150,
                    borderColor: 'white',
                    borderWidth: 10,
                    marginBottom: 10,
                    opacity: opacity
                }}
            />
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
