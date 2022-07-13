import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const ChangeThemeScreen = () => {

    const { setDarkTheme } = useContext(ThemeContext)

    return (
        <View style={
            styles.globalMargin
        }>
            <HeaderTitle title='Change Theme' />
            <TouchableOpacity
                onPress={setDarkTheme}
                activeOpacity={0.8}
                style={{
                    backgroundColor: '#5856D6',
                    justifyContent: 'center',
                    width: 150,
                    height: 50,
                    borderRadius: 25,
                }}>
                <Text
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 22,
                    }}>
                    Light / Dark
                </Text>
            </TouchableOpacity>
        </View>
    )
}
