import React from 'react'
import { SectionList, View, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/appTheme'
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin",]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman",]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama",]
    }
];

export const CustomSectionListScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            {/* <HeaderTitle title='Section list' /> */}
            <SectionList
                sections={casas}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent={() => <HeaderTitle title='Section list' />}
                ListFooterComponent={() => (
                    <View style={{ marginBottom: 50 }}>
                        <HeaderTitle title={'Total de casas: ' + casas.length} />
                    </View>
                )}
                stickySectionHeadersEnabled
                renderItem={({ item }) => <Text style={{ color: colors.text }}>{item}</Text>}
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: colors.background }}>
                        <HeaderTitle title={section.casa} />
                    </View>
                )}
                renderSectionFooter={({ section }) => (
                    <HeaderTitle title={'Total: ' + section.data.length} />
                )}
                ItemSeparatorComponent={() => <ItemSeparator />}
                SectionSeparatorComponent={() => <ItemSeparator />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
