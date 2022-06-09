import { StyleSheet } from "react-native";

export const colores = {
    primary: "#5856D6",
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        color: 'black',
        marginBottom: 10,
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
    },
    menuTexto: {
        color: 'black',
        fontSize: 20,
    },
    menuBoton: {
        marginVertical: 10,
    },
    botonBurger: {
        height: 40,
        width: 40,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5856D6',
    }
});