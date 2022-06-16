import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const TextInputScreen = () => {
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Text input' />
            <TextInput
                style={stylesTextInput.input}
            />
        </View>
    )
}

const stylesTextInput = StyleSheet.create({
    input: {
        borderWidth: 5
    }
});