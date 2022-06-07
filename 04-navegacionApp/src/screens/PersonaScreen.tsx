import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { useEffect } from 'react';
import { RootStackParams } from '../navigator/StackNavigator';

// interface RouteParams {
//     id: number;
//     nombre: string;
// }s

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { }

export const PersonaScreen = ({ route, navigation }: Props) => {

    // const params = route.params as RouteParams
    const params = route.params

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre,
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Persona</Text>
            <Text style={styles.title}>{JSON.stringify(route.params, null, 3)}</Text>
        </View>
    )
}
