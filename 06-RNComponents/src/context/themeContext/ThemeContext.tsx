import React, { createContext, useReducer } from "react";
import { Appearance, AppState, useColorScheme } from "react-native";
import { lightTheme, themeReducer, ThemeState, darkTheme } from './themeReducer';
import { useEffect } from 'react';

interface ThemeContextProps {
    theme: ThemeState; // TODO:
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

    // const colorScheme = useColorScheme()

    const [theme, dispatch] = useReducer(themeReducer, Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme)

    useEffect(() => {
        // Solo para IOS
        // colorScheme === 'light'
        //     ? setLightTheme()
        //     : setDarkTheme()

        AppState.addEventListener('change', (status) => {
            if (status === 'active') { //se valida el estado de la aplicación para hacer el cambio de tema
                Appearance.getColorScheme() === 'light'
                    ? setLightTheme()
                    : setDarkTheme()
            }
        })
    }, [])

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' })
        console.log('setDarkTheme')
    }

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' })
        console.log('setLightTheme')
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
