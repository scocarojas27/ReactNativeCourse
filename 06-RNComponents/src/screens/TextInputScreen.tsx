import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {

    const { form, onChange, isSuscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribed: false
    })
    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <View style={styles.globalMargin}>
                    <HeaderTitle title='Text input' />
                    <TextInput
                        style={{ ...stylesTextInput.input, color: colors.text, borderColor: colors.border }}
                        placeholder='Name'
                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={(value) => onChange(value, 'name')}
                    />
                    <TextInput
                        style={{ ...stylesTextInput.input, color: colors.text, borderColor: colors.border }}
                        placeholder='Email'
                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={(value) => onChange(value, 'email')}
                        keyboardType='email-address'
                    />
                    <TextInput
                        style={{ ...stylesTextInput.input, color: colors.text, borderColor: colors.border }}
                        placeholder='Phone'
                        onChangeText={(value) => onChange(value, 'phone')}
                        keyboardType='phone-pad'
                    />
                    <View style={stylesTextInput.switchRow}>
                        <Text style={{ ...stylesTextInput.switchText, color: colors.text }}>Suscribirme</Text>
                        <CustomSwitch isOn={isSuscribed} onChange={(value) => onChange(value, 'isSuscribed')} />
                    </View>
                </View>
                <HeaderTitle title={JSON.stringify(form, null, 3)} />
                {/* <View style={{ height: 100, backgroundColor: 'transparent' }} /> */}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesTextInput = StyleSheet.create({
    input: {
        borderWidth: 1,
        color: 'rgba(0,0,0,0.5)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 5,
    },
    switchText: {
        fontSize: 25,
        color: 'black'
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    }
});