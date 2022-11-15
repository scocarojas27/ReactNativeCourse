import { Theme } from "@react-navigation/native"

type ThemeAction =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string,
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    colors: {
        primary: '#084F6A',
        background: 'white',
        card: 'black',
        text: 'black',
        border: 'black',
        notification: 'teal',
    },
    dividerColor: '#084F6A',
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    colors: {
        primary: '#75CEDB',
        background: 'black',
        card: 'white',
        text: 'white',
        border: 'white',
        notification: 'teal',
    },
    dividerColor: '#75CEDB',
}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'set_light_theme':
            return { ...lightTheme }
        case 'set_dark_theme':
            return { ...darkTheme }
        default:
            return state
    }
}