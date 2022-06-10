import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const AlbumScreen = () => {

    const { logOut, authState } = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>AlbumScreen</Text>
            {
                (authState.isLoggedIn) && <Button title="Log out" onPress={logOut} />
            }
        </View>
    )
}
