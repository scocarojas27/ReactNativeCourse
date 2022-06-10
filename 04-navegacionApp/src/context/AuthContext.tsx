//Definir que info se manejará aquí	
import React from 'react'
import { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Estado inical

export const initialAuthState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

//Se usa para decrile al Ract cómo luce y qué expone el contexto

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logOut: () => void;
    changeUsername: (username: string) => void;
}


//Crear el contexto

export const AuthContext = createContext({} as AuthContextProps);

//Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, initialAuthState)

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavoriteIcon', payload: iconName })
    }

    const logOut = () => {
        dispatch({ type: 'logOut' })
    }

    const changeUsername = (username: string) => {
        dispatch({ type: 'changeUsername', payload: username })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logOut,
            changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    )
}