import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();
    // const { colors } = useTheme();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(menuItem.component as any)}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    size={23}
                    color='#5856D6'
                />
                <Text style={{
                    ...styles.itemText,
                    // color: colors.text
                }}>
                    {menuItem.name}
                </Text>
                <View style={{ flex: 1 }} />
                <Icon
                    name="chevron-forward-outline"
                    size={23}
                    color='#5856D6'
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        color: '#5856D6',
        fontSize: 18,
    }
});