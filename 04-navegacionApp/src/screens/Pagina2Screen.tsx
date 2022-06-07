import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

    const navigator = useNavigation()

    useEffect(() => {
        navigator.setOptions({
            headerTitle: 'Hola mundo',
            headerBackTitle: '',
        })
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Página 2</Text>

            <Button
                title='Ir a Pagina 3'
                onPress={() => navigator.navigate('Pagina3Screen' as never)}
            />
        </View>
    )
}
