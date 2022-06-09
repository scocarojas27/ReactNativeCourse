import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top: paddingTop } = useSafeAreaInsets()

    return (
        <Tab.Navigator
            style={{ paddingTop }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={({ route }) => ({
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary,
                },
                tabBarStyle: {
                    borderTopColor: colores.primary,
                    shadowColor: 'transparent',
                    elevation: 0,
                },
                tabBarIcon: ({ color, focused }) => {

                    let iconName: string = '';

                    switch (route.name) {
                        case 'Chat':
                            iconName = 'chatbox-outline';
                            break;
                        case 'Contacts':
                            iconName = 'people-outline';
                            break;
                        case 'Album':
                            iconName = 'images-outline';
                            break;
                    }

                    return <Text style={{ color }}>
                        <Icon name={iconName} size={20} color={color} />
                    </Text>
                }
            })}
        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Album" component={AlbumScreen} />
        </Tab.Navigator>
    );
}