import React, { useState } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets()

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>()
    const { theme: { colors } } = useContext(ThemeContext);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('refreshed')
            setRefreshing(false);
            setData('Hola mundo')
        }, 1500)
    }

    return (
        <ScrollView
            style={{
                marginTop: refreshing ? top : 0,
            }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor={colors.primary}
                    colors={['white', 'red', 'orange']}
                    style={{ backgroundColor: colors.primary }}
                    tintColor='white'
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull to refresh' />
                {
                    data && <HeaderTitle title={data} />
                }
            </View>
        </ScrollView>
    )
}
