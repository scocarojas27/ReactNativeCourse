import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
// import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text, Platform } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabIOS />
        : <TabAndroid />
}

const BottomTabAndorid = createMaterialBottomTabNavigator();

const TabAndroid = () => {
    return (
        <BottomTabAndorid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colores.primary,
            }}
            screenOptions={
                ({ route }) => ({
                    tabBarActiveTintColor: colores.primary,
                    tabBarStyle: {
                        borderTopColor: colores.primary,
                        borderTopWidth: 0,
                        elevation: 0,
                    },
                    tabBarLabelStyle: {
                        fontSize: 14,
                    },
                    tabBarIcon: ({ color, focused }) => {

                        let iconName: string = '';

                        switch (route.name) {
                            case 'Tab1Screen':
                                iconName = 'information-circle-outline';
                                break;
                            case 'TopTapNavigator':
                                iconName = 'albums-outline';
                                break;
                            case 'StackNavigator':
                                iconName = 'file-tray-stacked-outline';
                                break;
                        }

                        return <Text style={{ color }}>
                            <Icon name={iconName} size={20} color={color} />
                        </Text>
                    }
                })
            }
        >
            <BottomTabAndorid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <BottomTabAndorid.Screen name="TopTapNavigator" options={{ title: 'TopTab' }} component={TopTabNavigator} />
            <BottomTabAndorid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTabAndorid.Navigator>
    );
}

const BottomTabIOS = createBottomTabNavigator();

const TabIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={
                ({ route }) => ({
                    tabBarActiveTintColor: colores.primary,
                    tabBarStyle: {
                        borderTopColor: colores.primary,
                        borderTopWidth: 0,
                        elevation: 0,
                    },
                    tabBarLabelStyle: {
                        fontSize: 14,
                    },
                    tabBarIcon: ({ color, focused, size }) => {

                        let iconName: string = '';

                        switch (route.name) {
                            case 'Tab1Screen':
                                iconName = 'information-circle-outline';
                                break;
                            case 'TopTapNavigator':
                                iconName = 'albums-outline';
                                break;
                            case 'StackNavigator':
                                iconName = 'file-tray-stacked-outline';
                                break;
                        }

                        return <Text style={{ color }}>
                            <Icon name={iconName} size={20} color={color} />
                        </Text>
                    }
                })
            }
        >
            {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>Hola</Text> }} component={Tab1Screen} /> */}
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <BottomTabIOS.Screen name="TopTapNavigator" options={{ title: 'TopTab' }} component={TopTabNavigator} />
            <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
}