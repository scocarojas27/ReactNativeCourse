import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    texto: string;
    color?: string;
    colorTexto?: string;
    ancho?: boolean;
    accion: (numeroTexto: string) => void;
}

export const BotonCalc = ({ texto, color = "#2D2D2D", colorTexto = "white", ancho = false, accion }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => accion(texto)}
        >
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: ancho ? 170 : 80,
            }}>
                <Text style={{
                    ...styles.botonTexto,
                    color: colorTexto,
                }}>
                    {texto}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
