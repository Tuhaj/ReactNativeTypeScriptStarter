import React from "react";
import {Button, StyleSheet, Text, View, Platform} from "react-native";

import I18n from '../i18n/mobile';
import {HelloComopnentProps} from "../types";
import {platformText} from "../constants";

const Hello = ({name, enthusiasmLevel = 1, onIncrement, onDecrement}: HelloComopnentProps) => {
    let error = null;
    if ((enthusiasmLevel || 0) <= 0) {
        error = I18n.t('errorText');
    }
    const getExclamationMarks  = '!'.repeat(enthusiasmLevel);

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
