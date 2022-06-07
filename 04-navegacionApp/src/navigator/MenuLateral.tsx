import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front',
            }}
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder-480x480.gif'
                    }}
                    style={styles.avatar}
                />
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('StackNavigator')}
                >
                    <Text style={styles.menuTexto}>Navegación</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Text style={styles.menuTexto}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}