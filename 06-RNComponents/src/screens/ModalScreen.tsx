import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useContext } from 'react';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)
    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Modal screen' />
            <Button
                title='Open modal'
                onPress={() => { setIsVisible(true) }}
                color={colors.primary}
            />
            <Modal
                animationType='fade'
                visible={isVisible}
                transparent={true}
                style={
                    {
                        borderColor: colors.border,

                    }
                }
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: colors.background,
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 10,
                        borderColor: colors.border,
                        borderWidth: 1
                    }}>
                        <Text style={{ color: colors.text, fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
                        <Text style={{ color: colors.text, fontSize: 16, fontWeight: '300', marginBottom: 20 }}>Cuerpo del modal</Text>
                        <Button
                            title='Close modal'
                            onPress={() => { setIsVisible(false) }}
                            color={colors.primary}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
