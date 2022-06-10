import { AuthState } from "./AuthContext";

type AuthAction =
    | { type: 'signIn' }
    | { type: 'changeFavoriteIcon', payload: string }
    | { type: 'logOut' }
    | { type: 'changeUsername', payload: string }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: "not-yet"
            }
        case 'changeFavoriteIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
            break;
        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
        case 'changeUsername':
            return {
                ...state,
                username: action.payload
            }
        default:
            return state;
    }

} 