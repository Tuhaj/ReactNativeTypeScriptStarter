import React from "react"
import {Button, StyleSheet, Text, View, Platform, PlatformOSType} from "react-native"
import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
    en: {
        greeting: 'Hello',
        test: 'English'
    },
    fr: {
        greeting: 'Bonjour!',
        test: 'French'
    }
};

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement: () => any;
    onDecrement: () => any;
}

const Hello = ({name, enthusiasmLevel = 1, onIncrement, onDecrement}: Props) => {
    let error = null;
    if ((enthusiasmLevel || 0) <= 0) {
        error = 'You could be a little more enthusiastic. :D';
    }
    const getExclamationMarks  = '!'.repeat(enthusiasmLevel);
    const platformText = {ios: 'iOS', android: 'Android', web: 'Web', macos: 'MacOS', windows: 'Windows' };

    return (
        <View style={styles.root}>
            <Text testID='enthusiasm-level'>Hodorio: { I18n.t('test') }</Text>
            { error ? <Text testID='error'>{error}</Text> : null }
            <Text testID='hello' style={styles.greeting}>
                {I18n.t('greeting') + ' ' + name + getExclamationMarks}
            </Text>
            <Text style={styles.greeting}  data-test='header' >
                {'Platform: ' + platformText[Platform.OS] }
            </Text>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button
                        title="-"
                        onPress={onDecrement}
                        accessibilityLabel="decrement"
                        color="red"
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        title="+"
                        onPress={onIncrement}
                        accessibilityLabel="increment"
                        color="blue"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        alignSelf: "center"
    },
    buttons: {
        flexDirection: "row",
        minHeight: 70,
        alignItems: "stretch",
        alignSelf: "center",
        borderWidth: 5
    },
    button: {
        flex: 1,
        paddingVertical: 0
    },
    greeting: {
        color: "#999",
        fontWeight: "bold"
    }
});

export default Hello;
