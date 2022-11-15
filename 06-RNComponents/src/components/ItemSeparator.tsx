import React from "react"
import { View } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';


export const ItemSeparator = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <View
            style={{
                borderBottomWidth: 1,
                // opacity: 0.4,
                borderColor: theme.dividerColor,
                marginVertical: 5
            }}
        />
    )
}