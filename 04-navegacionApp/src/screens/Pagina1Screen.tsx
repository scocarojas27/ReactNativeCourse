import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';

// interface Props extends StackScreenProps<any, any> { }
interface Props extends DrawerScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title='Menú'
                    onPress={() => navigation.toggleDrawer()}
                />
            )
        })
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Página 1</Text>
            <Button
                title='Ir a Pagina 2'
                onPress={() => navigation.navigate('Pagina2Screen')}
            />
            <Text style={{ color: 'black', marginVertical: 20, fontSize: 20, marginLeft: 5 }}>Navegar con argumentos</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.botonGrande}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'María'
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>María</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
