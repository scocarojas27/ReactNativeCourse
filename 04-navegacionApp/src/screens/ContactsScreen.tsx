import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const ContactsScreen = () => {

    const { signIn, authState } = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>ContactsScreen</Text>
            {
                (!authState.isLoggedIn) && <Button title="Sign In" onPress={signIn} />
            }
        </View>
    )
}
