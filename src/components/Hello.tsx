import React from "react"
import { Button, StyleSheet, Text, View, Platform } from "react-native"

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement: () => any;
    onDecrement: () => any;
}

const Hello = ({name, enthusiasmLevel = 1, onIncrement, onDecrement}: Props) => {
    if ((enthusiasmLevel || 0) <= 0) {
        throw new Error("You could be a little more enthusiastic. :D");
    }
    const getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!");
    const platformText = {ios: 'iOS', android: 'Android', web: 'Web' };

    return (
        <View style={styles.root}>
            <Text style={styles.greeting}  data-test='header' >
                {'Hello ' + name + getExclamationMarks(enthusiasmLevel)}
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
