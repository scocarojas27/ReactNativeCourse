import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front',
                title: 'App'
            }}
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
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
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row',
                    }}
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Icon name="locate-outline" size={30} color='black' />
                    <Text style={styles.menuTexto}>Navegación</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row',
                    }}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Icon name="settings-outline" size={30} color='black' />
                    <Text style={styles.menuTexto}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}